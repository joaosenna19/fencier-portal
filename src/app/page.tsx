import Image from "next/image";
import Productform from "@/components/ui/productsform";
import Maindashboard from "@/components/ui/maindashboard";
import Login from "@/components/ui/login";

export default function Home() {
  return (
    <main className="p-4 md:p-8">
      <div className="flex flex-col space-y-4">
        <Maindashboard/>
      </div>
    </main>
  );
}