import { Register } from "@/containers";
import { Suspense } from "react";

export default function RegisterScreen() {
  return (
    <Suspense>
      <Register />
    </Suspense>
  );
}
