import { useEffect, useState } from "react";
import api from "api/api-faker";
import { PasswordPolicyType } from "types";
import { EnterprisePassword } from "components/enterprise";

export function EnterprisePasswordResolver() {
  const [passwordPolicy, setPasswordPolicy] = useState<PasswordPolicyType>(
    {} as PasswordPolicyType
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const callback = function (res: PasswordPolicyType) {
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
