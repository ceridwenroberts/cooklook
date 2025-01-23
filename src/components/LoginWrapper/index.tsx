"use client";
import { useUserContext } from "@/utils/contexts";
import Login from "../Login";
import { UserContextType } from "@/utils/types";
import Menu from "../Menu";

const LoginWrapper = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUserContext() as UserContextType;

  return (
    <>
      <div>
        {!user ? (
          <Login />
        ) : (
          <>
            <Menu />
            <p>Hi {user.name}!</p>
            {children}
          </>
        )}
      </div>
    </>
  );
};

export default LoginWrapper;
