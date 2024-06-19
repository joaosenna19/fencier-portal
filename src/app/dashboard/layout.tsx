// src/app/layout.tsx
import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/ui/navbar";
import { AuthProvider } from '@/context/AuthContext';


export const metadata: Metadata = {
  title: "Dashboard - Fencier"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
        <AuthProvider>
          <Navbar />
          <div className="flex flex-1 justify-center items-center p-4">
            {children}
          </div>
        </AuthProvider>
  );
}
