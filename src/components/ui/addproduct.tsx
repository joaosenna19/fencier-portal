// 'use client'
// import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"

// export default function Addproduct() {
//   return (
//     <Card className="w-full max-w-md mx-auto">
//       <CardHeader>
//         <CardTitle>Add New Product</CardTitle>
//         <CardDescription>Fill out the form to add a new product.</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form className="grid gap-4">
//           <div className="grid gap-2">
//             <Label htmlFor="name">Product Name</Label>
//             <Input id="name" placeholder="Enter product name" />
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="type">Product Type</Label>
//             <RadioGroup className="flex items-center gap-4" defaultValue="gate" id="type">
//               <Label className="flex items-center gap-2 cursor-pointer" htmlFor="type-gate">
//                 <RadioGroupItem id="type-gate" value="gate" />
//                 Gate
//               </Label>
//               <Label className="flex items-center gap-2 cursor-pointer" htmlFor="type-fence">
//                 <RadioGroupItem id="type-fence" value="fence" />
//                 Fence
//               </Label>
//             </RadioGroup>
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="price">Price</Label>
//             <Input id="price" placeholder="Enter product price" type="number" />
//           </div>
//         </form>
//       </CardContent>
//       <CardFooter className="flex justify-end gap-2">
//         <Button variant="outline">Cancel</Button>
//         <Link
//             href="./"
//             >
//               <Button>Save</Button>
//             </Link>
//       </CardFooter>
//     </Card>
//   )
// }
'use client'
import { useState } from "react";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

export default function Addproduct() {
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("gate");
  const [price, setPrice] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    
    const newProduct = {
      id: "unique-product-id", // Idealmente, você geraria um ID único
      tenantId: "tenant-id", // Substitua pelo ID do tenant real
      name: productName,
      createdAt: new Date().toISOString(),
      styles: [], // Adicione estilos se necessário
    };

    try {
      const response = await fetch("https://your-api-endpoint.com/api/products", { // Substitua "https://your-api-endpoint.com/api/products" pelo seu endpoint real
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        // Handle successful response
        console.log("Product added successfully");
      } else {
        // Handle errors
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Add New Product</CardTitle>
        <CardDescription>Fill out the form to add a new product.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="name">Product Name</Label>
            <Input
              id="name"
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="type">Product Type</Label>
            <RadioGroup
              className="flex items-center gap-4"
              defaultValue="gate"
              id="type"
              value={productType}
              onValueChange={setProductType}
            >
              <Label className="flex items-center gap-2 cursor-pointer" htmlFor="type-gate">
                <RadioGroupItem id="type-gate" value="gate" />
                Gate
              </Label>
              <Label className="flex items-center gap-2 cursor-pointer" htmlFor="type-fence">
                <RadioGroupItem id="type-fence" value="fence" />
                Fence
              </Label>
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              placeholder="Enter product price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline" type="button">Cancel</Button>
            <Button type="submit">Save</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}