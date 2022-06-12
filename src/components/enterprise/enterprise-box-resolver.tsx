import { useEffect, useState } from "react";
import api from "api/api";
import { BoxSettings } from "types";
import EnterpriseBox from "./enterprise-box";

export default function EnterpriseBoxResolver() {
  const [boxSettings, setBoxSettings] = useState<BoxSettings>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const callback = function (res) {
      setBoxSettings(res);
      setLoading(false);
    };
    api.getBoxSettings(callback);
  }, []);

  if (loading === true) {
    return <p>loading password policy...</p>;
  } else {
    return <EnterpriseBox {...boxSettings} />;
  }
}
