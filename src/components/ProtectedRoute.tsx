"use client";
import { ReactNode, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (user === null && pathname !== "/login") {
      router.push("/login");
    }
  }, [isAuthenticated, user, router, pathname]);

  return <>{children}</>;
};

export default ProtectedRoute;
