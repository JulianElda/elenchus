import {
  BoxBasePoliciesType,
  BoxSettingsType,
  ContentPolicies,
  ContentPolicyType,
  QuarantinePolicyType,
  TempBoxesPolicyType,
} from "types/enterprise-box";

export const generate_TempBoxesPolicyType = function (): TempBoxesPolicyType {
  return {
    lifeTime: 90 * 24 * 3600 * 1000,
  };
};

export const generate_QuarantinePolicyType = function (): QuarantinePolicyType {
  return {
    minDays: 10,
  };
};

export const generate_ContentPolicyType = function (): ContentPolicyType {
  return {
    backupEnabled: true,
    expirationInMs: 30 * 24 * 3600 * 1000,
    policy: ContentPolicies.NEVER,
  };
};
/**
 *
 * @param variance 1: admin, 2: full, 3: guest, default admin
 * @returns
 */
export const generate_BoxBasePoliciesType = function (
  variance: number
): BoxBasePoliciesType {
  switch (variance) {
    // admin
    case 1:
      return {
        canCreateDataRooms: true,
        canCreatePrivacyBoxes: true,
        canCreateTemporaryBoxes: true,
        canInviteMembers: true,
      };
    case 2:
      return {
        canCreateDataRooms: false,
        canCreatePrivacyBoxes: true,
        canCreateTemporaryBoxes: true,
        canInviteMembers: true,
      };
    case 3:
      return {
        canCreateDataRooms: false,
        canCreatePrivacyBoxes: false,
        canCreateTemporaryBoxes: false,
        canInviteMembers: true,
      };
    default:
      return {
        canCreateDataRooms: true,
        canCreatePrivacyBoxes: true,
        canCreateTemporaryBoxes: true,
        canInviteMembers: true,
      };
  }
};

export const generate_BoxSettingsType = function (): BoxSettingsType {
  return {
    boxBasePolicies: generate_BoxBasePoliciesType(2),
    //contentPolicy: generate_ContentPolicyType(),
    enableWebdav: true,
    forceBoxPasscode: false,
    quarantinePolicy: generate_QuarantinePolicyType(),
    showFirstVisit: true,
    showLastVisit: true,
    tempBoxesPolicy: generate_TempBoxesPolicyType(),
  };
};
