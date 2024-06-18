// src/app/login/layout.tsx
import { AuthProvider } from "@/context/AuthContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login - Fencier"
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
        <div className="flex flex-1 justify-center items-center p-4">
          {children}
        </div>
        </AuthProvider>
  
  );
}
