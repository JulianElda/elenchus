/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegistrationValidationType } from './RegistrationValidationType';

export type RegistrationValidation = {
    type?: RegistrationValidationType;
    /**
     * Configuration value for second factor authentication, e.g. phone number, mail address, login card code, ...
     * If the value is sensitive (e.g. for TOTP), then a fake but non-empty value is exposed.
     * If the value is not required (DUO) or not configured yet (TOTP), this field is empty.
     *
     */
    value?: string;
};
