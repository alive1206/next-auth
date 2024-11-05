import { Settings } from "@/containers";
import { currentUser } from "@/lib/auth";

export default async function SettingPage() {
  const user = await currentUser();
  return <Settings user={user} />;
}
