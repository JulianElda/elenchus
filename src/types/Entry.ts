/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AVScanInfo } from './AVScanInfo';
import type { EntryERMInfo } from './EntryERMInfo';
import type { EntryLock } from './EntryLock';
import type { PDFStatus } from './PDFStatus';

export type Entry = {
    author?: string;
    avScanInfo?: AVScanInfo;
    /**
     * files only
     */
    classId?: string;
    dateCreated?: string;
    /**
     * folders only
     */
    description?: string;
    ermInfo?: EntryERMInfo;
    id?: string;
    lock?: EntryLock;
    name?: string;
    option?: PDFStatus;
    owner?: boolean;
    /**
     * in bytes; Files only
     */
    size?: string;
    type?: Entry.type;
};

export namespace Entry {

    export enum type {
        DIR = 'DIR',
        FILE = 'FILE',
        NOTE = 'NOTE',
    }


}
