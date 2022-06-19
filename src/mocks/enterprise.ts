import {
  SoftwareSettingsType,
  LoginValidations,
} from "types/enterprise-software";
import { BoxSettingsType } from "types/enterprise-box";
import { PasswordPolicyType, TCDPLevels } from "types/enterprise-password";
import { TimeoutSettingsType } from "types/enterprise-timeout";

export const mock_enterprise_box: BoxSettingsType = {
  enableWebdav: true,
  showFirstVisit: false,
  showLastVisit: false,
  forceBoxPasscode: false,
  boxBasePolicies: {
    canCreateTemporaryBoxes: true,
    canCreatePrivacyBoxes: true,
    canCreateDataRooms: false,
    canInviteMembers: true,
  },
  tempBoxesPolicy: {
    lifeTime: 7776000000,
  },
  quarantinePolicy: {
    minDays: 2,
  },
};

export const mock_enterprise_password: PasswordPolicyType = {
  mixedCase: false,
  digit: false,
  specialChar: true,
  forceChange: false,
  changeInterval: 0,
  noRepeat: false,
  noRepeatCount: 0,
  tcdp: TCDPLevels.NONE,
  warnBeforeChange: 0,
  forceLengthForCreated: false,
  minLength: 12,
};

export const mock_enterprise_software: SoftwareSettingsType = {
  defaultAuthType: LoginValidations.PASSCODE,
  forceSecFacAuth: false,
  forceSecFacInvitation: false,
  forceServerSendInvitation: false,
  forceCertificateCheck: true,
  enableInvitationTemplate: false,
  availableSecFacAuthTypes: [
    {
      type: LoginValidations.DUO,
    },
    {
      type: LoginValidations.PASSCODE,
    },
    {
      type: LoginValidations.LOGINCARD,
    },
  ],
};

export const mock_enterprise_timeout: TimeoutSettingsType = {
  forced: true,
  timeout: 90,
};
