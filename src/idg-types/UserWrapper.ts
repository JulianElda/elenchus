/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserBoxStatistics } from './UserBoxStatistics';
import type { UserCreation } from './UserCreation';
import type { UserInfos } from './UserInfos';
import type { UserInfoStatistics } from './UserInfoStatistics';
import type { UserPermissions } from './UserPermissions';
import type { UserStorageStatistics } from './UserStorageStatistics';

export type UserWrapper = {
    id: string;
    statisticsUserBox?: UserBoxStatistics | null;
    statisticsUserInfos?: UserInfoStatistics | null;
    statisticsUserStorage?: UserStorageStatistics | null;
    /**
     * required: loginValidation.type
     */
    userCreation?: UserCreation;
    /**
     * required: name, email, type, admin
     */
    userInfos?: UserInfos;
    userPermissions?: UserPermissions | null;
};
