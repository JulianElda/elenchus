/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * files in an av-enabled box only
 */
export type AVScanInfo = {
    avSignature?: string;
    avStatus?: AVScanInfo.avStatus;
    scanDate?: string;
};

export namespace AVScanInfo {

    export enum avStatus {
        UNKNOWN = 'UNKNOWN',
        SCAN_PENDING = 'SCAN_PENDING',
        CLEAN = 'CLEAN',
        INFECTED = 'INFECTED',
        NOT_SUPPORTED = 'NOT_SUPPORTED',
    }


}
