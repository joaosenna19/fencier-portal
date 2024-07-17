// leadsService.ts
import { Lead } from "@/lib/types";
import { useToast } from "@/components/ui/use-toast";

const tenantId = "aa815619-4db7-4b79-a33f-9b51426db757";

export const fetchLeads = async (
  setData: React.Dispatch<React.SetStateAction<Lead[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_FENCIER_API_URL}/quote?tenantId=${tenantId}`
    );
    const data: Lead[] = await response.json();
    setData(data);
  } catch (error) {
    console.error("Error fetching leads:", error);
  } finally {
    setLoading(false);
  }
};

export const deleteLead = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_FENCIER_API_URL}/quote/?id=${id}`,
      {
        method: "DELETE",
      }
    );
    if (!res.ok) {
      return { success: false, message: "Failed to delete lead" };
    }
    const data = await res.json();
    return { success: true, message: "Lead deleted successfully" };
  } catch (error) {
    return { success: false, message: "Something went wrong" };
  }
};

export const editLead = async (
  id: string,
  status: "PENDING" | "ACCEPTED" | "REJECTED" | "ARCHIVED" | "CONTACTED",
  finalPrice: number,
  toast: ReturnType<typeof useToast>["toast"],
  fetchLeads: () => void
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_FENCIER_API_URL}/quote/?id=${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status, finalPrice }),
      }
    );
    if (!response.ok) {
      toast({
        title: "Error",
        description: `Failed to edit lead: ${response.statusText}`,
        variant: "destructive",
      });
      return;
    }

    const data = await response.json();
    fetchLeads();
    toast({
      title: "Lead edited",
      description: "The lead has been successfully edited.",
    });
  } catch (error) {
    console.error("Error editing lead:", error);
    toast({
      title: "Error",
      description: "An error occurred while editing the lead.",
      variant: "destructive",
    });
  }
};
