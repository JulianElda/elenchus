import { useEffect, useState } from "react";
import { getPasswordPolicy } from "api/api";
import { PasswordPolicy } from "types";
import EnterprisePassword from "./enterprise-password";

export default function EnterprisePasswordResolver() {
  const [passwordPolicy, setPasswordPolicy] = useState<PasswordPolicy>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const callback = async (res) => {
      setPasswordPolicy(res);
      setLoading(false);
    };
    getPasswordPolicy(callback);
  }, []);

  if (loading === true) {
    return (<p>loading password policy...</p>);
  } else {
    return <EnterprisePassword {...passwordPolicy} />;
  }
}
