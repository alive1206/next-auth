import { ClientPage } from "@/containers";
import { currentUser } from "@/lib/auth";
import { Suspense } from "react";

export default async function ClientScreen() {
  const user = await currentUser();
  return (
    <Suspense>
      <ClientPage user={user} />
    </Suspense>
  );
}
