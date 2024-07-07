"use client";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import UpdateEmailCard from "./UpdateEmailCard";


export default function Setting() {
  const { user } = useAuth();

  return (
    <section className="container mx-auto max-w-3xl py-12 px-4 md:px-6">
      <div className="grid gap-8">
        <div>
          <h2 className="text-2xl font-bold">Account Settings</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Manage your account information.
          </p>
        </div>
        <div className="grid gap-6">
          <UpdateEmailCard userId={user?.id} />
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>Update your account password.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input
                  id="currentPassword"
                  placeholder="Enter your current password"
                  type="password"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  placeholder="Enter your new password"
                  type="password"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input
                  id="confirmPassword"
                  placeholder="Confirm your new password"
                  type="password"
                />
              </div>
              <Button className="ml-auto">Change Password</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
