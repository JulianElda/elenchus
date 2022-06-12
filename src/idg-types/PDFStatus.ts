/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * relevant only for pdf files in dataroomm with WATERMARK or READONLY
 */
export type PDFStatus = {
    /**
     * specify how file can be served/downloaded to client
     */
    config?: PDFStatus.config;
    /**
     * specify if server can handle this configuration
     */
    status?: PDFStatus.status;
};

export namespace PDFStatus {

    /**
     * specify how file can be served/downloaded to client
     */
    export enum config {
        NONE = 'NONE',
        WATERMARK = 'WATERMARK',
        READONLY = 'READONLY',
        READONLY_OFFLINE = 'READONLY_OFFLINE',
    }

    /**
     * specify if server can handle this configuration
     */
    export enum status {
        UNSUPPORTED = 'UNSUPPORTED',
        ERR = 'ERR',
        NONE = 'NONE',
        PENDING = 'PENDING',
        OK = 'OK',
    }


}
