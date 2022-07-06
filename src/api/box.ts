import { faker } from "@faker-js/faker/locale/en";
import {
  BoxPermission,
  BoxRoles,
  BoxTypes,
  BoxType,
  BoxListType,
  BoxListResponseType,
} from "types";
import { generate_EntryItemResponseType } from "./entry-item";

export const generateDefaultBoxPermission = function (): BoxPermission {
  return {
    accessChat: true,
    accessJournal: true,
    accessUsers: true,
    deleteFiles: true,
    readFiles: true,
    writeFiles: true,
    exportJournal: true,
  };
};

export const generateBoxPermission = function (role: BoxRoles): BoxPermission {
  switch (role) {
    case BoxRoles.OWNER || BoxRoles.MANAGER:
      return {
        accessChat: true,
        accessJournal: true,
        accessUsers: true,
        deleteFiles: true,
        readFiles: true,
        writeFiles: true,
        exportJournal: true,
      };
    case BoxRoles.MEMBER:
      return {
        accessChat: true,
        accessJournal: false,
        accessUsers: true,
        deleteFiles: false,
        readFiles: true,
        writeFiles: true,
        exportJournal: false,
      };
    case BoxRoles.ASSISTANT:
      return {
        accessChat: false,
        accessJournal: false,
        accessUsers: false,
        deleteFiles: false,
        readFiles: true,
        writeFiles: false,
        exportJournal: false,
      };
    default:
      return {
        accessChat: true,
        accessJournal: false,
        accessUsers: true,
        deleteFiles: false,
        readFiles: true,
        writeFiles: true,
        exportJournal: false,
      };
  }
};

export const generateRole = function (variance?: number): BoxRoles {
  let i: number = variance || Math.ceil(Math.random() * 4);
  switch (i) {
    case 1:
      return BoxRoles.OWNER;
    case 2:
      return BoxRoles.MANAGER;
    case 3:
      return BoxRoles.MEMBER;
    case 4:
      return BoxRoles.ASSISTANT;
    default:
      return BoxRoles.OWNER;
  }
};

export const generateType = function (variance?: number): BoxTypes {
  let i: number = variance || Math.ceil(Math.random() * 3);
  switch (i) {
    case 1:
      return BoxTypes.FILE;
    case 2:
      return BoxTypes.DATAROOM;
    case 3:
      return BoxTypes.TEMPORARY;
    default:
      return BoxTypes.FILE;
  }
};

export const generate_BoxType = function (): BoxType {
  let type: BoxTypes = generateType();
  let role: BoxRoles = generateRole();
  let defaultPermissions: BoxPermission = generateDefaultBoxPermission();
  let permissions: BoxPermission = generateBoxPermission(role);

  return {
    id: faker.database.mongodbObjectId(),
    name: faker.company.companyName(),
    defaultPermissions,
    permissions,
    role,
    type,
    creationDate: faker.date.past().getTime(),
    rootFolder: generate_EntryItemResponseType(),
  };
};

export const generate_BoxListType = function (): BoxListType {
  let type: BoxTypes = generateType();
  let role: BoxRoles = generateRole();
  let permissions: BoxPermission = generateBoxPermission(role);

  return {
    id: faker.database.mongodbObjectId(),
    name: faker.company.companyName(),
    description: faker.company.catchPhrase(),
    permissions,
    role,
    type,
  };
};

export const generate_BoxListResponseType = function (): BoxListResponseType {
  let tmp: BoxListType[] = [];
  for (let i = 0; i < 20; i++) {
    tmp.push(generate_BoxListType());
  }
  return {
    hasNext: Math.random() > 0.8,
    listBoxes: tmp,
  };
};
