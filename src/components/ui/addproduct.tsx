/**
 * v0 by Vercel.
 * @see https://v0.dev/t/J3Af5EQx1x3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"

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
        <Button>Save</Button>
      </CardFooter>
    </Card>
  )
}