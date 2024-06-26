/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DZfsFNABHoO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Setting() {
  return (
    <section className="container mx-auto max-w-3xl py-12 px-4 md:px-6">
      <div className="grid gap-8">
        <div>
          <h2 className="text-2xl font-bold">Account Settings</h2>
          <p className="text-gray-500 dark:text-gray-400">Manage your account information.</p>
        </div>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Email Address</CardTitle>
              <CardDescription>Update the email address associated with your account.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input defaultValue="john@example.com" id="email" placeholder="Enter your email" type="email" />
              </div>
              <Button className="ml-auto">Update Email</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>Update your account password.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" placeholder="Enter your current password" type="password" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" placeholder="Enter your new password" type="password" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" placeholder="Confirm your new password" type="password" />
              </div>
              <Button className="ml-auto">Change Password</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}