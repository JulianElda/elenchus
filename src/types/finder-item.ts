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
  type: FinderItemTypes;
  box: IdName;
  created: number;
  creator: IdName;
  fileSize: number;
  parent: ParentType;
};

enum FinderItemTypes {
  FILE = "FILE",
  DIR = "DIR",
  NOTE = "NOTE",
}
