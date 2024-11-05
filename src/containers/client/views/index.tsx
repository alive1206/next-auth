"use client";

import { UserInfo } from "@/components";
import { useCurrentUser } from "@/hooks/use-current-user";

export const ClientPage: React.FC = () => {
  const user = useCurrentUser();
  return <UserInfo label="🎮 Client component" user={user} />;
};
