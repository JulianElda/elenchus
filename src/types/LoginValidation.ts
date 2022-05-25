/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoginValidationTypeOrNone } from './LoginValidationTypeOrNone';

/**
 * Second factor authentication configuration
 */
export type LoginValidation = {
    /**
     * If true, only the tech admin may change the configuration, not the user itself. If false, both tech admin
     * and user may change the configuration.
     *
     */
    forced: boolean;
    type: LoginValidationTypeOrNone;
    /**
     * Configuration value for second factor authentication, e.g. phone number, mail address, login card code, ...
     * If the value is sensitive (e.g. for TOTP), then a fake but non-empty value is exposed.
     * If the value is not required (DUO) or not configured yet (TOTP), this field is empty.
     *
     */
    value: string;
};
