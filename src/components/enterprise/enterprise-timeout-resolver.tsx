import { useEffect, useState } from "react";
import api from "api/api";
import { EnterpriseTimeout } from "components/enterprise";

export function EnterpriseTimeoutResolver() {
  const [sessionTimeout, setSessionTimeout] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const callback = function (res) {
      setSessionTimeout(res);
      setLoading(false);
    };
    api.getDefaultSessionTimeout(callback);
  }, []);

  if (loading === true) {
    return <p>loading timeout policy...</p>;
  } else {
    return <EnterpriseTimeout {...sessionTimeout} />;
  }
}
