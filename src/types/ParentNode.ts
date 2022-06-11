/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IdName } from './IdName';

/**
 * parent node with path
 */
export type ParentNode = {
    node?: IdName;
    parent?: ParentNode;
};
