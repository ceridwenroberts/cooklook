"use client";

import { SetStateAction, useState } from "react";
import { registeredUsers } from "@/utils/users";
import { UserContextType, type UserType } from "@/utils/types";
import { useUserContext } from "@/utils/contexts";

const Login = () => {
  const [userInput, setUserInput] = useState<string | null>(null);
  const { setUser } = useUserContext() as UserContextType;

  const handleChange = (e: {
    target: { value: SetStateAction<string | null> };
  }) => {
    setUserInput(e.target.value);
  };

  const handleClick = () => {
    const loggedInUser: UserType[] = registeredUsers.filter(
      (user: UserType) => user.name === userInput
    );
    if (loggedInUser.length) {
        console.log(loggedInUser[0]);
        setUser(loggedInUser[0]);
    }
  };

  return (
    <div>
      <p>Enter username</p>
      <label htmlFor="user-input">Username</label>
      <input id="user-input" onChange={handleChange} />
      <button onClick={handleClick}>Log in</button>
    </div>
  );
};

export default Login;
