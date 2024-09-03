import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export async function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";

        await signIn();
      }}
    >
      <Button
        size={"lg"}
        className="text-md bg-white text-inherit hover:bg-gray-300 font-bold"
        type="submit"
      >
        Sign In
      </Button>
    </form>
  );
}
