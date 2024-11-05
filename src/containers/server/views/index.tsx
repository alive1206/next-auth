import { UserInfo } from "@/components";
import { currentUser } from "@/lib/auth";

export const ServerPage: React.FC = async () => {
  const user = await currentUser();
  return <UserInfo label="💻 Server component" user={user} />;
};
