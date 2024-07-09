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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginSchema = z.object({
    email: z.string().email({ message: "You must enter a valid email." }),
    password: z
      .string()
      .min(3, { message: "Password must be at least 3 characters." }),
  });

  type loginSchema = z.infer<typeof loginSchema>;

  const { register, handleSubmit, formState, clearErrors, reset } =
    useForm<loginSchema>({
      resolver: zodResolver(loginSchema),
    });

  const onSubmit: SubmitHandler<loginSchema> = async (data) => {
    setIsLoading(true);
    clearErrors();
    await login(data.email, data.password);
    setIsLoading(false);
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>
          Hi admin, please use your credentials.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              placeholder="Enter your email"
              type="text"
              {...register("email")}
            />
            {formState.errors.email && (
              <p className="text-xs text-red-400 m-1">
                {formState.errors.email.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              {...register("password")}
              type="password"
              placeholder="Enter your password"
            />
            {formState.errors.password && (
              <p className="text-xs text-red-400 m-1">
                {formState.errors.password.message}
              </p>
            )}
          </div>

          <Button
            className="w-full bg-blue-500 hover:bg-blue-600 mt-2"
            type="submit"
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="animate-spin" size={20} />}
            {isLoading ? "Loading..." : "Login"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
