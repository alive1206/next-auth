import { Login } from "@/containers";
import { Suspense } from "react";

export default function LoginScreen() {
  return (
    <Suspense>
      <Login />
    </Suspense>
  );
}
