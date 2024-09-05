"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { User } from "next-auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TUpdateUserValues, updateSchema } from "@/lib/schemas";
import { updateUser } from "@/actions/auth";
import { toast, ToastContainer } from "react-toastify";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";

interface UserDataProps {
  user: User;
}

export function UserData({ user }: UserDataProps) {
  const session = useSession();

  const form = useForm({
    resolver: zodResolver(updateSchema),
    defaultValues: {
      username: user?.name || "",
    },
  });

  async function onSubmit(data: TUpdateUserValues) {
    try {
      await updateUser(data);
      session.update();
      toast.success("Profile updated");
    } catch (err: any) {
      toast.error("Failed to update user", {
        autoClose: 5000,
      });
      console.log(err.message);
    }
  }

  return (
    <main className="relative overflow-hidden">
      <ToastContainer newestOnTop />
      <section>
        <h1 className="text-3xl my-8 font-bold">Settings</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={`flex flex-col justify-between items-start gap-y-5 ${
              form.formState.isSubmitting
                ? "opacity-75 pointer-events-none"
                : ""
            }`}
          >
            <FormField
              name="username"
              control={form.control}
              render={({ field }) => (
                <>
                  <FormItem className="inline-flex flex-col gap-y-2">
                    <FormLabel className="text-2xl text-black">
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="border-blue-500"
                        placeholder="Username"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Your public username</FormDescription>
                  </FormItem>
                </>
              )}
            />
            <Button disabled={form.formState.isSubmitting} type="submit">
              {form.formState.isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
        <button onClick={() => toast.error("1")}>ERROR</button>
      </section>
    </main>
  );
}
