'use client'
import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { JSX, SVGProps, useEffect, useState } from "react"
import { Smile, Frown, Clock9, Goal, ShareIcon } from "lucide-react"
import { Lead } from "@/lib/types"

export default function Leadsheet() {
  const [data, setData] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true); // Estado de carregamento

  const fetchLeads = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_FENCIER_API_URL}/quote?tenantId=aa815619-4db7-4b79-a33f-9b51426db757`);
      const data: Lead[] = await response.json();
      setData(data);
      console.log("Leads fetched:", data);
    } catch (error) {
      console.error("Error fetching leads:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const statusIcons = {
    PENDING: <Clock9 className="w-4 h-4 inline-block mr-1" />,
    ONGOING: <Goal className="w-4 h-4 inline-block mr-1" />,
    DEAL: <Smile className="w-4 h-4 inline-block mr-1" />,
    NODEAL: <Frown className="w-4 h-4 inline-block mr-1" />
  };

  const statusColors = {
    PENDING: "bg-yellow-200 text-yellow-800",
    ONGOING: "bg-blue-200 text-blue-800",
    DEAL: "bg-green-200 text-green-800",
    NODEAL: "bg-red-200 text-red-800"
  };

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
                <TableHead>Name</TableHead>
                <TableHead>Phone Number</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Postal Code</TableHead>
                <TableHead className="text-right">Quote</TableHead>
                <TableHead className="text-center">Description</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* {data.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell>{lead.customerInfo[0].firstName} {lead.customerInfo[0].lastName}</TableCell>
                  <TableCell>{lead.customerInfo[0].phoneNumber}</TableCell>
                  <TableCell>{lead.customerInfo[0].email}</TableCell>
                  <TableCell>{lead.customerInfo[0].address[0].postalCode}</TableCell>
                  <TableCell>${lead.price}</TableCell>
                  <TableCell className="text-center">Waiting Contact</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 ${statusColors[lead.status]} rounded-md`}>
                      {statusIcons[lead.status]}
                      {lead.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Popover>
                      <PopoverTrigger>
                        <Button
                          className="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                          type="button"
                        >
                          Actions
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                          <DeleteIcon className="w-4 h-4" />
                          <span className="text-sm font-medium">Edit</span>
                        </button>
                        <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                          <ShareIcon className="w-4 h-4" />
                          <span className="text-sm font-medium">Share</span>
                        </button>
                        <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                          <DeleteIcon className="w-4 h-4" />
                          <span className="text-sm font-medium">Delete</span>
                        </button>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              ))} */}
            </TableBody>
          </Table>
        )}
      </main>
    </div>
  );
}

function DeleteIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  );
}

function DownloadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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

function FlipVerticalIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
      <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
      <path d="M4 12H2" />
      <path d="M10 12H8" />
      <path d="M16 12h-2" />
      <path d="M22 12h-2" />
    </svg>
  );
}

