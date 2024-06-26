// src/app/page.tsx

import Maindashboard from "@/components/MainDashboard";

export default function Dashboard() {
  return (
    <main className="p-4 md:p-8">
      <div className="flex flex-col space-y-4">
        <Maindashboard />
      </div>
    </main>
  );
}
