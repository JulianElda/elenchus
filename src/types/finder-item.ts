import { EntryItemTypes } from "./entry-item";

export type IdName = {
  id: string;
  name: string;
};

export type ParentType = {
  node: IdName;
  parent: ParentType | null;
};

export type FinderItemType = {
  node: IdName;
  type: EntryItemTypes;
  box: IdName;
  created: number;
  creator: IdName;
  fileSize: string;
  parent: ParentType | null;
};
