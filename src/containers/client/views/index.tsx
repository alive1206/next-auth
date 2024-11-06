"use client";

import { UserInfo } from "@/components";

type Props = {
  user: any;
};

export const ClientPage: React.FC<Props> = ({ user }) => {
  return <UserInfo label="🎮 Client component" user={user} />;
};
