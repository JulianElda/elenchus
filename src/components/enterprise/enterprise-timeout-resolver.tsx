import { useEffect, useState } from "react";
import api from "api/api-faker";
import { TimeoutSettingsType } from "types";
import { EnterpriseTimeout } from "components/enterprise";

export function EnterpriseTimeoutResolver() {
  const [sessionTimeout, setSessionTimeout] = useState<TimeoutSettingsType>(
    {} as TimeoutSettingsType
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const callback = function (res: TimeoutSettingsType) {
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
