import { verifyUser } from "./User/api/users.api";
import { Outlet } from "react-router-dom";
import { UserAuthPage } from "./User/Pages/UserAuth";
import { useEffect, useState } from "react";



type userVerifyType = {
  data: {
    success: boolean
  }
}
export function RouteAuthProvider() {

  const [userVerified, setUserVerified] = useState<boolean>(false)

  const userVerification = async () => {
    const isUserVerified: userVerifyType = await verifyUser();

    console.log(isUserVerified)

    if (isUserVerified.data?.success) {
      setUserVerified(isUserVerified.data?.success);
    }
  }

  useEffect(() => {
    userVerification()
  }, [])

  return userVerified ? <Outlet /> : <UserAuthPage />

}
