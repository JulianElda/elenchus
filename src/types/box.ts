import { Box, BoxPermission } from "./box-common";

export type BoxType = {
  id: string;
  name: string;
  defaultPermissions: BoxPermission;
  permissions: BoxPermission;
  role: Box.role;
  type: Box.type;
  attributes?: Record<string, any>;
  creationDate?: number;
  // TODO
  sharingConfig?: any;
  validityConfig?: any;
  boxDeleteConfig?: any;
  dataroomConfig?: any;
  rootFolder?: any;
};
