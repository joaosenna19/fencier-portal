import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type EditLeadFormProps = {
  initialStatus: "PENDING" | "ACCEPTED" | "REJECTED" | "ARCHIVED" | "CONTACTED";
  initialFinalPrice: number;
  onSubmit: (
    status: "PENDING" | "ACCEPTED" | "REJECTED" | "ARCHIVED" | "CONTACTED",
    finalPrice: number
  ) => void;
};

const EditLeadForm: React.FC<EditLeadFormProps> = ({
  initialStatus,
  initialFinalPrice,
  onSubmit,
}) => {
  const [status, setStatus] = useState<"PENDING" | "ACCEPTED" | "REJECTED" | "ARCHIVED" | "CONTACTED">(
    initialStatus
  );
  const [finalPrice, setFinalPrice] = useState<number>(initialFinalPrice);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(status, finalPrice);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-medium">Update Details</h4>
      </div>
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-1.5">
          <Label htmlFor="status">Status</Label>
          <Select
            value={status}
            onValueChange={(value) =>
              setStatus(value as "PENDING" | "ACCEPTED" | "REJECTED" | "ARCHIVED" | "CONTACTED")
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="PENDING">Pending</SelectItem>
              <SelectItem value="ACCEPTED">Accepted</SelectItem>
              <SelectItem value="REJECTED">Rejected</SelectItem>
              <SelectItem value="ARCHIVED">Archived</SelectItem>
              <SelectItem value="CONTACTED">Contacted</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="price">Final Price</Label>
          <Input
            id="price"
            type="number"
            placeholder="$0.00"
            value={finalPrice}
            onChange={(e) => setFinalPrice(parseFloat(e.target.value))}
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
};

export default EditLeadForm;
