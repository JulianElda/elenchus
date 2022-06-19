import {
  LoginValidations,
  SoftwareSettingsType,
} from "types/enterprise-software";

export const generate_SoftwareSettingsType = function (): SoftwareSettingsType {
  return {
    defaultAuthType: LoginValidations.TOTP,
    enableInvitationTemplate: false,
    forceCertificateCheck: true,
    forceSecFacAuth: false,
    availableSecFacAuthTypes: [
      { type: LoginValidations.PASSCODE },
      { type: LoginValidations.TOTP },
    ],
    forceSecFacInvitation: true,
    forceServerSendInvitation: false,
  };
};
