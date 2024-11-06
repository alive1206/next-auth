import { NewPasswordForm } from "@/components/auth/new-password-form";
import { Suspense } from "react";

export default function NewPasswordScreen() {
  return (
    <Suspense>
      <NewPasswordForm />
    </Suspense>
  );
}
