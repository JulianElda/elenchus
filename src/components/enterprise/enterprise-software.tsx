import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { SoftwareSettingsType } from "types";
import { LoginValidationTypes } from "types/user";

import {
  checkbox_style,
  input_label_style,
  input_style,
  h3_style,
} from "const/styles";

export function EnterpriseSoftware(props: SoftwareSettingsType) {
  const { handleSubmit } = useForm();

  const [enableInvitationTemplate, setEnableInvitationTemplate] =
    useState<boolean>(props.enableInvitationTemplate || false);
  const [forceCertificateCheck, setForceCertificateCheck] = useState<boolean>(
    props.forceCertificateCheck || false
  );
  const [forceServerSendInvitation, setForceServerSendInvitation] =
    useState<boolean>(props.forceServerSendInvitation || false);

  const [forceSecFacAuth, setForceSecFacAuth] = useState<boolean>(
    props.forceSecFacAuth || false
  );
  const [forceSecFacInvitation, setForceSecFacInvitation] = useState<boolean>(
    props.forceSecFacInvitation || false
  );
  const [defaultAuthType, setDefaultAuthType] = useState<string>(
    props.defaultAuthType || LoginValidationTypes.NONE
  );

  const onSubmit = function () {};

  return (
    <React.StrictMode>
      <div className="md:shadow rounded bg-white p-4 my-4">
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className={h3_style}>Software settings</h3>

            <div className="mb-1">
              <input
                type="checkbox"
                className={checkbox_style}
                id="invitationtemplate-input"
                checked={enableInvitationTemplate}
                onChange={(e) => {
                  setEnableInvitationTemplate(e.target.checked);
                }}
              />
              <label
                htmlFor="invitationtemplate-input"
                className={input_label_style}>
                Invitation template
              </label>
            </div>

            <div className="mb-1">
              <input
                type="checkbox"
                className={checkbox_style}
                id="certificatecheck-input"
                checked={forceCertificateCheck}
                onChange={(e) => {
                  setForceCertificateCheck(e.target.checked);
                }}
              />
              <label
                htmlFor="certificatecheck-input"
                className={input_label_style}>
                Certificate check
              </label>
            </div>

            <div className="mb-1">
              <input
                type="checkbox"
                className={checkbox_style}
                id="serversideinvitation-input"
                checked={forceServerSendInvitation}
                onChange={(e) => {
                  setForceServerSendInvitation(e.target.checked);
                }}
              />
              <label
                htmlFor="serversideinvitation-input"
                className={input_label_style}>
                Server side invitation
              </label>
            </div>

            <div className="mb-1">
              <input
                type="checkbox"
                className={checkbox_style}
                id="force2falogin-input"
                checked={forceSecFacAuth}
                onChange={(e) => {
                  setForceSecFacAuth(e.target.checked);
                }}
              />
              <label
                htmlFor="force2falogin-input"
                className={input_label_style}>
                2fa login enforce
              </label>
            </div>

            <div className="mb-1">
              <input
                type="checkbox"
                className={checkbox_style}
                id="force2falogin-input"
                checked={forceSecFacInvitation}
                onChange={(e) => {
                  setForceSecFacInvitation(e.target.checked);
                }}
              />
              <label
                htmlFor="force2falogin-input"
                className={input_label_style}>
                2fa registration enforce
              </label>
            </div>

            <div className="mb-3">
              <label
                htmlFor="defaultauthtype-input"
                className={input_label_style}>
                Type
              </label>
              <select
                className={input_style}
                value={defaultAuthType}
                id="defaultauthtype-input"
                onChange={(e) => {
                  setDefaultAuthType(e.target.value);
                }}>
                <option value={LoginValidationTypes.NONE}>None</option>
                <option value={LoginValidationTypes.DUO}>DUO</option>
                <option value={LoginValidationTypes.LOGINCARD}>
                  Login card
                </option>
                <option value={LoginValidationTypes.PASSCODE}>Passcode</option>
                <option value={LoginValidationTypes.TOTP}>TOTP</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </React.StrictMode>
  );
}
