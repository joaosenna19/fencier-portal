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
import zod from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import updatePassword from "@/services/updatePassword";
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface UpdatePasswordCardProps {
  userId: string | undefined;
}

export default function UpdatePasswordCard({
  userId,
}: UpdatePasswordCardProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const passwordSchema = zod.object({
    oldPassword: zod.string().min(6, { message: "Password is too short" }),
    newPassword: zod.string().min(6, { message: "Password is too short" }),
    confirmPassword: zod.string().min(6, { message: "Password is too short" }),
  });

  type PasswordForm = zod.infer<typeof passwordSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PasswordForm>({
    resolver: zodResolver(passwordSchema),
  });

  const onSubmit: SubmitHandler<PasswordForm> = (data) => {
    setIsSubmitting(true);
    if (data.newPassword !== data.confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (data.oldPassword === data.newPassword) {
      toast({
        title: "New password is the same as old password",
        description: "Please choose a different password.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    updatePassword(data.oldPassword, data.newPassword, userId as string).then(
      (res) => {
        if (res.success) {
          toast({
            title: "Password updated successfully",
            description: "Your password has been updated successfully.",
          });
          reset();
          setIsSubmitting(false);
        } else {
          toast({
            title: "Something went wrong",
            description: res.error,
            variant: "destructive",
          });
          setIsSubmitting(false);
        }
      }
    );
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Change Password</CardTitle>
        <CardDescription>Update your account password.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2 mb-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input
              id="currentPassword"
              placeholder="Enter your current password"
              type="password"
              {...register("oldPassword")}
            />
            {errors.oldPassword && (
              <p className="text-red-500 text-xs italic">
                {errors.oldPassword.message}
              </p>
            )}
          </div>
          <div className="grid gap-2 mb-2">
            <Label htmlFor="newPassword">New Password</Label>
            <Input
              id="newPassword"
              placeholder="Enter your new password"
              type="password"
              {...register("newPassword")}
            />
            {errors.newPassword && (
              <p className="text-red-500 text-xs italic">
                {errors.newPassword.message}
              </p>
            )}
          </div>
          <div className="grid gap-2 mb-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input
              id="confirmPassword"
              placeholder="Confirm your new password"
              type="password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs italic">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button className="ml-auto" type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="animate-spin h-5 w-5 mr-3" />}
            {isSubmitting ? "Updating Password" : "Change Password"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
