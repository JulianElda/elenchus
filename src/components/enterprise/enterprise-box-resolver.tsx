import { useEffect, useState } from "react";
import api from "api/api-faker";
import { BoxSettingsType } from "types";
import { EnterpriseBox } from "components/enterprise";

export function EnterpriseBoxResolver() {
  const [boxSettings, setBoxSettings] = useState<BoxSettingsType>(
    {} as BoxSettingsType
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const callback = function (res: BoxSettingsType) {
      setBoxSettings(res);
      setLoading(false);
    };
    api.getBoxSettings(callback);
  }, []);

  if (loading === true) {
    return <p>loading box settings...</p>;
  } else {
    return <EnterpriseBox {...boxSettings} />;
  }
}
