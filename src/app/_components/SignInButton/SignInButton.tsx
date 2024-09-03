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
      <Button type="submit">Sign In</Button>
    </form>
  );
}
