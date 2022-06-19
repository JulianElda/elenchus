export type BoxPermission = {
  accessChat: boolean;
  accessJournal: boolean;
  accessUsers: boolean;
  deleteFiles: boolean;
  readFiles: boolean;
  writeFiles: boolean;
  exportJournal: boolean;
};

export enum BoxRoles {
  OWNER = "OWNER",
  MANAGER = "MANAGER",
  MEMBER = "MEMBER",
  ASSISTANT = "ASSISTANT",
  ANONYMOUS = "ANONYMOUS",
}

export enum BoxTypes {
  FILE = "FILE",
  DATAROOM = "DATAROOM",
  TEMPORARY = "TEMPORARY",
}

export type BoxType = {
  id: string;
  name: string;
  defaultPermissions: BoxPermission;
  permissions: BoxPermission;
  role: BoxRoles;
  type: BoxTypes;
  creationDate: number;
  // TODO
  attributes?: Record<string, any>;
  sharingConfig?: any;
  validityConfig?: any;
  boxDeleteConfig?: any;
  dataroomConfig?: any;
  // TODO: type
  rootFolder?: any;
};

export type BoxListType = {
  id: string;
  name: string;
  description: string;
  attributes?: any;
  role: BoxRoles;
  type: BoxTypes;
  permissions: BoxPermission;
};

export type BoxListResponseType = {
  hasNext: boolean;
  listBoxes: BoxListType[];
};
