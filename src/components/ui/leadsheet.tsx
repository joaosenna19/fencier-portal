import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { JSX, SVGProps } from "react"
import { Smile, Frown, Clock9, Goal } from "lucide-react"

export default function Leadsheet() {
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
            <TableRow>
              <TableCell>Fabiano</TableCell>
              <TableCell>12345678</TableCell>
              <TableCell>fabiano@gmail.com</TableCell>
              <TableCell>f1h2m3</TableCell>
              <TableCell>$43</TableCell>
              <TableCell className = " text-center ">Waiting Contact</TableCell>
              <TableCell>
                <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded-md">
                  <Clock9 className="w-4 h-4 inline-block mr-1" />
                  Waiting
                </span>
              </TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      className="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                      type="button"
                    >
                      <FlipVerticalIcon className="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
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
            <TableRow>        
            <TableCell>Tony</TableCell>
              <TableCell>12345678</TableCell>
              <TableCell>fabiano@gmail.com</TableCell>
              <TableCell>f1h2m3</TableCell>
              <TableCell>$43</TableCell>
              <TableCell className = " text-center ">Waiting Contact</TableCell>
              <TableCell>
                <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded-md">
                  <Clock9 className="w-4 h-4 inline-block mr-1" />
                  Waiting
                </span>
              </TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      className="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                      type="button"
                    >
                      <FlipVerticalIcon className="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
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
            <TableRow>
            <TableCell>Diogo</TableCell>
              <TableCell>12345678</TableCell>
              <TableCell>fabiano@gmail.com</TableCell>
              <TableCell>f1h2m3</TableCell>
              <TableCell>$43</TableCell>
              <TableCell className = " text-center ">Waiting Contact</TableCell>
              <TableCell>
                <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded-md">
                  <Clock9 className="w-4 h-4 inline-block mr-1" />
                  Waiting
                </span>
              </TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      className="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                      type="button"
                    >
                      <FlipVerticalIcon className="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
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
            <TableRow>
            <TableCell>Bruno</TableCell>
              <TableCell>12345678</TableCell>
              <TableCell>fabiano@gmail.com</TableCell>
              <TableCell>f1h2m3</TableCell>
              <TableCell>$43</TableCell>
              <TableCell className = " text-center ">Will provide an update once I measure the perimeter again</TableCell>
              <TableCell>
                <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded-md">
                  <Goal className="w-4 h-4 inline-block mr-1" />
                  Ongoing
                </span>
              </TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      className="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                      type="button"
                    >
                      <FlipVerticalIcon className="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
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
            <TableRow>
            <TableCell>Michael J.</TableCell>
              <TableCell>12345678</TableCell>
              <TableCell>fabiano@gmail.com</TableCell>
              <TableCell>f1h2m3</TableCell>
              <TableCell>$43</TableCell>
              <TableCell className = " text-center ">Client will call me on next friday</TableCell>
              <TableCell>
              <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded-md">
                <Goal className="w-4 h-4 inline-block mr-1" />
                  Ongoing
                </span>
              </TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      className="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                      type="button"
                    >
                      <FlipVerticalIcon className="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
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
            <TableRow>
            <TableCell>Amy W.</TableCell>
              <TableCell>12345678</TableCell>
              <TableCell>fabiano@gmail.com</TableCell>
              <TableCell>f1h2m3</TableCell>
              <TableCell>$43</TableCell>
              <TableCell className = " text-center ">Waiting for supplier</TableCell>
              <TableCell>
                <span className="px-2 py-1 bg-green-200 text-green-800 rounded-md">
                  <Smile className="w-4 h-4 inline-block mr-1" />
                  Deal
                </span>
              </TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      className="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                      type="button"
                    >
                      <FlipVerticalIcon className="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
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
            <TableRow>
            <TableCell>Barack O.</TableCell>
              <TableCell>12345678</TableCell>
              <TableCell>fabiano@gmail.com</TableCell>
              <TableCell>f1h2m3</TableCell>
              <TableCell>$43</TableCell>
              <TableCell className = " text-center ">Client was offered a better quote</TableCell>
              <TableCell>
                <span className="px-2 py-1 bg-red-200 text-red-800 rounded-md">
                  <Frown className="w-4 h-4 inline-block mr-1" />
                  No Deal
                </span>
              </TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      className="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                      type="button"
                    >
                      <FlipVerticalIcon className="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
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
            <TableRow>
            <TableCell>Megan F.</TableCell>
              <TableCell>12345678</TableCell>
              <TableCell>fabiano@gmail.com</TableCell>
              <TableCell>f1h2m3</TableCell>
              <TableCell>$43</TableCell>
              <TableCell className = " text-center ">Completed</TableCell>
              <TableCell>
                <span className="px-2 py-1 bg-green-200 text-green-800 rounded-md">
                  <Smile className="w-4 h-4 inline-block mr-1" />
                  Waiting
                </span>
              </TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      className="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                      type="button"
                    >
                      <FlipVerticalIcon className="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
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
          </TableBody>
        </Table>
      </main>
    </div>
  )
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
  )
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
  )
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
  )
}


function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function ShareIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}


function TagIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  )
}


function TicketIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  )
}


function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function WalletIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}