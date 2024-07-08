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
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { heightSchema } from "@/services/schemas";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Material } from "@/interfaces/material";
import { Style } from "@/interfaces/material";
import { Color } from "@/interfaces/material";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { handleAddHeightSubmitForm } from "@/services/submitHandler";
import {
  fetchColors,
  fetchStyles,
  fetchMaterials,
} from "@/services/fetchMaterial";

export type HeightFormSchema = z.infer<typeof heightSchema>;

export default function AddHeightModal() {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [styles, setStyles] = useState<Style[]>([]);
  const [colors, setColors] = useState<Color[]>([]);
  const [selectedMaterialId, setSelectedMaterialId] = useState<string | null>(
    null
  );
  const [selectedStyleId, setSelectedStyleId] = useState<string | null>(null);
  const [selectedColorId, setSelectedColorId] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const modal = searchParams.get("addHeights");
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
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

  useEffect(() => {
    if (selectedMaterialId) {
      const fetchAndSetStyles = async () => {
        setIsLoading(true);
        const data = await fetchStyles(selectedMaterialId);
        setStyles(data);
        setIsLoading(false);
      };
      fetchAndSetStyles();
    }
  }, [selectedMaterialId]);

  useEffect(() => {
    if (selectedStyleId) {
      const fetchAndSetColors = async () => {
        setIsLoading(true);
        const data = await fetchColors(selectedStyleId);
        setColors(data);
        setIsLoading(false);
      };
      fetchAndSetColors();
    }
  }, [selectedStyleId]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<HeightFormSchema>({
    resolver: zodResolver(heightSchema),
    defaultValues: {
      feet: 0,
      pricePer8Ft: 0,
      pricePer4Ft: 0,
      priceSingleGate: 0,
      priceDoubleGate: 0,
      gateFeet: 0,
    },
  });

  const onSubmit: SubmitHandler<HeightFormSchema> = async (data) => {
    if (!selectedMaterialId || !selectedStyleId || !selectedColorId) {
      toast({
        title: "Error",
        description: "Please select a material, style, and color.",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    const result = await handleAddHeightSubmitForm(data, selectedColorId);
    setIsLoading(false);
    if (result.success) {
      toast({
        title: "Success",
        description: "Height added successfully",
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
                <CardTitle>Add a new Height</CardTitle>
                <CardDescription>
                  In order to add a height, you must also provide pricing
                  details.
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
                    onValueChange={(value) => setSelectedMaterialId(value)}
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

                {selectedMaterialId && (
                  <div className="mb-4">
                    <Label
                      htmlFor="styleId"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Select Style
                    </Label>
                    <Select
                      onValueChange={(value) => setSelectedStyleId(value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                      <SelectContent>
                        {styles.map((style) => (
                          <SelectItem key={style.id} value={style.id}>
                            {style.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {selectedStyleId && (
                  <div className="mb-4">
                    <Label
                      htmlFor="colorId"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Select Color
                    </Label>
                    <Select
                      onValueChange={(value) => setSelectedColorId(value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select color" />
                      </SelectTrigger>
                      <SelectContent>
                        {colors.map((color) => (
                          <SelectItem key={color.id} value={color.id}>
                            {color.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <Label>Height Feet</Label>
                <Input
                  type="number"
                  placeholder="Height Feet"
                  className="w-full"
                  {...register("feet", { valueAsNumber: true })}
                />
                {errors.feet && (
                  <p className="text-red-500 text-xs italic">
                    {errors.feet.message}
                  </p>
                )}

                <Label>Price per 8ft</Label>
                <Input
                  type="number"
                  placeholder="Price per 8ft"
                  className="w-full"
                  {...register("pricePer8Ft", { valueAsNumber: true })}
                />
                {errors.pricePer8Ft && (
                  <p className="text-red-500 text-xs italic">
                    {errors.pricePer8Ft.message}
                  </p>
                )}

                <Label>Price per 4ft</Label>
                <Input
                  type="number"
                  placeholder="Price per 4ft"
                  className="w-full"
                  {...register("pricePer4Ft", { valueAsNumber: true })}
                />
                {errors.pricePer4Ft && (
                  <p className="text-red-500 text-xs italic">
                    {errors.pricePer4Ft.message}
                  </p>
                )}

                <Label>Price Single Gate</Label>
                <Input
                  type="number"
                  placeholder="Price Single Gate"
                  className="w-full"
                  {...register("priceSingleGate", { valueAsNumber: true })}
                />
                {errors.priceSingleGate && (
                  <p className="text-red-500 text-xs italic">
                    {errors.priceSingleGate.message}
                  </p>
                )}

                <Label>Price Double Gate</Label>
                <Input
                  type="number"
                  placeholder="Price Double Gate"
                  className="w-full"
                  {...register("priceDoubleGate", { valueAsNumber: true })}
                />
                {errors.priceDoubleGate && (
                  <p className="text-red-500 text-xs italic">
                    {errors.priceDoubleGate.message}
                  </p>
                )}

                <Label>Gate Feet</Label>
                <Input
                  type="number"
                  placeholder="Gate Feet"
                  className="w-full"
                  {...register("gateFeet", { valueAsNumber: true })}
                />
                {errors.gateFeet && (
                  <p className="text-red-500 text-xs italic">
                    {errors.gateFeet.message}
                  </p>
                )}
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
