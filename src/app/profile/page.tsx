"use client";
import { useUserContext } from "@/utils/contexts";
import { UserContextType } from "@/utils/types";

const Profile = () => {
  const { user } = useUserContext() as UserContextType;
  return <h1>{`${user?.name}'s Cooklook`}</h1>;
};
export default Profile;
