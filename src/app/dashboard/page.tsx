// src/app/page.tsx
import { AuthProvider } from "@/context/AuthContext";
import Maindashboard from "@/components/ui/maindashboard";
import ProtectedRoute from "@/components/ui/ProtectedRoute";

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <main className="p-4 md:p-8">
        <div className="flex flex-col space-y-4">
          <Maindashboard />
        </div>
      </main>
    </ProtectedRoute>
  );
}
