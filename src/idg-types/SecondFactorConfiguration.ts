/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoginValidationType } from './LoginValidationType';

/**
 * Second factor type configured by a user. In contrast to SecondFactorType, this object may in the future include further properties to identify the 2FA configuration if the type is not enough anymore, e.g. if idgard is changed to allow a secondary email address in the future.
 */
export type SecondFactorConfiguration = {
    /**
     * Type of second factor
     */
    type: LoginValidationType;
    /**
     * value associated with this 2fa method. eg. mobile number. In case of TOTP it is "<redacted>".
     */
    value?: string;
};
