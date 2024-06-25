// src/app/page.tsx
import { AuthProvider } from "@/context/AuthContext";
import Maindashboard from "@/components/maindashboard";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Dashboard() {
  return (
    <main className="p-4 md:p-8">
      <div className="flex flex-col space-y-4">
        <Maindashboard />
      </div>
    </main>
  );
}
