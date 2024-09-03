import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export function LogOutButton() {
  return (
    <form
      action={async () => {
        "use server";

        await signOut();
      }}
    >
      <Button type="submit">Log Out</Button>
    </form>
  );
}
