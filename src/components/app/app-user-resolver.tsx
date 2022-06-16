import { useEffect, useState } from "react";
import api from "api/api";
import { ClientConfigType, UserType } from "types";
import { App } from "components/app";

type AppUserResolverProps = {
  clientConfiguration: ClientConfigType;
};

export function AppUserResolver(props: AppUserResolverProps) {
  const [user, setUser] = useState<UserType>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUserSuccessCallback = (res: UserType) => {
      setUser(res);
      setLoading(false);
    };
    if (
      props.clientConfiguration &&
      (props.clientConfiguration.userType === "ADMIN" ||
        props.clientConfiguration.userType === "FULL_LICENSE")
    ) {
      api.getUser(props.clientConfiguration.id, getUserSuccessCallback);
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
