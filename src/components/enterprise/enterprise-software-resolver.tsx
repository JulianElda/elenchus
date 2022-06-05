import { useEffect, useState } from "react";
import { getSoftwareSettings } from "api/api";
import { SoftwareSettings } from "types";
import EnterpriseSoftware from "./enterprise-software";

export default function EnterpriseSoftwareResolver() {
  const [SoftwareSettings, setSoftwareSettings] = useState<SoftwareSettings>(
    {}
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const callback = async (res) => {
      setSoftwareSettings(res);
      setLoading(false);
    };
    getSoftwareSettings(callback);
  }, []);

  if (loading === true) {
    return <p>loading software policy...</p>;
  } else {
    return <EnterpriseSoftware {...SoftwareSettings} />;
  }
}
