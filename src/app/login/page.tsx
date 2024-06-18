import Image from "next/image";
import LoginPage from "@/components/ui/login";

export default function Home() {
  return (
    <main className="p-4 md:p-8">
      <LoginPage />
    </main>
  );
}
