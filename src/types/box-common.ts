export type BoxPermission = {
  accessChat?: boolean;
  accessJournal?: boolean;
  accessUsers?: boolean;
  deleteFiles?: boolean;
  readFiles?: boolean;
  writeFiles?: boolean;
};

export namespace Box {
  export enum role {
    OWNER = "OWNER",
    MANAGER = "MANAGER",
    MEMBER = "MEMBER",
    ASSISTANT = "ASSISTANT",
    ANONYMOUS = "ANONYMOUS",
  }

  export enum type {
    FILE = "FILE",
    DATAROOM = "DATAROOM",
    TEMPORARY = "TEMPORARY",
  }
}
