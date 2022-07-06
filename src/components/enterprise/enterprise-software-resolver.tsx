import { useEffect, useState } from "react";
import { enterprise_api } from "api/api-faker";
import { SoftwareSettingsType } from "types";
import { EnterpriseSoftware } from "components/enterprise";

export function EnterpriseSoftwareResolver() {
  const [SoftwareSettings, setSoftwareSettings] =
    useState<SoftwareSettingsType>({} as SoftwareSettingsType);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const callback = function (res: SoftwareSettingsType) {
      setSoftwareSettings(res);
      setLoading(false);
    };
    enterprise_api.getSoftwareSettings(callback);
  }, []);

  if (loading === true) {
    return <p>loading software policy...</p>;
  } else {
    return <EnterpriseSoftware {...SoftwareSettings} />;
  }
}
