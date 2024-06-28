"use client";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  Table,
} from "@/components/ui/table";
import { JSX, SVGProps, useEffect, useState } from "react";
import { Lead } from "@/lib/types";
import LeadRow from "@/components/LeadRow";
import { useToast } from "@/components/ui/use-toast";
import { fetchLeads, deleteLead, editLead } from "@/services/leadsService";

export default function Leadsheet() {
  const [data, setData] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchLeads(setData, setLoading);
  }, []);

  return (
    <div className="flex">
      <main className="flex-grow p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-medium">Leads</h1>
          <Button
            className="px-2 py-1 bg-gray-800 text-white rounded-lg flex items-center space-x-2 text-sm"
            type="button"
          >
            <DownloadIcon className="w-4 h-4" />
            <span>Download</span>
          </Button>
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
              {data.map((lead) => (
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

function DownloadIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}
