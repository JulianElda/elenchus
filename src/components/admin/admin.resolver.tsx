import { Outlet, useOutletContext } from "react-router-dom";

export default function AdminResolver(props: any) {
  const [clientConfiguration] = useOutletContext<any>();

  if (clientConfiguration.userType !== "ADMIN") {
    return <>not an admin</>;
  } else {
    return <Outlet />;
  }
}
