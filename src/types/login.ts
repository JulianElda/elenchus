export enum LoginValidations {
  PASSCODE = "PASSCODE",
  LOGINCARD = "LOGINCARD",
  DUO = "DUO",
  TOTP = "TOTP",
}

export type LoginPayloadType = {
  clientSecret: string;
  password: string;
  username: string;
  verifyToken?: string;
  version?: string;
  verifyTokenType?: LoginValidations;
};
