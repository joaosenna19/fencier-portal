"use client";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  Table,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { Lead } from "@/lib/types";
import LeadRow from "@/components/LeadRow";
import { useToast } from "@/components/ui/use-toast";
import { fetchLeads, deleteLead, editLead } from "@/services/leadsService";

export default function Leadsheet() {
  const [data, setData] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>("");
  const { toast } = useToast();

  useEffect(() => {
    fetchLeads(setData, setLoading);
  }, []);

  const handleStatusFilterChange = (value: string) => {
    setStatusFilter(value);
  };

  const filteredData =
    statusFilter !== "ALL"
      ? data.filter(
          (lead) => lead.status.toLowerCase() === statusFilter.toLowerCase()
        )
      : data;

  return (
    <div className="flex">
      <main className="flex-grow p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-medium">Leads</h1>
          <div className="grid gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="filter">Filter by status</Label>
              <Select onValueChange={handleStatusFilterChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">All</SelectItem>
                  <SelectItem value="PENDING">Pending</SelectItem>
                  <SelectItem value="ACCEPTED">Accepted</SelectItem>
                  <SelectItem value="REJECTED">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center items-center py-8">
            <div className="w-10 h-10 border-4 border-t-4 border-t-transparent border-gray-300 rounded-full animate-spin"></div>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Name</TableHead>
                <TableHead className="text-center">Phone Number</TableHead>
                <TableHead className="text-center">Email</TableHead>
                <TableHead className="text-center">Postal Code</TableHead>
                <TableHead className="text-center">Quote Price</TableHead>
                <TableHead className="text-center">Details</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead />
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((lead) => (
                <LeadRow
                  key={lead.id}
                  lead={lead}
                  onDelete={(id: string) => deleteLead(id, setData, toast)}
                  onEdit={(
                    id: string,
                    status: "PENDING" | "ACCEPTED" | "REJECTED",
                    finalPrice: number
                  ) =>
                    editLead(id, status, finalPrice, toast, () =>
                      fetchLeads(setData, setLoading)
                    )
                  }
                />
              ))}
            </TableBody>
          </Table>
        )}
      </main>
    </div>
  );
}
