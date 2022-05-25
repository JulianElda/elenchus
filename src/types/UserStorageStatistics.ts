/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserStorageStatistics = {
    /**
     * Storage used by account
     */
    accountUsed?: number;
    /**
     * Return the booked (maximum if storage capped) storage for the enterprise account the user is linked to
     */
    bookedAccountStorage?: number;
    /**
     * Storage used by people this user has invited
     */
    invited?: number;
    /**
     * If the account storage is capped
     */
    isAccountCapped?: boolean;
    /**
     * For basic licenses and clientconfiguration
     */
    maxFileSize?: number;
    /**
     * Only for basic licenses
     */
    maxUserStorage?: number;
    /**
     * Storage used by oneself
     */
    own?: number;
};
