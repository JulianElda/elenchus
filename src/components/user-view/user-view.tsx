import { UserForm } from "components/user-form";
import { UserWrapper } from "idg-types";

type UserViewProps = {
  user?: UserWrapper;
};

export function UserView(props: UserViewProps) {
  return <UserForm user={props.user} />;
}
