import { TCDPLevels, PasswordPolicyType } from "types/enterprise-password";

export const generate_PasswordPolicyType = function (): PasswordPolicyType {
  return {
    changeInterval: 90,
    digit: true,
    forceChange: false,
    forceLengthForCreated: true,
    minLength: 12,
    mixedCase: false,
    noRepeat: false,
    noRepeatCount: 5,
    specialChar: true,
    tcdp: TCDPLevels.NONE,
    warnBeforeChange: 7,
  };
};
