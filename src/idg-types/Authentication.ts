/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoginValidationType } from './LoginValidationType';

export type Authentication = {
    /**
     * Random client-generated token
     */
    clientSecret: string;
    /**
     * Password
     */
    password: string;
    /**
     * Username
     */
    username: string;
    /**
     * If a 2FA token is provided, this defines the type of 2FA. Defaults to preferred type of 2FA configured for
     * the user. The value should match one of the values provided by the server in the VERIFYCODE_REQUIRED error
     * response.
     *
     */
    verifyTokenType?: LoginValidationType;
    /**
     * 2FA token for login. Optional, depends on user configuration.
     */
    verifyToken?: string;
    /**
     * Client version info
     */
    version?: string;
};
