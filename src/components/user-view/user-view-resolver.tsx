import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "api/api-faker";
import { UserType } from "types";
import { UserView } from "components/user-view";

export function UserViewResolver() {
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    const getUserCallback = function (res: UserType) {
      setUser(res);
      setLoading(false);
    };
    api.getUser(params.userId!, getUserCallback);
  }, [params.userId]);

  if (loading) {
    return <p>loading user...</p>;
  } else {
    return <UserView user={user!} />;
  }
}
