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
import updateEmail from "@/services/updateEmail";

interface UpdateEmailCardProps {
  userId: string | undefined;
}

export default function UpdateEmailCard({ userId }: UpdateEmailCardProps) {
  const { toast } = useToast();

  const emailSchema = zod.object({
    email: zod.string().email({ message: "Invalid email address" }),
  });

  type EmailForm = zod.infer<typeof emailSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailForm>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit: SubmitHandler<EmailForm> = async (data) => {
    const res = await updateEmail(data.email, userId as string);
    if (res.success) {
      toast({
        title: "Email updated successfully",
        description: "Your email has been updated successfully.",
      });
      reset();
    } else {
      toast({
        title: "Something went wrong",
        description: res.error,
        variant: "destructive",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Email Address</CardTitle>
        <CardDescription>
          Update the email address associated with your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2 mb-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Enter your new email address"
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </div>
          <Button className="ml-auto" type="submit">
            Update Email
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
