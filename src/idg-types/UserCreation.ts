/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoginValidation } from './LoginValidation';
import type { RegistrationValidation } from './RegistrationValidation';

export type UserCreation = {
    /**
     * Expiration Date of the user. If not set the user is permanent.
     */
    expirationDate?: string;
    loginValidation?: LoginValidation;
    note?: string;
    phoneNumber?: string;
    registrationDate?: string;
    registrationLink?: string;
    registrationValidation?: RegistrationValidation;
};
