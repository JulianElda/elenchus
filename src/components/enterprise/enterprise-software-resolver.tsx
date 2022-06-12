import { useEffect, useState } from "react";
import api from "api/api";
import { SoftwareSettings } from "idg-types";
import EnterpriseSoftware from "./enterprise-software";

export default function EnterpriseSoftwareResolver() {
  const [SoftwareSettings, setSoftwareSettings] = useState<SoftwareSettings>(
    {}
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const callback = function (res) {
      setSoftwareSettings(res);
      setLoading(false);
    };
    api.getSoftwareSettings(callback);
  }, []);

  if (loading === true) {
    return <p>loading software policy...</p>;
  } else {
    return <EnterpriseSoftware {...SoftwareSettings} />;
  }
}
