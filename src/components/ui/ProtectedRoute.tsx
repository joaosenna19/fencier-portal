// src/components/ui/ProtectedRoute.tsx
"use client";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext"

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
   
      if (!isAuthenticated()) {
        router.push("/login");
      }
    
  }, [, isAuthenticated, router]);

  return <>{children}</>;
};

export default ProtectedRoute;
