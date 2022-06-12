/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Type of second factor authentication
 */
export enum LoginValidationTypeOrNone {
    NONE = 'NONE',
    PASSCODE = 'PASSCODE',
    LOGINCARD = 'LOGINCARD',
    DUO = 'DUO',
    TOTP = 'TOTP',
}