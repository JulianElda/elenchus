export enum LoginValidations {
  NONE = "NONE",
  PASSCODE = "PASSCODE",
  LOGINCARD = "LOGINCARD",
  DUO = "DUO",
  TOTP = "TOTP",
}

export type SecondFactorType = {
  type: LoginValidations;
};

export type SoftwareSettingsType = {
  defaultAuthType: LoginValidations;
  enableInvitationTemplate: boolean;
  forceCertificateCheck: boolean;
  forceSecFacAuth: boolean;
  availableSecFacAuthTypes: Array<SecondFactorType>;
  forceSecFacInvitation: boolean;
  forceServerSendInvitation: boolean;
};
