/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountCreationPolicy } from './AccountCreationPolicy';
import type { AccountVisibility } from './AccountVisibility';
import type { BoxBasePolicies } from './BoxBasePolicies';
import type { TempBoxesPolicy } from './TempBoxesPolicy';

export type UserPermissions = {
    accountCreationPolicy?: AccountCreationPolicy;
    adminPermissions?: AccountVisibility;
    boxBasePolicies?: BoxBasePolicies;
    tempBoxPolicy?: TempBoxesPolicy;
    visibility?: UserPermissions.visibility;
};

export namespace UserPermissions {

    export enum visibility {
        NONE = 'NONE',
        OWN_INVITED = 'OWN_INVITED',
        OTHER_FULL_LICENSES = 'OTHER_FULL_LICENSES',
        ALL = 'ALL',
    }


}
