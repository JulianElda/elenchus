import { faker } from "@faker-js/faker";
import { IdName, ParentType, FinderItemType } from "types/finder-item";
import { generateEntryItemType, generateItemSize } from "./entry-item";
import { EntryItemTypes } from "types/entry-item";

export const generateFileIdName = function (): IdName {
  return {
    id: faker.database.mongodbObjectId(),
    name: faker.system.commonFileName(),
  };
};

export const generateFolderIdName = function (): IdName {
  return {
    id: faker.database.mongodbObjectId(),
    name: faker.commerce.productAdjective() + " " + faker.commerce.product(),
  };
};

export const generateBoxIdName = function (): IdName {
  return {
    id: faker.database.mongodbObjectId(),
    name: faker.company.companyName(),
  };
};

export const generateCreatorIdName = function (): IdName {
  return {
    id: faker.name.findName(),
    name: faker.company.companyName(),
  };
};

const generateParentType = function (): ParentType {
  let hasMore: boolean = Math.random() > 0.7;
  return {
    node: generateFolderIdName(),
    parent: hasMore ? generateParentType() : null,
  };
};

export const generate_FinderItemType = function (): FinderItemType {
  let type = generateEntryItemType();

  return {
    node:
      type === EntryItemTypes.DIR
        ? generateFolderIdName()
        : generateFileIdName(),
    type: type,
    box: generateBoxIdName(),
    created: faker.date.past().getTime(),
    creator: generateCreatorIdName(),
    fileSize: generateItemSize(type),
    parent: generateParentType(),
  };
};

export const generate_FinderItemTypes = function (): FinderItemType[] {
  let tmp: FinderItemType[] = [];
  let howMany: number = Math.floor(Math.random() * 10);
  let hasMatch: boolean = Math.random() > 0.9;

  if (!hasMatch) {
    return tmp;
  } else {
    for (let i = 0; i < howMany; i++) {
      tmp.push(generate_FinderItemType());
    }
    return tmp;
  }
};
