import { Separator } from "@/components/ui/separator";
import { XIcon } from "lucide-react";
import { Lead } from "@/lib/types";

type LeadsDetailProps = {
  lead: Lead;
};

export default function LeadsDetail({ lead }: LeadsDetailProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-medium">Material Details</h4>
        <XIcon className="w-5 h-5 text-muted-foreground cursor-pointer" />
      </div>
      <Separator />
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        <div className="text-muted-foreground">Material:</div>
        <div>{lead.material === null ? "N/A" : lead.material.name}</div>
        <div className="text-muted-foreground">Style:</div>
        <div>{lead.style === null ? "N/A" : lead.style.name}</div>
        <div className="text-muted-foreground">Color:</div>
        <div>{lead.color === null ? "N/A" : lead.color.name}</div>
        <div className="text-muted-foreground">Height:</div>
        <div>{lead.height === null ? "N/A" : lead.height.feet}</div>
        <div className="text-muted-foreground">Total Feet:</div>
        <div>{lead.height === null ? "N/A" : lead.feet}</div>
      </div>
    </div>
  );
}
