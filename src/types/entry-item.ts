export enum EntryItemTypes {
  FILE = "FILE",
  DIR = "DIR",
  NOTE = "NOTE",
}
export type EntryItemType = {
  id: string;
  name: string;
  type: EntryItemTypes;
  author: string;
  dateCreated: number;
  size: string;
  description?: string;
  owner: boolean;
};

export type EntryItemResponseType = EntryItemType & {
  entries: EntryItemType[];
};
