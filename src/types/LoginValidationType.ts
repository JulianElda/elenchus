/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Type of second factor authentication
 */
 export enum LoginValidationType {
  PASSCODE = 'PASSCODE',
  LOGINCARD = 'LOGINCARD',
  DUO = 'DUO',
  TOTP = 'TOTP',
}