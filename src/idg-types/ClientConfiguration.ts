/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SecondFactorConfiguration } from './SecondFactorConfiguration';
import type { SessionTimeoutSetting } from './SessionTimeoutSetting';

export type ClientConfiguration = {
    csfrToken?: string | null;
    /**
     * Booked features (bigmail, antivirus, drota, ssi and erm). These information are only available for full licenses
     */
    features?: Record<string, boolean>;
    /**
     * Whether this user is the first admin
     */
    firstAdmin?: boolean;
    /**
     * User ID
     */
    id?: string | null;
    /**
     * Language of the user, 2-character ISO 639-1
     */
    language?: string | null;
    lastLogin?: number | null;
    /**
     * Optional logout endpoint for saml
     */
    logoutUri?: string | null;
    nick?: string;
    /**
     * For ui to bootstrap warning
     */
    paymentType?: ClientConfiguration.paymentType | null;
    timeoutSetting?: SessionTimeoutSetting;
    /**
     * Simple key-value settings for users client's ui
     */
    uiSettings?: Record<string, string>;
    userType?: ClientConfiguration.userType;
    /**
     * Whether the current user is allowed to use webdav
     */
    webdavEnabled?: boolean;
    /**
     * Describes the 2fa settings for login
     * null for anonymous box user
     *
     */
    verifyToken?: {
        preferred?: SecondFactorConfiguration;
    } | null;
};

export namespace ClientConfiguration {

    /**
     * For ui to bootstrap warning
     */
    export enum paymentType {
        TRIAL = 'TRIAL',
        POSTPAID = 'POSTPAID',
        PREPAID = 'PREPAID',
        APIUSAGESUBACCOUNT = 'APIUSAGESUBACCOUNT',
    }

    export enum userType {
        ADMIN = 'ADMIN',
        FULL_LICENSE = 'FULL_LICENSE',
        BASIC_LICENSE = 'BASIC_LICENSE',
        GUEST_LICENSE = 'GUEST_LICENSE',
        ANONYMOUS = 'ANONYMOUS',
    }


}
