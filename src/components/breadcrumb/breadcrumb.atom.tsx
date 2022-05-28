import { atom } from "recoil";

export type BreadcrumbItemType = {
  url: string;
  name: string;
  index: number;
};

export const breadcrumbState = atom({
  key: "breadcrumb",
  default: [],
});
