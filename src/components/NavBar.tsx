"use client";
import Link from "next/link";
import { JSX, SVGProps, useState } from "react";
import { ScanBarcode, Menu, X } from "lucide-react";
import Image from "next/image";
import LogoutButton from "./LogoutButton";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex flex-col h-full bg-white border-r border-gray-200">
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-20">
        <Link className="flex items-center gap-2" href="#">
          <Image
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=288,fit=crop,q=95/mxBryjRM7GuDGyR9/fundo-branco-1-m2W46b4v3wc7BGjn.png"
            alt="Rio Fence Icon"
            width={48} // Ajuste conforme necessário
            height={48} // Ajuste conforme necessário
            className="h-12"
          />
        </Link>
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <div
        className={`flex flex-col flex-1 overflow-auto ${
          isOpen ? "block" : "hidden"
        } md:block`}
      >
        <nav className="py-4">
          <div className="space-y-1">
            <div className="px-4 text-xs font-medium text-gray-500">
              Main
            </div>
            <Link
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 "
              href="/dashboard"
            >
              <HomeIcon className="h-5 w-5" />
              Home
            </Link>
            <Link
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 "
              href="/dashboard/lead"
            >
              <Grid3x3Icon className="h-5 w-5" />
              Leads
            </Link>
          </div>
          <div className="space-y-1 mt-4">
            <div className="px-4 text-xs font-medium text-gray-500 dark:text-gray-400">
              Workspace
            </div>
            <Link
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 "
              href="/dashboard/product"
            >
              <ScanBarcode className="h-5 w-5" />
              Products
            </Link>
          </div>
          <div className="space-y-1 mt-4">
            <div className="px-4 text-xs font-medium text-gray-500 dark:text-gray-400">
              Settings
            </div>
            <Link
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 "
              href="/dashboard/account"
            >
              <UserIcon className="h-5 w-5" />
              Account
            </Link>
          </div>
        </nav>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4">
        <LogoutButton />
      </div>
    </div>
  );
}

function Grid3x3Icon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
      <path d="M9 3v18" />
      <path d="M15 3v18" />
    </svg>
  );
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
  );
}

function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
