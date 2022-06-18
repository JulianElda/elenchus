import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "api/api";
import { ClientConfigType, ClientConfigUserTypes, UserType } from "types";
import {
  currentUserLoaded,
  getCurrentUser,
  init,
  initGuest,
} from "store/current-user";
import { App } from "components/app";

type AppUserResolverProps = {
  clientConfiguration: ClientConfigType;
};

export function AppUserResolver(props: AppUserResolverProps) {
  const dispatch = useDispatch();
  const loaded = useSelector(currentUserLoaded);
  const user = useSelector(getCurrentUser);

  useEffect(() => {
    const getUserSuccessCallback = (res: UserType) => {
      dispatch(init(res));
    };
    if (
      props.clientConfiguration?.userType === ClientConfigUserTypes.ADMIN ||
      props.clientConfiguration?.userType === ClientConfigUserTypes.FULL_LICENSE
    ) {
      api.getUser(props.clientConfiguration.id, getUserSuccessCallback);
    } else {
      dispatch(initGuest());
    }
  }, [props.clientConfiguration, dispatch]);

  if (!loaded) {
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
