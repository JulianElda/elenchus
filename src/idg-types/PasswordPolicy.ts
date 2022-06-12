/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PasswordPolicy = {
  /**
   * if `forceChange`is true, each `changeInterval` days the pwd needs to be changed
   */
  changeInterval?: number;
  /**
   * if pwd should contain digits
   */
  digit?: boolean;
  /**
   * if pwd change every `changeInterval` days is forced
   */
  forceChange?: boolean;
  /**
   * set to true will enforce all users with short password to change to comply with new length
   */
  forceLengthForCreated?: boolean;
  /**
   * must be in range [8-50]
   */
  minLength?: number;
  /**
   * if the pwd should have both lower and upper case chars
   */
  mixedCase?: boolean;
  /**
   * if the next `noRepeatCount` pwds cannot reuse the current one
   */
  noRepeat?: boolean;
  /**
   * if `noRepeat` is activated, this number is the +  number of cycles a password cannot be reused again
   */
  noRepeatCount?: number;
  /**
   * if pwd should contain special chars
   */
  specialChar?: boolean;
  /**
   * 2 factor policy enforced
   */
  tcdp?: PasswordPolicy.tcdp;
  /**
   * days to remember the user before the change ultimatum
   */
  warnBeforeChange?: number;
};

export namespace PasswordPolicy {

  /**
   * 2 factor policy enforced
   */
  export enum tcdp {
      NONE = 'NONE',
      ONE = 'ONE',
      TWO = 'TWO',
      THREE = 'THREE',
  }


}
