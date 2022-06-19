export type BoxBasePoliciesType = {
  canCreateDataRooms: boolean;
  canCreatePrivacyBoxes: boolean;
  canCreateTemporaryBoxes: boolean;
  canInviteMembers: boolean;
};

export enum ContentPolicies {
  DELETE_BOX_ON_EXPIRATION = "DELETE_BOX_ON_EXPIRATION",
  DELETE_CONTENT_ON_EXPIRATION = "DELETE_CONTENT_ON_EXPIRATION",
  NEVER = "NEVER",
  MANUAL = "MANUAL",
}

export type ContentPolicyType = {
  backupEnabled: boolean;
  expirationInMs: number;
  policy: ContentPolicies;
};

export type QuarantinePolicyType = {
  minDays: number;
};

export type TempBoxesPolicyType = {
  lifeTime: number;
};

export type BoxSettingsType = {
  boxBasePolicies: BoxBasePoliciesType;
  //contentPolicy: ContentPolicyType;
  enableWebdav: boolean;
  forceBoxPasscode: boolean;
  quarantinePolicy: QuarantinePolicyType;
  showFirstVisit: boolean;
  showLastVisit: boolean;
  tempBoxesPolicy: TempBoxesPolicyType;
};
