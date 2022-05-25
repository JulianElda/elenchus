/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoxMemberPermission } from './BoxMemberPermission';

export type IdgardBox = {
    /**
     * Some extra attributes if applicable(open,archive,trashbinActive,deletionDue,quarantine.from,quarantine.to)
     */
    attributes?: Record<string, any>;
    description?: string;
    id?: string;
    name?: string;
    permissions?: BoxMemberPermission;
    /**
     * Role of current user in this box
     */
    role?: IdgardBox.role;
    type?: IdgardBox.type;
};

export namespace IdgardBox {

    /**
     * Role of current user in this box
     */
    export enum role {
        OWNER = 'OWNER',
        MANAGER = 'MANAGER',
        MEMBER = 'MEMBER',
        ASSISTANT = 'ASSISTANT',
        ANONYMOUS = 'ANONYMOUS',
    }

    export enum type {
        FILE = 'FILE',
        DATAROOM = 'DATAROOM',
        TEMPORARY = 'TEMPORARY',
    }


}
