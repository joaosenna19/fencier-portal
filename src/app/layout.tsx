import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/context/AuthContext";
import AddMaterialModal from "@/components/AddMaterialModal";
import DeleteMaterialModal from "@/components/DeleteMaterialModal";
import DeleteLeadModal from "@/components/DeleteLeadModal";

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
      <body className="flex  min-h-screen">
        <AuthProvider>
          <div className="flex flex-1 justify-center items-center p-4">
            <AddMaterialModal />
            <DeleteMaterialModal />
            <DeleteLeadModal />
            {children}
          </div>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
