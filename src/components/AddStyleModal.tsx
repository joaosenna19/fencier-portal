"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { styleSchema } from "@/services/schemas";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { fetchMaterials } from "@/services/fetchMaterial";
import { Material } from "@/interfaces/material";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { handleAddStyleSubmitForm } from "@/services/submitHandler";

export type StyleFormSchema = z.infer<typeof styleSchema>;

export default function AddStyleModal() {
  const [materials, setMaterials] = useState<Material[]>([]);
  const searchParams = useSearchParams();
  const modal = searchParams.get("addStyles");
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMaterialId, setSelectedMaterialId] = useState<string | null>(
    null
  );
  const router = useRouter();

  useEffect(() => {
    const fetchAndSetMaterials = async () => {
      setIsLoading(true);
      const data = await fetchMaterials();
      setMaterials(data);
      setIsLoading(false);
    };
    fetchAndSetMaterials();
  }, []);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<StyleFormSchema>({
    resolver: zodResolver(styleSchema),
    defaultValues: {
      name: "",
      styleImage: undefined,
      colors: [
        {
          name: "",
          colorImage: undefined,
          heights: [
            {
              feet: 0,
              pricePer8Ft: 0,
              pricePer4Ft: 0,
              priceSingleGate: 0,
              priceDoubleGate: 0,
              gateFeet: 0,
            },
          ],
        },
      ],
    },
  });

  const { fields: colorFields } = useFieldArray({
    control,
    name: "colors",
  });

  const { fields: heightFields } = useFieldArray({
    control,
    name: "colors.0.heights",
  });

  const onSubmit: SubmitHandler<StyleFormSchema> = async (data) => {
    setIsLoading(true);
    const result = await handleAddStyleSubmitForm(
      data,
      selectedMaterialId as string
    );
    setIsLoading(false);
    if (result.success) {
      toast({
        title: "Success",
        description: "Style added successfully",
      });
      router.push("/dashboard/product");
    } else {
      toast({
        title: "Error",
        description: result.error || "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      {modal && (
        <Card className="fixed inset-0 w-full h-full bg-white bg-opacity-60 z-50 flex justify-center items-center backdrop-blur">
          <div className="p-4 w-full max-w-md max-h-screen overflow-y-auto space-y-2 shadow bg-white">
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardHeader className="m-0 py-0">
                <CardTitle>Add a new Style</CardTitle>
                <CardDescription>
                  In order to add a style, you must also provide at least one
                  color and one height.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Label
                    htmlFor="materialId"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Select Material
                  </Label>
                  <Select
                    onValueChange={setSelectedMaterialId}
                    value={selectedMaterialId?.toString()}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select material" />
                    </SelectTrigger>
                    <SelectContent>
                      {materials.map((material) => (
                        <SelectItem key={material.id} value={material.id}>
                          {material.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Label>Style Name</Label>
                <Input
                  type="text"
                  placeholder="Style Name"
                  className="w-full"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs italic">
                    {errors.name.message}
                  </p>
                )}

                <Label>Style Image</Label>
                <Input
                  type="file"
                  className="w-full"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setValue("styleImage", file);
                    }
                  }}
                />
                {errors.styleImage && (
                  <p className="text-red-500 text-xs italic">
                    {errors.styleImage.message}
                  </p>
                )}

                {colorFields.map((color, colorIndex) => (
                  <div key={color.id} className="mb-4 p-2">
                    <Label>Color Name</Label>
                    <Input
                      type="text"
                      placeholder="Color Name"
                      className="w-full"
                      {...register(`colors.${colorIndex}.name`)}
                    />
                    {errors.colors?.[colorIndex]?.name && (
                      <p className="text-red-500 text-xs italic">
                        {errors.colors[colorIndex]?.name?.message}
                      </p>
                    )}

                    <Label>Color Image</Label>
                    <Input
                      type="file"
                      className="w-full"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setValue(`colors.${colorIndex}.colorImage`, file);
                        }
                      }}
                    />
                    {errors.colors?.[colorIndex]?.colorImage && (
                      <p className="text-red-500 text-xs italic">
                        {errors.colors[colorIndex]?.colorImage?.message}
                      </p>
                    )}

                    {heightFields.map((height, heightIndex) => (
                      <div key={height.id} className="flex flex-col mb-2">
                        <div className="flex">
                          <div className="flex flex-col mx-1">
                            <Label className="mb-1 text-xs">Height Feet</Label>
                            <Input
                              type="number"
                              placeholder="Height Feet"
                              className="w-full"
                              {...register(
                                `colors.${colorIndex}.heights.${heightIndex}.feet`,
                                { valueAsNumber: true }
                              )}
                            />
                            {errors.colors?.[colorIndex]?.heights?.[heightIndex]
                              ?.feet && (
                              <p className="text-red-500 text-xs italic">
                                {
                                  errors.colors[colorIndex].heights[heightIndex]
                                    ?.feet?.message
                                }
                              </p>
                            )}
                          </div>
                          <div className="flex flex-col mx-1">
                            <Label className="mb-1 text-xs">
                              Price per 8ft
                            </Label>
                            <Input
                              type="number"
                              placeholder="Price per 8ft"
                              className="w-full"
                              {...register(
                                `colors.${colorIndex}.heights.${heightIndex}.pricePer8Ft`,
                                { valueAsNumber: true }
                              )}
                            />
                            {errors.colors?.[colorIndex]?.heights?.[heightIndex]
                              ?.pricePer8Ft && (
                              <p className="text-red-500 text-xs italic">
                                {
                                  errors.colors[colorIndex].heights[heightIndex]
                                    ?.pricePer8Ft?.message
                                }
                              </p>
                            )}
                          </div>
                          <div className="flex flex-col mx-1">
                            <Label className="mb-1 text-xs">
                              Price per 4ft
                            </Label>
                            <Input
                              type="number"
                              placeholder="Price per 4ft"
                              className="w-full"
                              {...register(
                                `colors.${colorIndex}.heights.${heightIndex}.pricePer4Ft`,
                                { valueAsNumber: true }
                              )}
                            />
                            {errors.colors?.[colorIndex]?.heights?.[heightIndex]
                              ?.pricePer4Ft && (
                              <p className="text-red-500 text-xs italic">
                                {
                                  errors.colors[colorIndex].heights[heightIndex]
                                    ?.pricePer4Ft?.message
                                }
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex flex-col mx-1">
                            <Label className="mb-1 text-xs">
                              Price Single Gate
                            </Label>
                            <Input
                              type="number"
                              placeholder="Price Single Gate"
                              className="w-full"
                              {...register(
                                `colors.${colorIndex}.heights.${heightIndex}.priceSingleGate`,
                                { valueAsNumber: true }
                              )}
                            />
                            {errors.colors?.[colorIndex]?.heights?.[heightIndex]
                              ?.priceSingleGate && (
                              <p className="text-red-500 text-xs italic">
                                {
                                  errors.colors[colorIndex].heights[heightIndex]
                                    ?.priceSingleGate?.message
                                }
                              </p>
                            )}
                          </div>
                          <div className="flex flex-col mx-1">
                            <Label className="mb-1 text-xs">
                              Price Double Gate
                            </Label>
                            <Input
                              type="number"
                              placeholder="Price Double Gate"
                              className="w-full"
                              {...register(
                                `colors.${colorIndex}.heights.${heightIndex}.priceDoubleGate`,
                                { valueAsNumber: true }
                              )}
                            />
                            {errors.colors?.[colorIndex]?.heights?.[heightIndex]
                              ?.priceDoubleGate && (
                              <p className="text-red-500 text-xs italic">
                                {
                                  errors.colors[colorIndex].heights[heightIndex]
                                    ?.priceDoubleGate?.message
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
                                `colors.${colorIndex}.heights.${heightIndex}.gateFeet`,
                                { valueAsNumber: true }
                              )}
                            />
                            {errors.colors?.[colorIndex]?.heights?.[heightIndex]
                              ?.gateFeet && (
                              <p className="text-red-500 text-xs italic">
                                {
                                  errors.colors[colorIndex].heights[heightIndex]
                                    ?.gateFeet?.message
                                }
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </CardContent>
              <CardFooter className="flex justify-end mx-0 p-0">
                <Link href="/dashboard/product">
                  <Button
                    variant="destructive"
                    className="mr-2"
                    disabled={isLoading}
                  >
                    Cancel
                  </Button>
                </Link>
                <Button
                  type="submit"
                  className="bg-blue-400 hover:bg-blue-500 flex items-center"
                  disabled={isLoading}
                >
                  {isLoading && (
                    <Loader2 className="mr-2 animate-spin" size={16} />
                  )}
                  {isLoading ? "Saving..." : "Save"}
                </Button>
              </CardFooter>
            </form>
          </div>
        </Card>
      )}
    </>
  );
}
