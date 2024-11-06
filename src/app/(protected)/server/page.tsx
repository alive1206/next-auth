import { ServerPage } from "@/containers";
import { Suspense } from "react";

export default function ServerScreen() {
  return (
    <Suspense>
      <ServerPage />
    </Suspense>
  );
}
