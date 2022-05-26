import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "api/axios";
import { UserWrapper } from "types";

export default function UserViewResolver() {

  const params = useParams();

  const [user, setUser] = useState<UserWrapper>();

  useEffect(() => {
    axios.get("/uiapi/UserManagementAPI/v1/rest/users/" + params.userId, {})
    .then((res) => {
      setUser(res.data)
    })
    .catch((res) => {
    })
  }, [params.userId])

  if (!user) {
    return (
      <p>loading user...</p>
    );
  }
  else {
    return (
      <p>{user?.userInfos?.name}</p>
    );
  }
}
