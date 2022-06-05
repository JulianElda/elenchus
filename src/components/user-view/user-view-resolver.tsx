import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "api/axios";
import { UserWrapper } from "types";
import UserView from "components/user-view/user-view"

export default function UserViewResolver() {
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<UserWrapper>();

  useEffect(() => {
    axios
      .get("/uiapi/UserManagementAPI/v1/rest/users/" + params.userId, {})
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((res) => {});
  }, [params.userId]);

  if (loading) {
    return <p>loading user...</p>;
  } else {
    return <UserView user={user}/>;
  }
}
