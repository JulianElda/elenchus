import { useEffect, useState } from "react";
import { getDefaultSessionTimeout } from "api/api";
import EnterpriseTimeout from "./enterprise-timeout";

export default function EnterpriseTimeoutResolver() {
  const [sessionTimeout, setSessionTimeout] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const callback = async (res) => {
      setSessionTimeout(res);
      setLoading(false);
    };
    getDefaultSessionTimeout(callback);
  }, []);

  if (loading === true) {
    return <p>loading timeout policy...</p>;
  } else {
    return <EnterpriseTimeout {...sessionTimeout} />;
  }
}
