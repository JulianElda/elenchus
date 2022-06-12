/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoxBasePolicies } from './BoxBasePolicies';
import type { ContentPolicy } from './ContentPolicy';
import type { QuarantinePolicy } from './QuarantinePolicy';
import type { TempBoxesPolicy } from './TempBoxesPolicy';

export type BoxSettings = {
    boxBasePolicies?: BoxBasePolicies;
    contentPolicy?: ContentPolicy;
    enableWebdav?: boolean;
    /**
     * enforce box-sharing with passcode
     */
    forceBoxPasscode?: boolean;
    quarantinePolicy?: QuarantinePolicy;
    showFirstVisit?: boolean;
    showLastVisit?: boolean;
    tempBoxesPolicy?: TempBoxesPolicy;
};
