/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YrBgbTpG6DJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CartProvider } from '../../../../../ecommerce/src/app/_providers/Cart/index';

export default function Login() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>
          Hi admin, please use your credentials.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email or User Code</Label>
          <Input id="email" placeholder="Enter your email or user code" required type="text" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="Enter your password" required type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" type="submit">
          Login
        </Button>
      </CardFooter>
    </Card>
  )
}