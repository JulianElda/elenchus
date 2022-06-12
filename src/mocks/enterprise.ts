import { LoginValidationType } from "idg-types/LoginValidationType";
import { LoginValidationTypeOrNone } from "idg-types/LoginValidationTypeOrNone";
import { PasswordPolicy } from "idg-types/PasswordPolicy";

export const mock_enterprise_box = {
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

export const mock_enterprise_password = {
  mixedCase: false,
  digit: false,
  specialChar: true,
  forceChange: false,
  changeInterval: 0,
  noRepeat: false,
  noRepeatCount: 0,
  tcdp: PasswordPolicy.tcdp.NONE,
  warnBeforeChange: 0,
  forceLengthForCreated: false,
  minLength: 12,
};

export const mock_enterprise_software = {
  defaultAuthType: LoginValidationTypeOrNone.PASSCODE,
  forceSecFacAuth: false,
  forceSecFacInvitation: false,
  forceServerSendInvitation: false,
  forceCertificateCheck: true,
  enableInvitationTemplate: false,
  availableSecFacAuthTypes: [
    {
      type: LoginValidationType.DUO,
    },
    {
      type: LoginValidationType.PASSCODE,
    },
    {
      type: LoginValidationType.LOGINCARD,
    },
  ],
};

export const mock_enterprise_timeout = {
  forced: true,
  timeout: 90,
};
