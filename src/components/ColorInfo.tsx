import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { MaterialFormSchema } from "@/components/AddMaterialModal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import HeightInfo from "@/components/HeightInfo";

interface ColorInfoProps {
  color: {
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
  };
  styleIndex: number;
  colorIndex: number;
  register: UseFormRegister<MaterialFormSchema>;
  errors: FieldErrors<MaterialFormSchema>;
  setValue: UseFormSetValue<MaterialFormSchema>;
}

const ColorInfo: React.FC<ColorInfoProps> = ({
  color,
  styleIndex,
  colorIndex,
  register,
  errors,
  setValue,
}) => (
  <div className="space-y-2 mb-1">
    <Label>Color Name</Label>
    <Input
      type="text"
      placeholder="Color Name"
      className="w-full"
      {...register(`styles.${styleIndex}.colors.${colorIndex}.name`)}
    />
    {errors.styles?.[styleIndex]?.colors?.[colorIndex]?.name && (
      <p className="text-red-500 text-xs italic">
        {errors.styles[styleIndex].colors[colorIndex].name?.message}
      </p>
    )}
    <Label>Color Image</Label>
    <Input
      type="file"
      className="w-full"
      onChange={(e) => {
        const file = e.target.files?.[0];
        if (file) {
          setValue(
            `styles.${styleIndex}.colors.${colorIndex}.colorImage`,
            file
          );
        }
      }}
    />
    {errors.styles?.[styleIndex]?.colors?.[colorIndex]?.colorImage && (
      <p className="text-red-500 text-xs italic">
        {errors.styles[styleIndex].colors[colorIndex].colorImage?.message}
      </p>
    )}

    {color.heights.map((height, heightIndex) => (
      <HeightInfo
        key={heightIndex}
        height={height}
        styleIndex={styleIndex}
        colorIndex={colorIndex}
        heightIndex={heightIndex}
        register={register}
        errors={errors}
      />
    ))}
  </div>
);

export default ColorInfo;
