'use client'
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Addproduct() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Add New Product</CardTitle>
        <CardDescription>Fill out the form to add a new product.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Product Name</Label>
            <Input id="name" placeholder="Enter product name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="type">Product Type</Label>
            <RadioGroup className="flex items-center gap-4" defaultValue="gate" id="type">
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
            <Input id="price" placeholder="Enter product price" type="number" />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Link
            href="./"
            >
              <Button>Save</Button>
            </Link>
      </CardFooter>
    </Card>
  )
}

// import { useState } from "react";
// import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/router";

// export default function Addproduct() {
//   const [name, setName] = useState("");
//   const [type, setType] = useState("gate");
//   const [price, setPrice] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();

//     const newProduct = {
//       name,
//       type,
//       price: parseFloat(price),
//       image: "", // Placeholder, ajuste conforme necessário
//     };

//     try {
//       const response = await fetch("https://fencier-api.onrender.chttps://fencier-api.onrender.com/material?tenantId=aa815619-4db7-4b79-a33f-9b51426db757om/material", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newProduct),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to save product");
//       }

//       // Redireciona de volta para a página de produtos após salvar
//       router.push("/");
//     } catch (error) {
//       console.error("Error saving product:", error);
//     }
//   };

//   return (
//     <Card className="w-full max-w-md mx-auto">
//       <CardHeader>
//         <CardTitle>Add New Product</CardTitle>
//         <CardDescription>Fill out the form to add a new product.</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form className="grid gap-4" onSubmit={handleSubmit}>
//           <div className="grid gap-2">
//             <Label htmlFor="name">Product Name</Label>
//             <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter product name" required />
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="type">Product Type</Label>
//             <RadioGroup className="flex items-center gap-4" value={type} onValueChange={setType} id="type">
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
//             <Input id="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter product price" type="number" required />
//           </div>
//           <CardFooter className="flex justify-end gap-2">
//             <Button type="button" variant="outline" onClick={() => router.push("/")}>Cancel</Button>
//             <Button type="submit">Save</Button>
//           </CardFooter>
//         </form>
//       </CardContent>
//     </Card>
//   );
// }
