'use client'
// import { Button } from "@/components/ui/button"
// import { JSX, SVGProps } from "react"

// export default function Productform() {
//   return (
//     <div className="container mx-auto py-8">
//       <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden">
//         <table className="w-full table-auto">
//           <thead className="bg-gray-100 dark:bg-gray-800">
//             <tr>
//               <th className="px-6 py-4 text-left font-medium text-gray-700 dark:text-gray-300">Name</th>
//               <th className="px-6 py-4 text-left font-medium text-gray-700 dark:text-gray-300">Type</th>
//               <th className="px-6 py-4 text-left font-medium text-gray-700 dark:text-gray-300">Price</th>
//               <th className="px-6 py-4 text-right font-medium text-gray-700 dark:text-gray-300">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border-b border-gray-200 dark:border-gray-800">
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0 h-10 w-10">
//                     <img alt="Product Image" className="h-10 w-10 rounded-full" src="/placeholder.svg" />
//                   </div>
//                   <div className="ml-4">
//                     <div className="text-sm font-medium text-gray-900 dark:text-gray-50">Golden Fence</div>
//                   </div>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="text-sm text-gray-900 dark:text-gray-50">Fence</div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="text-sm text-gray-900 dark:text-gray-50">$99.99</div>
//               </td>
//               <td className="px-6 py-4 text-right whitespace-nowrap">
//                 <Button size="sm" variant="outline">
//                   <TrashIcon className="h-4 w-4" />
//                   <span className="sr-only">Delete</span>
//                 </Button>
//               </td>
//             </tr>
//             <tr className="border-b border-gray-200 dark:border-gray-800">
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0 h-10 w-10">
//                     <img alt="Product Image" className="h-10 w-10 rounded-full" src="/placeholder.svg" />
//                   </div>
//                   <div className="ml-4">
//                     <div className="text-sm font-medium text-gray-900 dark:text-gray-50">Golden Gate</div>
//                   </div>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="text-sm text-gray-900 dark:text-gray-50">Gate</div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="text-sm text-gray-900 dark:text-gray-50">$79.99</div>
//               </td>
//               <td className="px-6 py-4 text-right whitespace-nowrap">
//                 <Button size="sm" variant="outline">
//                   <TrashIcon className="h-4 w-4" />
//                   <span className="sr-only">Delete</span>
//                 </Button>
//               </td>
//             </tr>
//             <tr className="border-b border-gray-200 dark:border-gray-800">
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0 h-10 w-10">
//                     <img alt="Product Image" className="h-10 w-10 rounded-full" src="/placeholder.svg" />
//                   </div>
//                   <div className="ml-4">
//                     <div className="text-sm font-medium text-gray-900 dark:text-gray-50">Wood Fence</div>
//                   </div>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="text-sm text-gray-900 dark:text-gray-50">Fence</div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="text-sm text-gray-900 dark:text-gray-50">$14.99</div>
//               </td>
//               <td className="px-6 py-4 text-right whitespace-nowrap">
//                 <Button size="sm" variant="outline">
//                   <TrashIcon className="h-4 w-4" />
//                   <span className="sr-only">Delete</span>
//                 </Button>
//               </td>
//             </tr>
//             <tr className="border-b border-gray-200 dark:border-gray-800">
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0 h-10 w-10">
//                     <img alt="Product Image" className="h-10 w-10 rounded-full" src="/placeholder.svg" />
//                   </div>
//                   <div className="ml-4">
//                     <div className="text-sm font-medium text-gray-900 dark:text-gray-50">Wood Gate</div>
//                   </div>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="text-sm text-gray-900 dark:text-gray-50">Gate</div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="text-sm text-gray-900 dark:text-gray-50">$49.99</div>
//               </td>
//               <td className="px-6 py-4 text-right whitespace-nowrap">
//                 <Button size="sm" variant="outline">
//                   <TrashIcon className="h-4 w-4" />
//                   <span className="sr-only">Delete</span>
//                 </Button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// function TrashIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M3 6h18" />
//       <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
//       <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
//     </svg>
//   )
// }

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { JSX, SVGProps } from "react";

// interface Product {
//   id: number;
//   name: string;
//   type: string;
//   price: string;
//   image: string;
// }

// export default function Productform() {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     // Carregar os dados do JSON
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("/product.json");
//         const data: Product[] = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleDelete = (id: number) => {
//     setProducts(products.filter((product) => product.id !== id));
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden">
//         <table className="w-full table-auto">
//           <thead className="bg-gray-100 dark:bg-gray-800">
//             <tr>
//               <th className="px-6 py-4 text-left font-medium text-gray-700 dark:text-gray-300">Name</th>
//               <th className="px-6 py-4 text-left font-medium text-gray-700 dark:text-gray-300">Type</th>
//               <th className="px-6 py-4 text-left font-medium text-gray-700 dark:text-gray-300">Price</th>
//               <th className="px-6 py-4 text-right font-medium text-gray-700 dark:text-gray-300">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((product) => (
//               <tr key={product.id} className="border-b border-gray-200 dark:border-gray-800">
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0 h-10 w-10">
//                       <img alt="Product Image" className="h-10 w-10 rounded-full" src={product.image} />
//                     </div>
//                     <div className="ml-4">
//                       <div className="text-sm font-medium text-gray-900 dark:text-gray-50">{product.name}</div>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-900 dark:text-gray-50">{product.type}</div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-900 dark:text-gray-50">{product.price}</div>
//                 </td>
//                 <td className="px-6 py-4 text-right whitespace-nowrap">
//                   <Button size="sm" variant="outline" onClick={() => handleDelete(product.id)}>
//                     <TrashIcon className="h-4 w-4" />
//                     <span className="sr-only">Delete</span>
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// function TrashIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M3 6h18" />
//       <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
//       <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
//     </svg>
//   );
// }

// src/components/ui/Productform.tsx

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@/components/icons";
import { Product, ProductResponse } from "@/lib/types"; // Importando interfaces necessárias
import Image from "next/image";

interface Material {
    id: string;
    name: string;
    styles: {
        name: string;
        colors: {
            name: string;
            pricePerFoot: number;
            gatePrice: number;
        }[];
    }[];
}

export default function Productform() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fencier-api.onrender.com/material?tenantId=aa815619-4db7-4b79-a33f-9b51426db757");
                const data: Material[] = await response.json();

                const products = data.flatMap((material) =>
                    material.styles.flatMap((style) =>
                        style.colors.map((color) => ({
                            id: `${material.id}-${style.name}-${color.name}`,
                            name: `${material.name} (${style.name} - ${color.name})`,
                            type: "gate" as 'gate' | 'fence', // Certifique-se de que o tipo esteja correto
                            price: color.pricePerFoot,
                            image: "",
                        }))
                    )
                );

                setProducts(products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    const handleDelete = (id: string) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    return (
        <div className="container mx-auto py-8">
            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden">
                <table className="w-full table-auto">
                    <thead className="bg-gray-100 dark:bg-gray-800">
                        <tr>
                            <th className="px-6 py-4 text-left font-medium text-gray-700 dark:text-gray-300">Name</th>
                            <th className="px-6 py-4 text-left font-medium text-gray-700 dark:text-gray-300">Type</th>
                            <th className="px-6 py-4 text-left font-medium text-gray-700 dark:text-gray-300">Price</th>
                            <th className="px-6 py-4 text-right font-medium text-gray-700 dark:text-gray-300">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-b border-gray-200 dark:border-gray-800">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <Image alt="Product Image" className="h-10 w-10 rounded-full" src={product.image} />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900 dark:text-gray-50">{product.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900 dark:text-gray-50">{product.type}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900 dark:text-gray-50">${product.price}</div>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap">
                                    <Button size="sm" variant="outline" onClick={() => handleDelete(product.id)}>
                                        <TrashIcon className="h-4 w-4" />
                                        <span className="sr-only">Delete</span>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
