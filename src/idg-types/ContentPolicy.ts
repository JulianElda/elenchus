/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * deletion policy for box & its contents
 */
export type ContentPolicy = {
    /**
     * backup feature (license required)
     */
    backupEnabled?: boolean;
    /**
     * to be deleted in millisecs after creation, applied only for auto-deletion
     */
    expirationInMs?: number;
    /**
     * specify if the box, its content to be automatically deleted or to be archived as DR (license required)
     */
    policy?: ContentPolicy.policy;
};

export namespace ContentPolicy {

    /**
     * specify if the box, its content to be automatically deleted or to be archived as DR (license required)
     */
    export enum policy {
        DELETE_BOX_ON_EXPIRATION = 'DELETE_BOX_ON_EXPIRATION',
        DELETE_CONTENT_ON_EXPIRATION = 'DELETE_CONTENT_ON_EXPIRATION',
        NEVER = 'NEVER',
        MANUAL = 'MANUAL',
    }


}
