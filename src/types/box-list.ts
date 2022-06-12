import { Box, BoxPermission } from "./box-common";

export type BoxListResponseType = {
  hasNext: boolean;
  listBoxes: BoxListType[];
};

export type BoxListType = {
  id: string;
  name: string;
  description: string;
  attributes: any;
  role: Box.role;
  type: Box.type;
  permissions: BoxPermission;
};
