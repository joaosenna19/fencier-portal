"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import deleteMaterial from "@/services/deleteItem";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function DeleteMaterialModal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("deleteMaterials");
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const id = searchParams.get("id") || "";
  const param = searchParams.get("param") || "";

  const handleDelete = async () => {
    setIsLoading(true);
    const result = await deleteMaterial(param, id);
    router.push("/dashboard/product");
    setIsLoading(false);
    if (result.success) {
      toast({
        title: "Sucess!",
        description: "Material deleted successfully",
      });
    } else {
      toast({
        title: "Error!",
        description: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      {modal && (
        <div className="fixed left-0 top-0 w-full h-full bg-white bg-opacity-85 z-50 overflow-auto backdrop-blur flex justify-center items-center ">
          <div className="p-4 w-full max-w-md space-y-4 shadow">
            <div className="flex justify-end space-x-2">
              <p>Are you sure you want to delete it?</p>
              <Link href="/dashboard/product">
                <Button variant="destructive">Cancel</Button>
              </Link>
              <Button
                variant="outline"
                onClick={handleDelete}
                disabled={isLoading}
              >
                {isLoading && (
                  <Loader2 className="mr-2 animate-spin" size={16} />
                )}
                {isLoading ? "Deleting..." : "Delete"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
