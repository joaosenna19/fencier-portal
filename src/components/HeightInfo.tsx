import { FieldErrors, UseFormRegister } from "react-hook-form";
import { MaterialFormSchema } from "@/components/AddMaterialModal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface HeightInfoProps {
  height: {
    feet: number;
    pricePer8Ft: number;
    pricePer4Ft: number;
    priceSingleGate: number;
    priceDoubleGate: number;
    gateFeet: number;
  };
  styleIndex: number;
  colorIndex: number;
  heightIndex: number;
  register: UseFormRegister<MaterialFormSchema>;
  errors: FieldErrors<MaterialFormSchema>;
}

const HeightInfo: React.FC<HeightInfoProps> = ({
  height,
  styleIndex,
  colorIndex,
  heightIndex,
  register,
  errors,
}) => (
  <div className="space-y-2 mb-1">
    <div className="flex">
      <div className="flex flex-col mx-1">
        <Label className="mb-1 text-xs">Height Feet</Label>
        <Input
          type="number"
          placeholder="Height Feet"
          className="w-full"
          {...register(
            `styles.${styleIndex}.colors.${colorIndex}.heights.${heightIndex}.feet`,
            { valueAsNumber: true }
          )}
        />
        {errors.styles?.[styleIndex]?.colors?.[colorIndex]?.heights?.[
          heightIndex
        ]?.feet && (
          <p className="text-red-500 text-xs italic">
            {
              errors.styles[styleIndex].colors[colorIndex].heights[heightIndex]
                .feet?.message
            }
          </p>
        )}
      </div>
      <div className="flex flex-col mx-1">
        <Label className="mb-1 text-xs">Price per 8ft</Label>
        <Input
          type="number"
          placeholder="Price per 8ft"
          className="w-full"
          {...register(
            `styles.${styleIndex}.colors.${colorIndex}.heights.${heightIndex}.pricePer8Ft`,
            { valueAsNumber: true }
          )}
        />
        {errors.styles?.[styleIndex]?.colors?.[colorIndex]?.heights?.[
          heightIndex
        ]?.pricePer8Ft && (
          <p className="text-red-500 text-xs italic">
            {
              errors.styles[styleIndex].colors[colorIndex].heights[heightIndex]
                .pricePer8Ft?.message
            }
          </p>
        )}
      </div>
      <div className="flex flex-col mx-1">
        <Label className="mb-1 text-xs">Price per 4ft</Label>
        <Input
          type="number"
          placeholder="Price per 4ft"
          className="w-full"
          {...register(
            `styles.${styleIndex}.colors.${colorIndex}.heights.${heightIndex}.pricePer4Ft`,
            { valueAsNumber: true }
          )}
        />
        {errors.styles?.[styleIndex]?.colors?.[colorIndex]?.heights?.[
          heightIndex
        ]?.pricePer4Ft && (
          <p className="text-red-500 text-xs italic">
            {
              errors.styles[styleIndex].colors[colorIndex].heights[heightIndex]
                .pricePer4Ft?.message
            }
          </p>
        )}
      </div>
    </div>
    <div className="flex">
      <div className="flex flex-col mx-1">
        <Label className="mb-1 text-xs">Price Single Gate</Label>
        <Input
          type="number"
          placeholder="Price Single Gate"
          className="w-full"
          {...register(
            `styles.${styleIndex}.colors.${colorIndex}.heights.${heightIndex}.priceSingleGate`,
            { valueAsNumber: true }
          )}
        />
        {errors.styles?.[styleIndex]?.colors?.[colorIndex]?.heights?.[
          heightIndex
        ]?.priceSingleGate && (
          <p className="text-red-500 text-xs italic">
            {
              errors.styles[styleIndex].colors[colorIndex].heights[heightIndex]
                .priceSingleGate?.message
            }
          </p>
        )}
      </div>
      <div className="flex flex-col mx-1">
        <Label className="mb-1 text-xs">Price Double Gate</Label>
        <Input
          type="number"
          placeholder="Price Double Gate"
          className="w-full"
          {...register(
            `styles.${styleIndex}.colors.${colorIndex}.heights.${heightIndex}.priceDoubleGate`,
            { valueAsNumber: true }
          )}
        />
        {errors.styles?.[styleIndex]?.colors?.[colorIndex]?.heights?.[
          heightIndex
        ]?.priceDoubleGate && (
          <p className="text-red-500 text-xs italic">
            {
              errors.styles[styleIndex].colors[colorIndex].heights[heightIndex]
                .priceDoubleGate?.message
            }
          </p>
        )}
      </div>
      <div className="flex flex-col mx-1">
        <Label className="mb-1 text-xs">Gate Feet</Label>
        <Input
          type="number"
          placeholder="Gate Feet"
          className="w-full"
          {...register(
            `styles.${styleIndex}.colors.${colorIndex}.heights.${heightIndex}.gateFeet`,
            { valueAsNumber: true }
          )}
        />
        {errors.styles?.[styleIndex]?.colors?.[colorIndex]?.heights?.[
          heightIndex
        ]?.gateFeet && (
          <p className="text-red-500 text-xs italic">
            {
              errors.styles[styleIndex].colors[colorIndex].heights[heightIndex]
                .gateFeet?.message
            }
          </p>
        )}
      </div>
    </div>
  </div>
);

export default HeightInfo;
