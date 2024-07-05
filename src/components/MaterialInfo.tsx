import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { MaterialFormSchema } from "@/components/AddMaterialModal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface MaterialInfoProps {
  register: UseFormRegister<MaterialFormSchema>;
  errors: FieldErrors<MaterialFormSchema>;
  setValue: UseFormSetValue<MaterialFormSchema>;
}

const MaterialInfo: React.FC<MaterialInfoProps> = ({
  register,
  errors,
  setValue,
}) => (
  <>
    <div className="space-y-2 mb-1">
      <Label>Material Name</Label>
      <Input
        type="text"
        placeholder="Material Name"
        className="w-full"
        {...register("materialName")}
      />
      {errors.materialName && (
        <p className="text-red-500 text-xs italic">
          {errors.materialName.message}
        </p>
      )}
    </div>
    <div className="space-y-2 mb-1">
      <Label>Material Image</Label>
      <Input
        type="file"
        className="w-full"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            setValue("materialImage", file);
          }
        }}
      />
      {errors.materialImage && (
        <p className="text-red-500 text-xs italic">
          {errors.materialImage.message}
        </p>
      )}
    </div>
  </>
);

export default MaterialInfo;
