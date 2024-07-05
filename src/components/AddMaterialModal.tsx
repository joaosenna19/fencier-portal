"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
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
import { handleSubmitForm } from "@/services/submitHandler";
import MaterialInfo from "@/components/MaterialInfo";
import StyleInfo from "@/components/StyleInfo";
import { useToast } from "@/components/ui/use-toast";
import { materialSchema } from "@/services/schemas";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";

export type MaterialFormSchema = z.infer<typeof materialSchema>;

export default function AddMaterialModal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("addMaterials");
  const tenantId = "aa815619-4db7-4b79-a33f-9b51426db757";
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<MaterialFormSchema>({
    resolver: zodResolver(materialSchema),
    defaultValues: {
      materialName: "",
      materialImage: undefined,
      styles: [
        {
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
      ],
    },
  });

  const { fields: styleFields, append: appendStyle } = useFieldArray({
    control,
    name: "styles",
  });

  const onSubmit: SubmitHandler<MaterialFormSchema> = async (data) => {
    setIsLoading(true);
    const result = await handleSubmitForm(data, reset, tenantId);
    setIsLoading(false);
    if (result.success) {
      toast({
        title: "Success",
        description: "Material added successfully",
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
                <CardTitle>Add a new Material</CardTitle>
                <CardDescription>
                  In order to add a material, you must also provide at least one
                  style, one color and one height.
                </CardDescription>
              </CardHeader>
              <CardContent className="py-1">
                <MaterialInfo
                  register={register}
                  errors={errors}
                  setValue={setValue}
                />

                {styleFields.map((style, styleIndex) => (
                  <StyleInfo
                    key={style.id}
                    style={style}
                    styleIndex={styleIndex}
                    register={register}
                    errors={errors}
                    setValue={setValue}
                  />
                ))}
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
              </CardContent>
            </form>
          </div>
        </Card>
      )}
    </>
  );
}
