import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "@api/axios";

export default function UserViewResolver() {

  const navigate = useNavigate();
  const params = useParams();

  const [user, setUser] = useState<any>();

  useEffect(() => {
    console.log("FileList.loadBoxItems() " + params.userId)
    axios.get("/uiapi/UserManagementAPI/v1/rest/users/" + params.userId, {})
    .then((res) => {
      setUser(res.data)
    })
    .catch((res) => {
    })
  }, [params.userId])

  if (user === {}) {
    return (
      <p>loading user...</p>
    );
  }
  else {
    return (
      <p>{user.userInfos.name}</p>
    );
  }
}
