"use client";

import { useAuth } from "@/context/AuthContext";
import UpdateEmailCard from "./UpdateEmailCard";
import UpdatePasswordCard from "./UpdatePasswordCard";

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
          <UpdatePasswordCard userId={user?.id} />
        </div>
      </div>
    </section>
  );
}
