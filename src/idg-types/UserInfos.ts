/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserInfos = {
    admin: boolean;
    dailyNotification?: boolean;
    email: string;
    hourlyNotification?: boolean;
    name: string;
    personalId?: string;
    status?: UserInfos.status;
    type: UserInfos.type;
};

export namespace UserInfos {

    export enum status {
        INVALID = 'INVALID',
        INITIATED = 'INITIATED',
        ACTIVE = 'ACTIVE',
        DISABLED = 'DISABLED',
    }

    export enum type {
        FULL_LICENSE = 'FULL_LICENSE',
        GUEST_LICENSE = 'GUEST_LICENSE',
        BASIC_LICENSE = 'BASIC_LICENSE',
    }


}
