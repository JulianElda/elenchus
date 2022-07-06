import { LoginValidationTypes, UserInfoStatus, UserInfoType } from "types/user";

export const mock_user_admin = {
  id: "3cnfl",
  userInfos: {
    personalId: "gandoo",
    name: "Jönö Bängsät",
    email: "trap@uniscon-obas.de",
    type: UserInfoType.FULL_LICENSE,
    status: UserInfoStatus.ACTIVE,
    dailyNotification: true,
    hourlyNotification: false,
    admin: true,
  },
  userCreation: {
    phoneNumber: undefined,
    note: undefined,
    registrationLink: undefined,
    registrationDate: "1576844956000",
    expirationDate: undefined,
    loginValidation: {
      forced: false,
      type: LoginValidationTypes.NONE,
      value: "",
    },
    registrationValidation: undefined,
  },
  userPermissions: {
    visibility: "ALL",
    accountCreationPolicy: {
      canCreateTempGuest: true,
      canCreateRegularGuest: true,
    },
    boxBasePolicies: {
      canCreateTemporaryBoxes: true,
      canCreatePrivacyBoxes: true,
      canCreateDataRooms: true,
      canInviteMembers: true,
    },
    tempBoxPolicy: { lifeTime: 7776000000 },
    adminPermissions: ["BILLING_ADMIN", "TECHNICAL_ADMIN", "ROOM_ASSISTANT"],
  },
  statisticsUserStorage: {
    own: 1667042124,
    invited: 56531527,
    maxFileSize: 0,
    maxUserStorage: 0,
    accountUsed: 1902387150,
    isAccountCapped: false,
    bookedAccountStorage: 644245094400,
  },
  statisticsUserInfos: {
    creationDate: "1576844956000",
    lastChanged: "1634733285000",
    lastLogin: "1654317683000",
    creatorUUID: undefined,
    editable: true,
  },
  statisticsUserBox: { countDatarooms: 18, countGuests: 7 },
};

export const mock_user_full = {
  id: "3cnfp",
  userInfos: {
    personalId: null,
    name: "jonobangsat2_12",
    email: "trap@uniscon-obas.de",
    type: UserInfoType.FULL_LICENSE,
    status: UserInfoStatus.ACTIVE,
    dailyNotification: true,
    hourlyNotification: false,
    admin: false,
  },
  userCreation: {
    phoneNumber: null,
    note: null,
    registrationLink: null,
    registrationDate: 1651653906000,
    expirationDate: undefined,
    loginValidation: { forced: false, type: "NONE", value: null },
    registrationValidation: null,
  },
  userPermissions: {
    visibility: "OTHER_FULL_LICENSES",
    accountCreationPolicy: {
      canCreateTempGuest: false,
      canCreateRegularGuest: true,
    },
    boxBasePolicies: {
      canCreateTemporaryBoxes: false,
      canCreatePrivacyBoxes: true,
      canCreateDataRooms: false,
      canInviteMembers: false,
    },
    tempBoxPolicy: { lifeTime: 7776000000 },
    adminPermissions: ["ROOM_ASSISTANT"],
  },
  statisticsUserStorage: {
    own: 235345026,
    invited: 1594766093,
    maxFileSize: 0,
    maxUserStorage: 0,
    accountUsed: null,
    isAccountCapped: null,
    bookedAccountStorage: null,
  },
  statisticsUserInfos: {
    creationDate: 1576846394000,
    lastChanged: 1651653906000,
    lastLogin: 1654317599000,
    creatorUUID: "3cnfl",
    editable: true,
  },
  statisticsUserBox: { countDatarooms: 3, countGuests: null },
};

export const mock_userlist = [
  {
    id: "3cnfl",
    userInfos: {
      personalId: "gandoo",
      name: "Jönö Bängsät",
      email: "trap@uniscon-obas.de",
      type: UserInfoType.FULL_LICENSE,
      status: UserInfoStatus.ACTIVE,
      dailyNotification: false,
      hourlyNotification: false,
      admin: true,
    },
    userCreation: {
      phoneNumber: null,
      note: null,
      registrationLink: null,
      registrationDate: 1576844956000,
      expirationDate: null,
      loginValidation: { forced: false, type: "NONE", value: null },
      registrationValidation: null,
    },
    userPermissions: {
      visibility: "ALL",
      accountCreationPolicy: {
        canCreateTempGuest: true,
        canCreateRegularGuest: true,
      },
      boxBasePolicies: {
        canCreateTemporaryBoxes: true,
        canCreatePrivacyBoxes: true,
        canCreateDataRooms: true,
        canInviteMembers: true,
      },
      tempBoxPolicy: { lifeTime: 7776000000 },
      adminPermissions: ["BILLING_ADMIN", "ROOM_ASSISTANT", "TECHNICAL_ADMIN"],
    },
    statisticsUserStorage: {
      own: 1666849407,
      invited: 56531527,
      maxFileSize: 0,
      maxUserStorage: 0,
      accountUsed: 1902194433,
      isAccountCapped: false,
      bookedAccountStorage: 644245094400,
    },
    statisticsUserInfos: {
      creationDate: 1576844956000,
      lastChanged: 1634733285000,
      lastLogin: 1654405891000,
      creatorUUID: null,
      editable: true,
    },
    statisticsUserBox: { countDatarooms: 18, countGuests: 7 },
  },
  {
    id: "3cnfp",
    userInfos: {
      personalId: null,
      name: "jonobangsat2_12",
      email: "trap@uniscon-obas.de",
      type: UserInfoType.FULL_LICENSE,
      status: UserInfoStatus.ACTIVE,
      dailyNotification: true,
      hourlyNotification: false,
      admin: false,
    },
    userCreation: {
      phoneNumber: null,
      note: null,
      registrationLink: null,
      registrationDate: 1651653906000,
      expirationDate: null,
      loginValidation: { forced: false, type: "NONE", value: null },
      registrationValidation: null,
    },
    userPermissions: {
      visibility: "OTHER_FULL_LICENSES",
      accountCreationPolicy: {
        canCreateTempGuest: false,
        canCreateRegularGuest: true,
      },
      boxBasePolicies: {
        canCreateTemporaryBoxes: false,
        canCreatePrivacyBoxes: true,
        canCreateDataRooms: false,
        canInviteMembers: false,
      },
      tempBoxPolicy: { lifeTime: 7776000000 },
      adminPermissions: ["ROOM_ASSISTANT"],
    },
    statisticsUserStorage: {
      own: 235345026,
      invited: 1594766093,
      maxFileSize: 0,
      maxUserStorage: 0,
      accountUsed: 1902194433,
      isAccountCapped: false,
      bookedAccountStorage: 644245094400,
    },
    statisticsUserInfos: {
      creationDate: 1576846394000,
      lastChanged: 1651653906000,
      lastLogin: 1654345201000,
      creatorUUID: "3cnfl",
      editable: true,
    },
    statisticsUserBox: { countDatarooms: 3, countGuests: null },
  },
  {
    id: "3cnfq",
    userInfos: {
      personalId: "gandaa gandii ganduu gandee",
      name: "jonobangsat2_g1",
      email: "trap@uniscon-obas.de",
      type: UserInfoType.GUEST_LICENSE,
      status: UserInfoStatus.ACTIVE,
      dailyNotification: true,
      hourlyNotification: true,
      admin: false,
    },
    userCreation: {
      phoneNumber: null,
      note: null,
      registrationLink: null,
      registrationDate: 1576846455000,
      expirationDate: null,
      loginValidation: { forced: false, type: "NONE", value: null },
      registrationValidation: null,
    },
    userPermissions: {
      visibility: "NONE",
      accountCreationPolicy: {
        canCreateTempGuest: false,
        canCreateRegularGuest: false,
      },
      boxBasePolicies: {
        canCreateTemporaryBoxes: false,
        canCreatePrivacyBoxes: false,
        canCreateDataRooms: false,
        canInviteMembers: false,
      },
      tempBoxPolicy: { lifeTime: 0 },
      adminPermissions: [],
    },
    statisticsUserStorage: {
      own: 0,
      invited: 0,
      maxFileSize: 0,
      maxUserStorage: 0,
      accountUsed: 1902194433,
      isAccountCapped: false,
      bookedAccountStorage: 644245094400,
    },
    statisticsUserInfos: {
      creationDate: 1576846443000,
      lastChanged: 1631690991000,
      lastLogin: 1654330004000,
      creatorUUID: "3cnfl",
      editable: true,
    },
    statisticsUserBox: null,
  },
  {
    id: "3csgm",
    userInfos: {
      personalId: "gandii",
      name: "jonobangsat2_2",
      email: "trap@uniscon-obas.de",
      type: UserInfoType.FULL_LICENSE,
      status: UserInfoStatus.ACTIVE,
      dailyNotification: false,
      hourlyNotification: false,
      admin: true,
    },
    userCreation: {
      phoneNumber: null,
      note: null,
      registrationLink: null,
      registrationDate: 1620039255000,
      expirationDate: null,
      loginValidation: { forced: false, type: "NONE", value: null },
      registrationValidation: null,
    },
    userPermissions: {
      visibility: "ALL",
      accountCreationPolicy: {
        canCreateTempGuest: true,
        canCreateRegularGuest: true,
      },
      boxBasePolicies: {
        canCreateTemporaryBoxes: true,
        canCreatePrivacyBoxes: true,
        canCreateDataRooms: true,
        canInviteMembers: true,
      },
      tempBoxPolicy: { lifeTime: 7776000000 },
      adminPermissions: ["TECHNICAL_ADMIN"],
    },
    statisticsUserStorage: {
      own: 0,
      invited: 20132067,
      maxFileSize: 0,
      maxUserStorage: 0,
      accountUsed: 1902194433,
      isAccountCapped: false,
      bookedAccountStorage: 644245094400,
    },
    statisticsUserInfos: {
      creationDate: 1582896120000,
      lastChanged: 1630312983000,
      lastLogin: 1620039262000,
      creatorUUID: "3cnfl",
      editable: true,
    },
    statisticsUserBox: null,
  },
  {
    id: "3esu4",
    userInfos: {
      personalId: null,
      name: "xcx",
      email: "cccxx@xxxxx",
      type: UserInfoType.GUEST_LICENSE,
      status: "INITIATED",
      dailyNotification: false,
      hourlyNotification: false,
      admin: false,
    },
    userCreation: {
      phoneNumber: null,
      note: null,
      registrationLink:
        "https://my-shaun.idgard.de/#/register-user?b=7d6cf81414254a15afc5f508b02edaf9",
      registrationDate: null,
      expirationDate: null,
      loginValidation: { forced: false, type: "NONE", value: null },
      registrationValidation: { type: "NONE", value: null },
    },
    userPermissions: {
      visibility: "NONE",
      accountCreationPolicy: {
        canCreateTempGuest: false,
        canCreateRegularGuest: false,
      },
      boxBasePolicies: {
        canCreateTemporaryBoxes: false,
        canCreatePrivacyBoxes: false,
        canCreateDataRooms: false,
        canInviteMembers: false,
      },
      tempBoxPolicy: { lifeTime: 0 },
      adminPermissions: [],
    },
    statisticsUserStorage: {
      own: 0,
      invited: 0,
      maxFileSize: 0,
      maxUserStorage: 0,
      accountUsed: 1902194433,
      isAccountCapped: false,
      bookedAccountStorage: 644245094400,
    },
    statisticsUserInfos: {
      creationDate: 1631709947000,
      lastChanged: 1641807036000,
      lastLogin: null,
      creatorUUID: "3cnfl",
      editable: true,
    },
    statisticsUserBox: null,
  },
  {
    id: "3eszk",
    userInfos: {
      personalId: null,
      name: "testuser",
      email: "asd@asd.com",
      type: UserInfoType.FULL_LICENSE,
      status: "INITIATED",
      dailyNotification: false,
      hourlyNotification: false,
      admin: false,
    },
    userCreation: {
      phoneNumber: null,
      note: null,
      registrationLink:
        "https://my-shaun.idgard.de/#/register-user?b=30c46ff5668a46899372ab0821d50eba",
      registrationDate: null,
      expirationDate: null,
      loginValidation: { forced: false, type: "NONE", value: null },
      registrationValidation: { type: "NONE", value: null },
    },
    userPermissions: {
      visibility: "OTHER_FULL_LICENSES",
      accountCreationPolicy: {
        canCreateTempGuest: false,
        canCreateRegularGuest: false,
      },
      boxBasePolicies: {
        canCreateTemporaryBoxes: true,
        canCreatePrivacyBoxes: true,
        canCreateDataRooms: true,
        canInviteMembers: true,
      },
      tempBoxPolicy: { lifeTime: 7776000000 },
      adminPermissions: [],
    },
    statisticsUserStorage: {
      own: 0,
      invited: 0,
      maxFileSize: 0,
      maxUserStorage: 0,
      accountUsed: 1902194433,
      isAccountCapped: false,
      bookedAccountStorage: 644245094400,
    },
    statisticsUserInfos: {
      creationDate: 1637313148000,
      lastChanged: null,
      lastLogin: null,
      creatorUUID: "3cnfl",
      editable: true,
    },
    statisticsUserBox: null,
  },
  {
    id: "3et5m",
    userInfos: {
      personalId: null,
      name: "gandoo",
      email: "gandoo@asd.com",
      type: UserInfoType.FULL_LICENSE,
      status: "INITIATED",
      dailyNotification: false,
      hourlyNotification: false,
      admin: false,
    },
    userCreation: {
      phoneNumber: "017684191575",
      note: null,
      registrationLink:
        "https://my-shaun.idgard.de/#/register-user?b=d700bdc00b504125860ca2d67158c0f1",
      registrationDate: null,
      expirationDate: null,
      loginValidation: {
        forced: false,
        type: "PASSCODE",
        value: "017684191575",
      },
      registrationValidation: { type: "PASSCODE", value: "12323" },
    },
    userPermissions: {
      visibility: "OTHER_FULL_LICENSES",
      accountCreationPolicy: {
        canCreateTempGuest: false,
        canCreateRegularGuest: false,
      },
      boxBasePolicies: {
        canCreateTemporaryBoxes: true,
        canCreatePrivacyBoxes: true,
        canCreateDataRooms: true,
        canInviteMembers: true,
      },
      tempBoxPolicy: { lifeTime: 7776000000 },
      adminPermissions: [],
    },
    statisticsUserStorage: {
      own: 0,
      invited: 0,
      maxFileSize: 0,
      maxUserStorage: 0,
      accountUsed: 1902194433,
      isAccountCapped: false,
      bookedAccountStorage: 644245094400,
    },
    statisticsUserInfos: {
      creationDate: 1645450819000,
      lastChanged: null,
      lastLogin: null,
      creatorUUID: "3cnfl",
      editable: true,
    },
    statisticsUserBox: null,
  },
  {
    id: "3et5o",
    userInfos: {
      personalId: null,
      name: "asdasd",
      email: "asd@yxc.yxc",
      type: UserInfoType.FULL_LICENSE,
      status: "INITIATED",
      dailyNotification: false,
      hourlyNotification: false,
      admin: false,
    },
    userCreation: {
      phoneNumber: "04323123123",
      note: null,
      registrationLink:
        "https://my-shaun.idgard.de/#/register-user?b=c53ce671c5184c37906ae8a5828d4148",
      registrationDate: null,
      expirationDate: null,
      loginValidation: { forced: false, type: "NONE", value: null },
      registrationValidation: { type: "PASSCODE", value: "12323" },
    },
    userPermissions: {
      visibility: "OTHER_FULL_LICENSES",
      accountCreationPolicy: {
        canCreateTempGuest: false,
        canCreateRegularGuest: false,
      },
      boxBasePolicies: {
        canCreateTemporaryBoxes: true,
        canCreatePrivacyBoxes: true,
        canCreateDataRooms: true,
        canInviteMembers: true,
      },
      tempBoxPolicy: { lifeTime: 7776000000 },
      adminPermissions: [],
    },
    statisticsUserStorage: {
      own: 0,
      invited: 0,
      maxFileSize: 0,
      maxUserStorage: 0,
      accountUsed: 1902194433,
      isAccountCapped: false,
      bookedAccountStorage: 644245094400,
    },
    statisticsUserInfos: {
      creationDate: 1645451178000,
      lastChanged: 1645451377000,
      lastLogin: null,
      creatorUUID: "3cnfl",
      editable: true,
    },
    statisticsUserBox: null,
  },
];