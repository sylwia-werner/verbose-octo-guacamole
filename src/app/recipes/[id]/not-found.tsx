import { Button } from "@/shared/components/ui/button";
import { MessageBox } from "@/shared/components/message-box";
import Link from "next/link";
import { ROUTES } from "@/shared/lib/routes";

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-24">
      <MessageBox
        title="Recipe not found"
        description="The recipe you are looking for does not exist."
      >
        <Button asChild>
          <Link href={ROUTES.recipes}>Back to recipes</Link>
        </Button>
      </MessageBox>
    </main>
  );
}
