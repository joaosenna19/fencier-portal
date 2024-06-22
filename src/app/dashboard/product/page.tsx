import Link from "next/link";
import Image from "next/image";
import Productform from "@/components/ui/productsform";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-4 md:p-8">
      <h1 className="text-xl md:text-3xl mb-4">Your active products</h1>
      <div className="flex flex-col space-y-4">
        <Productform />
        <div className="flex justify-end">
        </div>
      </div>
    </main>
  );
}
