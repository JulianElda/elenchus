/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoginValidationTypeOrNone } from './LoginValidationTypeOrNone';
import type { SecondFactorType } from './SecondFactorType';

export type SoftwareSettings = {
    /**
     * Default 2FA method to use on user creation
     */
    defaultAuthType?: LoginValidationTypeOrNone;
    /**
     * only applies if license is booked
     */
    enableInvitationTemplate?: boolean;
    /**
     * verification of server's certificate signature must be done before login in
     */
    forceCertificateCheck?: boolean;
    /**
     * enforce second-factor-login
     */
    forceSecFacAuth?: boolean;
    /**
     * The list of available 2FA methods for the enterprise of the current user.
     * This list depends the billed features and the 2FA methods implemented in the server version.
     *
     */
    availableSecFacAuthTypes?: Array<SecondFactorType>;
    /**
     * enforce registration-invitation with second-factor-validation
     */
    forceSecFacInvitation?: boolean;
    /**
     * only applies if license is booked
     */
    forceServerSendInvitation?: boolean;
};
