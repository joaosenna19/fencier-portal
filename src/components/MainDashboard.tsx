"use client";
import { useAuth } from "@/context/AuthContext";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Maindashboard() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col gap-8 p-4 md:p-10">
        <h1 className="">
          Welcome back, {user?.firstName}!
        </h1>
        <Separator />
        <Link
          href="/dashboard/lead"
          className=" inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Leads
        </Link>
        <Link
          href="/dashboard/product"
          className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Products
        </Link>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"></div>
      </main>
    </div>
  );
}
