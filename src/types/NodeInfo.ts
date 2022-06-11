/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IdName } from './IdName';
import type { ParentNode } from './ParentNode';

export type NodeInfo = {
    box?: IdName;
    /**
     * creation date
     */
    created?: string;
    creator?: IdName;
    node?: IdName;
    parent?: ParentNode;
    /**
     * type (FILE)
     */
    type?: NodeInfo.type;
};

export namespace NodeInfo {

    /**
     * type (FILE)
     */
    export enum type {
        DIR = 'DIR',
        FILE = 'FILE',
        NOTE = 'NOTE',
    }


}
