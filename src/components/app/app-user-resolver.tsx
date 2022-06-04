import { getUser } from "api/api";
import { useEffect, useState } from "react";
import { UserWrapper } from "types";
import App from "./app";

export function AppUserResolver(props) {
  const [user, setUser] = useState<UserWrapper>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUserSuccessCallback = (res) => {
      setUser(res);
      setLoading(false);
    };
    if (
      props.clientConfiguration &&
      (props.clientConfiguration.userType === "ADMIN" ||
        props.clientConfiguration.userType === "FULL_LICENSE")
    ) {
      getUser(props.clientConfiguration.id, getUserSuccessCallback);
    } else {
      setLoading(false);
    }
  }, [props.clientConfiguration]);

  if (loading) {
    return (
      <div className="app-container container">
        <p>loading user...</p>
      </div>
    );
  } else {
    if (user?.id) {
      return (
        <App clientConfiguration={props.clientConfiguration} user={user} />
      );
    } else {
      return (
        <div className="app-container container">
          <p>no access</p>
        </div>
      );
    }
  }
}
