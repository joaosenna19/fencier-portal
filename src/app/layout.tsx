import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "lucide-react";
import Navbar from "@/components/ui/navbar";
import { AuthProvider } from "@/context/AuthContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard - Fencier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        <AuthProvider>
          <div className="flex flex-1 justify-center items-center p-4">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
