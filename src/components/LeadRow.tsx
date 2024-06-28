import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Smile, Frown, Clock9, PencilLine, Trash } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Lead } from "@/lib/types";
import { useState } from "react";
import {
  formatPhoneNumber,
  formatPostalCode,
} from "@/functions/formattingFunctions";
import EditLeadForm from "@/components/EditLeadForm";
import LeadsDetail from "@/components/LeadsDetail";

type LeadRowProps = {
  lead: Lead;
  onDelete: (id: string) => void;
  onEdit: (
    id: string,
    status: "PENDING" | "ACCEPTED" | "REJECTED",
    finalPrice: number
  ) => Promise<void>;
};

export default function LeadRow(props: LeadRowProps) {
  const [status, setStatus] = useState<"PENDING" | "ACCEPTED" | "REJECTED">(
    props.lead.status
  );
  const [finalPrice, setFinalPrice] = useState<number>(props.lead.finalPrice);

  const handleEdit = async (
    status: "PENDING" | "ACCEPTED" | "REJECTED",
    finalPrice: number
  ) => {
    await onEdit(lead.id, status, finalPrice);
  };

  const statusIcons: { [key: string]: JSX.Element } = {
    PENDING: <Clock9 className="w-4 h-4 inline-block mr-1" />,
    ACCEPTED: <Smile className="w-4 h-4 inline-block mr-1" />,
    REJECTED: <Frown className="w-4 h-4 inline-block mr-1" />,
  };

  const statusColors: { [key: string]: string } = {
    PENDING: "text-yellow-600",
    ACCEPTED: " text-green-600",
    REJECTED: " text-red-600",
  };

  const { lead, onDelete, onEdit } = props;

  return (
    <TableRow key={lead.id}>
      <TableCell>
        {lead.customerInfo.firstName} {lead.customerInfo.lastName}
      </TableCell>
      <TableCell>{formatPhoneNumber(lead.customerInfo.phoneNumber)}</TableCell>
      <TableCell>{lead.customerInfo.email}</TableCell>
      <TableCell>
        {formatPostalCode(lead.customerInfo.address[0]?.postalCode)}
      </TableCell>
      <TableCell>${lead.finalPrice}</TableCell>
      <TableCell>
        <TableCell>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">View</Button>
            </PopoverTrigger>
            <PopoverContent>
              <LeadsDetail lead={lead} />
            </PopoverContent>
          </Popover>
        </TableCell>
      </TableCell>
      <TableCell className="text-center">
        <div className="flex">
          {statusIcons[lead.status]}
          <span className={`${statusColors[lead.status]}`}>{lead.status}</span>
        </div>
      </TableCell>
      <TableCell>
        <Popover>
          <PopoverTrigger asChild>
            <Button className="bg-blue-500 hover:bg-blue-600">
              <PencilLine />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <EditLeadForm
              initialStatus={status}
              initialFinalPrice={finalPrice}
              onSubmit={handleEdit}
            />
          </PopoverContent>
        </Popover>
      </TableCell>
      <TableCell>
        <Button variant="destructive" onClick={() => onDelete(lead.id)}>
          <Trash />
        </Button>
      </TableCell>
    </TableRow>
  );
}
