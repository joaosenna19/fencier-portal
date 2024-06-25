// src/app/layout.tsx
import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/navbar";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";

export const metadata: Metadata = {
  title: "Dashboard - Fencier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <Navbar />
        <div className="flex flex-1 justify-center items-center p-4">
          {children}
        </div>
      </ProtectedRoute>
    </AuthProvider>
  );
}
