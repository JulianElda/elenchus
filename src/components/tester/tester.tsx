import { generate_UserType } from "api/user";
import { UserForm } from "components/user-form";

export default function Tester() {
  let asd = generate_UserType();
  console.log(asd);
  return <UserForm user={asd} />;
}
