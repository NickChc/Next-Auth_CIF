"use client";

// import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export function SignInButton() {
  return (
    <Button
      size={"lg"}
      className="text-md bg-white text-inherit hover:bg-gray-300 font-bold"
      onClick={() => signIn()}
    >
      Sign In
    </Button>

    // FOR SERVER SIDE

    // <form
    //   action={async () => {
    //     "use server";

    //     await signIn();
    //   }}
    // >
    //   <Button
    //     size={"lg"}
    //     className="text-md bg-white text-inherit hover:bg-gray-300 font-bold"
    //     type="submit"
    //   >
    //     Sign In
    //   </Button>
    // </form>
  );
}
