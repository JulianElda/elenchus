import { UserForm } from "components/user-form";
import { UserType } from "types";

type UserViewProps = {
  user: UserType;
};

export function UserView(props: UserViewProps) {
  return <UserForm user={props.user} />;
}
