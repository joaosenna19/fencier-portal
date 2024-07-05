import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { MaterialFormSchema } from "@/components/AddMaterialModal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ColorInfo from "@/components/ColorInfo";

interface StyleInfoProps {
  style: {
    id: string;
    name: string;
    styleImage: File | undefined;
    colors: {
      name: string;
      colorImage: File | undefined;
      heights: {
        feet: number;
        pricePer8Ft: number;
        pricePer4Ft: number;
        priceSingleGate: number;
        priceDoubleGate: number;
        gateFeet: number;
      }[];
    }[];
  };
  styleIndex: number;
  register: UseFormRegister<MaterialFormSchema>;
  errors: FieldErrors<MaterialFormSchema>;
  setValue: UseFormSetValue<MaterialFormSchema>;
}

const StyleInfo: React.FC<StyleInfoProps> = ({
  style,
  styleIndex,
  register,
  errors,
  setValue,
}) => (
  <div key={style.id} className="space-y-2 mb-1">
    <Label>Style Name</Label>
    <Input
      type="text"
      placeholder="Style Name"
      className="w-full"
      {...register(`styles.${styleIndex}.name`)}
    />
    {errors.styles?.[styleIndex]?.name && (
      <p className="text-red-500 text-xs italic">
        {errors.styles[styleIndex].name?.message}
      </p>
    )}
    <Label>Style Image</Label>
    <Input
      type="file"
      className="w-full"
      onChange={(e) => {
        const file = e.target.files?.[0];
        if (file) {
          setValue(`styles.${styleIndex}.styleImage`, file);
        }
      }}
    />
    {errors.styles?.[styleIndex]?.styleImage && (
      <p className="text-red-500 text-xs italic">
        {errors.styles[styleIndex].styleImage?.message}
      </p>
    )}

    {style.colors.map((color, colorIndex) => (
      <ColorInfo
        key={colorIndex}
        color={color}
        styleIndex={styleIndex}
        colorIndex={colorIndex}
        register={register}
        errors={errors}
        setValue={setValue}
      />
    ))}
  </div>
);

export default StyleInfo;
