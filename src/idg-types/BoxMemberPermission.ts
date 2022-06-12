/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Permission of current user on this box (if applicable)
 */
export type BoxMemberPermission = {
    accessChat?: boolean;
    accessJournal?: boolean;
    accessUsers?: boolean;
    deleteFiles?: boolean;
    readFiles?: boolean;
    writeFiles?: boolean;
};
