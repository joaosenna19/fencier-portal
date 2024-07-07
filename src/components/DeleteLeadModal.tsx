"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { deleteLead } from "@/services/leadsService";

export default function DeleteLeadModal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("deleteLead");
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const id = searchParams.get("id") || "";

  const handleDelete = async () => {
    setIsLoading(true);
    const result = await deleteLead(id);
    router.push("/dashboard/lead");
    setIsLoading(false);
    if (result.success) {
      toast({
        title: "Sucess!",
        description: "Lead deleted successfully",
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
              <Link href="/dashboard/lead">
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
