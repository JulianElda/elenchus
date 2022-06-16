import { EntryItemTypes } from "./entry-item";

export type IdName = {
  id: string;
  name: string;
};

type ParentType = {
  node: IdName;
  parent: ParentType;
};

export type FinderItemType = {
  node: IdName;
  type: EntryItemTypes;
  box: IdName;
  created: number;
  creator: IdName;
  fileSize: number;
  parent: ParentType;
};
