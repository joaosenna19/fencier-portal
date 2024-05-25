import { useState } from 'react';
import styles from './products.module.scss';

const ProductForm = () => {
  // State for form fields
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [productType, setProductType] = useState('gate'); // Initial value set to 'gate'
  const [price, setPrice] = useState(0);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can send the form data wherever needed
    console.log('Product Name:', productName);
    console.log('Product Image:', productImage);
    console.log('Product Type:', productType);
    console.log('Price:', price);
  };

  return (
    <div className={styles.centerLink}>
    <form onSubmit={handleSubmit}>
      {/* Field to input product name */}
      <div>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>

      {/* Field to add product image */}
      <div>
        <label htmlFor="productImage">Add Product Image:</label>
        <input
          type="file"
          id="productImage"
          onChange={(e) => setProductImage(e.target.files[0])}
        />
      </div>

      {/* Field to select whether it's a gate or a fence */}
      <div>
        <label>Product Type:</label>
        <div>
          <label>
            <input
              type="radio"
              value="gate"
              checked={productType === 'gate'}
              onChange={() => setProductType('gate')}
            />
            Gate
          </label>
          <label>
            <input
              type="radio"
              value="fence"
              checked={productType === 'fence'}
              onChange={() => setProductType('fence')}
            />
            Fence
          </label>
        </div>
      </div>

      {/* Field to input product price */}
      <div>
        <label htmlFor="price">Product Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          required
        />
      </div>

      {/* Button to submit the form */}
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default ProductForm;

// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/e85AfNERWxN
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
// import styles from "./products.module.scss"

// export default function Component() {
//   return (
//     <Card className="w-full max-w-md">
//       <CardHeader>
//         <CardTitle>Add New Product</CardTitle>
//         <CardDescription>Fill out the form below to add a new product to your inventory.</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form className="grid gap-4">
//           <div className="grid gap-2">
//             <Label htmlFor="name">Product Name</Label>
//             <Input id="name" placeholder="Enter product name" />
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="description">Description</Label>
//             <Textarea id="description" placeholder="Enter product description" />
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="price">Price</Label>
//             <Input id="price" placeholder="Enter product price" type="number" />
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="image">Product Image</Label>
//             <Input id="image" type="file" />
//           </div>
//           <Button className="w-full" type="submit">
//             Add Product
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   )
// }