"use client";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { JSX, SVGProps } from "react";
import { useAuth } from "@/context/AuthContext";
import { Separator } from "@/components/ui/separator";

export default function Maindashboard() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col gap-8 p-4 md:p-10">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Welcome back, {user?.firstName}!
        </p>
        <Separator />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Monthly Lead Goal
              </CardTitle>
              <TargetIcon className="w-4 h-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">500</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Current Month Leads
              </CardTitle>
              <UsersIcon className="w-4 h-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">423</div>
              <p className="text-xs text-gray-500">84.6% of monthly goal</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Year-to-Date Leads
              </CardTitle>
              <CalendarIcon className="w-4 h-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-gray-500">+12.3% from last year</p>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Lead</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Created</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">John Doe</TableCell>
                  <TableCell>Website</TableCell>
                  <TableCell>Qualified</TableCell>
                  <TableCell className="text-right">05/01/2023</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jane Smith</TableCell>
                  <TableCell>PhoneCall</TableCell>
                  <TableCell>Contacted</TableCell>
                  <TableCell className="text-right">05/05/2023</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Bob Johnson</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Qualified</TableCell>
                  <TableCell className="text-right">05/10/2023</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Sarah Lee</TableCell>
                  <TableCell>Website</TableCell>
                  <TableCell>Contacted</TableCell>
                  <TableCell className="text-right">05/15/2023</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Tom Wilson</TableCell>
                  <TableCell>Website</TableCell>
                  <TableCell>Qualified</TableCell>
                  <TableCell className="text-right">05/20/2023</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>
      </main>
    </div>
  );
}

function CalendarIcon(
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function TargetIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
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
  );
}
