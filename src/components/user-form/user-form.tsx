import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { AdminTypes, UserType } from "types";
import { LoginValidationTypeOrNone } from "idg-types/LoginValidationTypeOrNone";
import { RegistrationValidationType } from "idg-types/RegistrationValidationType";
import { UserInfos } from "idg-types/UserInfos";
import { UserPermissions } from "idg-types/UserPermissions";

import { UserFormStatistics } from "components/user-form";

import {
  checkbox_style,
  input_label_style,
  input_style,
  h3_style,
  h4_style,
} from "const/styles";

type UserFormProps = {
  user: UserType;
};

export function UserForm(props: UserFormProps) {
  const { register, handleSubmit } = useForm();

  //* User infos */
  const [name, setName] = useState<string>(props.user.userInfos?.name || "");
  const [email, setEmail] = useState<string>(props.user.userInfos?.email || "");
  const [personalId, setPersonalId] = useState<string>(
    props.user.userInfos?.personalId || ""
  );
  const [type, setType] = useState<string>(props.user.userInfos?.type || "");
  const [status, setStatus] = useState<string>(
    props.user.userInfos?.status || ""
  );
  const [hourlyNotification, setHourlyNotification] = useState<boolean>(
    props.user.userInfos?.hourlyNotification || false
  );
  const [dailyNotification, setDailyNotification] = useState<boolean>(
    props.user.userInfos?.dailyNotification || false
  );

  //* User permissions */
  const [visibility, setVisibility] = useState<string>(
    props.user.userPermissions?.visibility || ""
  );
  const [temporaryBoxLifeTime, setTemporaryBoxLifeTime] = useState<number>(
    (props.user.userPermissions?.tempBoxPolicy?.lifeTime || 0) / 86400000
  );

  //* AccountCreationPolicy */
  const [canCreateRegularGuest, setCanCreateRegularGuest] = useState<boolean>(
    props.user.userPermissions?.accountCreationPolicy?.canCreateRegularGuest ||
      false
  );
  const [canCreateTempGuest, setCanCreateTempGuest] = useState<boolean>(
    props.user.userPermissions?.accountCreationPolicy?.canCreateTempGuest ||
      false
  );

  //* BoxBasePolicies */
  const [canCreatePrivacyBoxes, setCanCreatePrivacyBoxes] = useState<boolean>(
    props.user.userPermissions?.boxBasePolicies?.canCreatePrivacyBoxes || false
  );
  const [canCreateDataRooms, setCanCreateDataRooms] = useState<boolean>(
    props.user.userPermissions?.boxBasePolicies?.canCreateDataRooms || false
  );
  const [canCreateTemporaryBoxes, setCanCreateTemporaryBoxes] =
    useState<boolean>(
      props.user.userPermissions?.boxBasePolicies?.canCreateTemporaryBoxes ||
        false
    );
  const [canInviteMembers, setCanInviteMembers] = useState<boolean>(
    props.user.userPermissions?.boxBasePolicies?.canInviteMembers || false
  );

  //* AccountVisibility */
  const [technicalAdmin, setTechnicalAdmin] = useState<boolean>(
    (props.user.userPermissions?.adminPermissions || []).includes(
      AdminTypes.TECHNICAL_ADMIN
    )
  );
  const [billingAdmin, setBillingAdmin] = useState<boolean>(
    (props.user.userPermissions?.adminPermissions || []).includes(
      AdminTypes.BILLING_ADMIN
    )
  );
  const [roomAssistant, setRoomAssistant] = useState<boolean>(
    (props.user.userPermissions?.adminPermissions || []).includes(
      AdminTypes.ROOM_ASSISTANT
    )
  );

  //* UserCreation */
  const [expirationDate, setExpirationDate] = useState<string>(
    props.user.userCreation?.expirationDate || ""
  );
  const [note, setNote] = useState<string>(props.user.userCreation?.note || "");
  const [phoneNumber, setPhoneNumber] = useState<string>(
    props.user.userCreation?.phoneNumber || ""
  );
  const [registrationDate] = useState<string>(
    props.user.userCreation?.registrationDate || ""
  );
  const [registrationLink] = useState<string>(
    props.user.userCreation?.registrationLink || ""
  );

  //* LoginValidation */
  const [loginValidationForced, setLoginValidationForced] = useState<boolean>(
    props.user.userCreation?.loginValidation?.forced || false
  );
  const [loginValidationType, setLoginValidationType] = useState<string>(
    props.user.userCreation?.loginValidation?.type || ""
  );

  //* RegistrationValidation */
  const [registrationValidationValue, setRegistrationValidationValue] =
    useState<string>(
      props.user.userCreation?.registrationValidation?.value || ""
    );
  const [registrationValidationType, setRegistrationValidationType] =
    useState<string>(
      props.user.userCreation?.registrationValidation?.type || ""
    );

  const onSubmit = function () {};

  return (
    <React.StrictMode>
      <div className="md:shadow rounded bg-white p-4 my-4">
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-3 md:space-x-8">
              <div className="col-span-3 md:col-span-1">
                <h3 className={h3_style}>User Info</h3>
                <div className="mb-3">
                  <label htmlFor="name-input" className={input_label_style}>
                    Name
                  </label>
                  <input
                    type="text"
                    className={input_style}
                    id="name-input"
                    value={name}
                    {...register("name", {
                      required: true,
                      minLength: 6,
                      maxLength: 128,
                    })}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email-input" className={input_label_style}>
                    Email
                  </label>
                  <input
                    type="email"
                    className={input_style}
                    id="email-input"
                    value={email}
                    {...register("email", {
                      required: true,
                      minLength: 6,
                      maxLength: 128,
                    })}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="personalid-input"
                    className={input_label_style}>
                    Personal ID
                  </label>
                  <input
                    type="text"
                    className={input_style}
                    id="personalid-input"
                    value={personalId}
                    {...register("personalid", {
                      required: true,
                      minLength: 6,
                      maxLength: 128,
                    })}
                    onChange={(e) => {
                      setPersonalId(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="type-input" className={input_label_style}>
                    License type
                  </label>
                  <select
                    className={input_style}
                    value={type}
                    {...register("type", {
                      required: true,
                    })}
                    id="type-input"
                    onChange={(e) => {
                      setType(e.target.value);
                    }}>
                    <option value={UserInfos.type.FULL_LICENSE}>
                      Full license
                    </option>
                    <option value={UserInfos.type.GUEST_LICENSE}>
                      Guest license
                    </option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="status-input" className={input_label_style}>
                    Status
                  </label>
                  <select
                    className={input_style}
                    value={status}
                    {...register("status", {
                      required: true,
                    })}
                    id="status-input"
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}>
                    <option value={UserInfos.status.ACTIVE}>Active</option>
                    <option value={UserInfos.status.DISABLED}>Disabled</option>
                    <option value={UserInfos.status.INITIATED}>
                      Initiated
                    </option>
                  </select>
                </div>

                <div className="mb-1">
                  <input
                    type="checkbox"
                    className={checkbox_style}
                    id="hourlynotification-input"
                    checked={hourlyNotification}
                    onChange={(e) => {
                      setHourlyNotification(e.target.checked);
                    }}
                  />
                  <label
                    htmlFor="hourlynotification-input"
                    className={input_label_style}>
                    Hourly notification
                  </label>
                </div>

                <div className="mb-3">
                  <input
                    type="checkbox"
                    className={checkbox_style}
                    id="dailynotification-input"
                    checked={dailyNotification}
                    onChange={(e) => {
                      setDailyNotification(e.target.checked);
                    }}
                  />
                  <label
                    htmlFor="dailynotification-input"
                    className={input_label_style}>
                    Daily notification
                  </label>
                </div>
              </div>
              <div className="col-span-3 md:col-span-1">
                <h3 className={h3_style}>User creation</h3>
                <div className="mb-3">
                  <label
                    htmlFor="expirationdate-input"
                    className={input_label_style}>
                    Expiration date
                  </label>
                  <input
                    type="text"
                    className={input_style}
                    id="expirationdate-input"
                    value={expirationDate}
                    onChange={(e) => {
                      setExpirationDate(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="note-input" className={input_label_style}>
                    Note
                  </label>
                  <input
                    type="text"
                    className={input_style}
                    id="note-input"
                    value={note}
                    onChange={(e) => {
                      setNote(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="phonenumber-input"
                    className={input_label_style}>
                    Phone number
                  </label>
                  <input
                    type="text"
                    className={input_style}
                    id="phonenumber-input"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="registrationdate-input"
                    className={input_label_style}>
                    Registration date
                  </label>
                  <input
                    type="text"
                    readOnly
                    className={input_style}
                    id="registrationdate-input"
                    value={registrationDate}
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="registrationlink-input"
                    className={input_label_style}>
                    Registration link
                  </label>
                  <input
                    type="text"
                    readOnly
                    className={input_style}
                    id="registrationlink-input"
                    value={registrationLink}
                  />
                </div>
                <h4 className={h4_style}>Login validation</h4>
                <div className="mb-3">
                  <label
                    htmlFor="loginvalidationtype-input"
                    className={input_label_style}>
                    2fa login type
                  </label>
                  <select
                    className={input_style}
                    value={loginValidationType}
                    id="loginvalidationtype-input"
                    onChange={(e) => {
                      setLoginValidationType(e.target.value);
                    }}>
                    <option value={LoginValidationTypeOrNone.NONE}>None</option>
                    <option value={LoginValidationTypeOrNone.PASSCODE}>
                      Passcode
                    </option>
                    <option value={LoginValidationTypeOrNone.LOGINCARD}>
                      Login card
                    </option>
                    <option value={LoginValidationTypeOrNone.DUO}>DUO</option>
                    <option value={LoginValidationTypeOrNone.TOTP}>TOTP</option>
                  </select>
                </div>
                <div className="mb-3">
                  <input
                    type="checkbox"
                    className={checkbox_style}
                    id="loginvalidationforced-input"
                    checked={loginValidationForced}
                    onChange={(e) => {
                      setLoginValidationForced(e.target.checked);
                    }}
                  />
                  <label
                    htmlFor="loginvalidationforced-input"
                    className={input_label_style}>
                    Forced
                  </label>
                </div>
                <h4 className={h4_style}>Registration validation</h4>
                <div className="mb-3">
                  <label
                    htmlFor="registrationvalidationtype-input"
                    className={input_label_style}>
                    2fa registration type
                  </label>
                  <select
                    className={input_style}
                    value={registrationValidationType}
                    id="registrationvalidationtype-input"
                    onChange={(e) => {
                      setRegistrationValidationType(e.target.value);
                    }}>
                    <option value={RegistrationValidationType.NONE}>
                      None
                    </option>
                    <option value={RegistrationValidationType.PASSCODE}>
                      Passcode
                    </option>
                    <option value={RegistrationValidationType.LOGINCARD}>
                      Login card
                    </option>
                  </select>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="registrationvalidationforced-input"
                    className={input_label_style}>
                    Value
                  </label>
                  <input
                    type="text"
                    className={input_style}
                    id="registrationvalidationforced-input"
                    value={registrationValidationValue}
                    onChange={(e) => {
                      setRegistrationValidationValue(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-span-3 md:col-span-1">
                <h3 className={h3_style}>User permissions</h3>
                <div className="mb-3">
                  <label
                    htmlFor="visibility-input"
                    className={input_label_style}>
                    Visibility
                  </label>
                  <select
                    className={input_style}
                    value={visibility}
                    {...register("visibility", {
                      required: true,
                    })}
                    id="visibility-input"
                    onChange={(e) => {
                      setVisibility(e.target.value);
                    }}>
                    <option value={UserPermissions.visibility.ALL}>All</option>
                    <option
                      value={UserPermissions.visibility.OTHER_FULL_LICENSES}>
                      Other full licenses
                    </option>
                    <option value={UserPermissions.visibility.OWN_INVITED}>
                      Own invited
                    </option>
                    <option value={UserPermissions.visibility.NONE}>
                      None
                    </option>
                  </select>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="temporaryboxlifetime-input"
                    className={input_label_style}>
                    Temporary box lifetime
                  </label>
                  <input
                    type="number"
                    className={input_style}
                    id="temporaryboxlifetime-input"
                    value={temporaryBoxLifeTime}
                    {...register("temporaryboxlifetime", {
                      required: true,
                      minLength: 6,
                      maxLength: 128,
                    })}
                    onChange={(e) => {
                      setTemporaryBoxLifeTime(parseInt(e.target.value));
                    }}
                  />
                </div>
                <h4 className={h4_style}>Account creation policy</h4>
                <div className="mb-1">
                  <input
                    type="checkbox"
                    className={checkbox_style}
                    id="cancreateregularguest-input"
                    checked={canCreateRegularGuest}
                    onChange={(e) => {
                      setCanCreateRegularGuest(e.target.checked);
                    }}
                  />
                  <label
                    htmlFor="cancreateregularguest-input"
                    className={input_label_style}>
                    Can create regular guest
                  </label>
                </div>

                <div className="mb-1">
                  <input
                    type="checkbox"
                    className={checkbox_style}
                    id="cancreatetempguest-input"
                    checked={canCreateTempGuest}
                    onChange={(e) => {
                      setCanCreateTempGuest(e.target.checked);
                    }}
                  />
                  <label
                    htmlFor="cancreatetempguest-input"
                    className={input_label_style}>
                    Can create temporary guest
                  </label>
                </div>

                <h4 className={h4_style}>Box base policies</h4>

                <div className="mb-1">
                  <input
                    type="checkbox"
                    className={checkbox_style}
                    id="cancreateprivacyboxes-input"
                    checked={canCreatePrivacyBoxes}
                    onChange={(e) => {
                      setCanCreatePrivacyBoxes(e.target.checked);
                    }}
                  />
                  <label
                    htmlFor="cancreateprivacyboxes-input"
                    className={input_label_style}>
                    Can create privacy boxes
                  </label>
                </div>

                <div className="mb-1">
                  <input
                    type="checkbox"
                    className={checkbox_style}
                    id="cancreatedatarooms-input"
                    checked={canCreateDataRooms}
                    onChange={(e) => {
                      setCanCreateDataRooms(e.target.checked);
                    }}
                  />
                  <label
                    htmlFor="cancreatedatarooms-input"
                    className={input_label_style}>
                    Can create data rooms
                  </label>
                </div>

                <div className="mb-1">
                  <input
                    type="checkbox"
                    className={checkbox_style}
                    id="cancreatetemporaryboxes-input"
                    checked={canCreateTemporaryBoxes}
                    onChange={(e) => {
                      setCanCreateTemporaryBoxes(e.target.checked);
                    }}
                  />
                  <label
                    htmlFor="cancreatetemporaryboxes-input"
                    className={input_label_style}>
                    Can create temporary boxes
                  </label>
                </div>

                <div className="mb-1">
                  <input
                    type="checkbox"
                    className={checkbox_style}
                    id="caninvitemembers-input"
                    checked={canInviteMembers}
                    onChange={(e) => {
                      setCanInviteMembers(e.target.checked);
                    }}
                  />
                  <label
                    htmlFor="caninvitemembers-input"
                    className={input_label_style}>
                    Can invite members
                  </label>
                </div>

                <h4 className={h4_style}>Admin permissions</h4>
                <div className="mb-1">
                  <input
                    type="checkbox"
                    className={checkbox_style}
                    id="technicaladmin-input"
                    checked={technicalAdmin}
                    onChange={(e) => {
                      setTechnicalAdmin(e.target.checked);
                    }}
                  />
                  <label
                    htmlFor="technicaladmin-input"
                    className={input_label_style}>
                    Technical admin
                  </label>
                </div>

                <div className="mb-1">
                  <input
                    type="checkbox"
                    className={checkbox_style}
                    id="billingadmin-input"
                    checked={billingAdmin}
                    onChange={(e) => {
                      setBillingAdmin(e.target.checked);
                    }}
                  />
                  <label
                    htmlFor="billingadmin-input"
                    className={input_label_style}>
                    Billing admin
                  </label>
                </div>

                <div className="mb-1">
                  <input
                    type="checkbox"
                    className={checkbox_style}
                    id="roomassistant-input"
                    checked={roomAssistant}
                    onChange={(e) => {
                      setRoomAssistant(e.target.checked);
                    }}
                  />
                  <label
                    htmlFor="roomassistant-input"
                    className={input_label_style}>
                    Room assistant
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <UserFormStatistics user={props.user} />
    </React.StrictMode>
  );
}
