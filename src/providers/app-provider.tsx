"use client";

import { Toaster } from "@/components/ui/sonner";
import { Main } from "@/layout";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<Props> = ({ children }) => {
  return (
    <SessionProvider>
      <Main>
        <Toaster />
        {children}
      </Main>
    </SessionProvider>
  );
};
