import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "api/api";
import { UserWrapper } from "idg-types";
import UserView from "components/user-view/user-view";

export default function UserViewResolver() {
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<UserWrapper>();

  useEffect(() => {
    const getUserCallback = function (res) {
      setUser(res);
      setLoading(false);
    };
    api.getUser(params.userId || "", getUserCallback);
  }, [params.userId]);

  if (loading) {
    return <p>loading user...</p>;
  } else {
    return <UserView user={user} />;
  }
}
