"use client";

import { useEffect } from "react";
import { Button } from "@/shared/components/ui/button";
import { MessageBox } from "@/shared/components/message-box";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="container mx-auto px-4 py-24">
      <MessageBox title="Something went wrong" description={error.message}>
        <Button onClick={reset}>Try again</Button>
      </MessageBox>
    </main>
  );
}
