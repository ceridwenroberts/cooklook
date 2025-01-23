"use client"
import { useUserContext } from "@/utils/contexts";
import { UserContextType } from "@/utils/types";

export default function Home() {
  const { user } = useUserContext() as UserContextType
  const [recipies, setRecipies ] = useState(null)
  return (
    <>
      {user && (
        <div className="">
          Your fave category is user.category
        </div>
      )}
    </>
  )
}

