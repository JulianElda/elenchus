import { faker } from "@faker-js/faker/locale/en";
import { ClientConfigType, ClientConfigUserTypes } from "types";

export const generate_ClientConfigType = function (
  variance?: ClientConfigUserTypes
): ClientConfigType {
  return {
    csfrToken: faker.random.word(),
    id: faker.database.mongodbObjectId(),
    lastLogin: faker.date.past().getTime(),
    nick: faker.name.findName(),
    userType: variance || ClientConfigUserTypes.ADMIN,
  };
};
