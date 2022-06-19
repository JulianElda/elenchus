import { faker } from "@faker-js/faker";
import {
  EntryItemTypes,
  EntryItemType,
  EntryItemResponseType,
} from "types/entry-item";

const randomType = function (): EntryItemTypes {
  let i = Math.floor(Math.random() * 10);
  switch (i) {
    case 0:
      return EntryItemTypes.NOTE;
    case 1:
      return EntryItemTypes.DIR;
    case 2:
      return EntryItemTypes.DIR;
    default:
      return EntryItemTypes.FILE;
  }
};

const generateItemName = function (type: string): string {
  switch (type) {
    case EntryItemTypes.FILE:
      // TODO: specify extensions
      return faker.system.commonFileName();
    case EntryItemTypes.DIR:
      return faker.commerce.productAdjective() + " " + faker.commerce.product();
    case EntryItemTypes.NOTE:
      return faker.music.songName();
    default:
      return faker.commerce.productName();
  }
};

const generateItemSize = function (type): string {
  switch (type) {
    case EntryItemTypes.FILE:
      return Math.floor(Math.random() * 1024 * 1024 * 1024) + "";
    case EntryItemTypes.DIR:
      return "";
    case EntryItemTypes.NOTE:
      return "";
    default:
      return "";
  }
};

const generateDescription = function (type): string {
  switch (type) {
    case EntryItemTypes.FILE:
      return "";
    case EntryItemTypes.DIR:
      return faker.commerce.productDescription();
    case EntryItemTypes.NOTE:
      return "";
    default:
      return "";
  }
};

const generateOwner = function (): boolean {
  let i = Math.floor(Math.random() * 11);
  return i > 6;
};

export const generate_EntryItemType = function (
  variance?: EntryItemTypes
): EntryItemType {
  let type: EntryItemTypes = variance || randomType();

  return {
    id: faker.database.mongodbObjectId(),
    type: type,
    name: generateItemName(type),
    size: generateItemSize(type),
    description: generateDescription(type),
    author: faker.name.findName(),
    dateCreated: faker.date.past().getDate(),
    owner: generateOwner(),
  };
};

export const generate_EntryItemResponseType =
  function (): EntryItemResponseType {
    let howMany = Math.ceil(Math.random() * 20);
    let tmp: EntryItemType[] = [];
    let parentEntry = generate_EntryItemType(EntryItemTypes.DIR);
    for (let i = 0; i < howMany; i++) {
      tmp.push(generate_EntryItemType());
    }
    return {
      ...parentEntry,
      entries: tmp,
    };
  };
