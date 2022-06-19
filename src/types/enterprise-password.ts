export enum TCDPLevels {
  NONE = "NONE",
  ONE = "ONE",
  TWO = "TWO",
  THREE = "THREE",
}

export type PasswordPolicyType = {
  changeInterval: number;
  digit: boolean;
  forceChange: boolean;
  forceLengthForCreated: boolean;
  minLength: number;
  mixedCase: boolean;
  noRepeat: boolean;
  noRepeatCount: number;
  specialChar: boolean;
  tcdp: TCDPLevels;
  warnBeforeChange: number;
};
