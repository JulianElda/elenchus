import { useEffect, useState } from "react";
import api from "api/api";
import { PasswordPolicy } from "idg-types";
import EnterprisePassword from "./enterprise-password";

export default function EnterprisePasswordResolver() {
  const [passwordPolicy, setPasswordPolicy] = useState<PasswordPolicy>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const callback = function (res) {
      setPasswordPolicy(res);
      setLoading(false);
    };
    api.getPasswordPolicy(callback);
  }, []);

  if (loading === true) {
    return <p>loading password policy...</p>;
  } else {
    return <EnterprisePassword {...passwordPolicy} />;
  }
}
