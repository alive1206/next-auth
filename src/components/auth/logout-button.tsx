"use client";

import { logout } from "@/actions/logout";
import { usePathname } from "next/navigation";

interface LogoutButtonProps {
  children: React.ReactNode;
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const pathname = usePathname();
  const encodedCallbackUrl = encodeURIComponent(pathname);

  const handleOnClick = () => {
    logout(`/auth/login?callbackUrl=${encodedCallbackUrl}`);
  };

  return (
    <span onClick={handleOnClick} className="cursor-pointer">
      {children}
    </span>
  );
};
