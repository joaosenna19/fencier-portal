import ProductsTable from "@/components/ProductsTable";

export default function Home() {
  return (
    <main className="h-full">
      <h1 className="text-xl md:text-3xl mb-4">Your active products</h1>
      <div className="flex flex-col">
        <ProductsTable />
      </div>
    </main>
  );
}
