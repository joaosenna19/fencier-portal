'use client'
import { useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && !isAuthenticated()) {
      router.push('/login');
    }
  }, [user, router, isAuthenticated, isClient]);

  if (!isClient || !isAuthenticated()) {
    return null; // ou um spinner de carregamento
  }

  return <>{children}</>;
};

export default ProtectedRoute;
