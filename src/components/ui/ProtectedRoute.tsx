"use client";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        router.push("/login");
      }
    }
  }, [loading, isAuthenticated, router]);

  if (loading || !isAuthenticated) {
    return <div>Loading...</div>; // Display a loading state while checking authentication
  }

  return <>{children}</>;
};

export default ProtectedRoute;
