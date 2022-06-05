import UserForm from "components/user-form/user-form"
import { UserWrapper } from "types";

type UserViewProps = {
  user?: UserWrapper
}

export default function UserView(props: UserViewProps) {
  return <UserForm user={props.user} />
}