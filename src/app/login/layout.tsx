// src/app/login/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Login - Fencier",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1 justify-center items-center p-4">
      {children}
    </div>
  );
}
