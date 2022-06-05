import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { SoftwareSettings } from "types";
import { LoginValidationTypeOrNone } from "types/LoginValidationTypeOrNone";

export default function EnterpriseSoftware(props: SoftwareSettings) {
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
    props.defaultAuthType || LoginValidationTypeOrNone.NONE
  );

  const onSubmit = function () {};

  return (
    <React.StrictMode>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Software settings</h3>

            <div className="mb-1">
              <input
                type="checkbox"
                className="form-check-input me-2"
                id="invitationtemplate-input"
                checked={enableInvitationTemplate}
                onChange={(e) => {
                  setEnableInvitationTemplate(e.target.checked);
                }}
              />
              <label htmlFor="invitationtemplate-input" className="form-label">
                Invitation template
              </label>
            </div>

            <div className="mb-1">
              <input
                type="checkbox"
                className="form-check-input me-2"
                id="certificatecheck-input"
                checked={forceCertificateCheck}
                onChange={(e) => {
                  setForceCertificateCheck(e.target.checked);
                }}
              />
              <label htmlFor="certificatecheck-input" className="form-label">
                Certificate check
              </label>
            </div>

            <div className="mb-1">
              <input
                type="checkbox"
                className="form-check-input me-2"
                id="serversideinvitation-input"
                checked={forceServerSendInvitation}
                onChange={(e) => {
                  setForceServerSendInvitation(e.target.checked);
                }}
              />
              <label
                htmlFor="serversideinvitation-input"
                className="form-label">
                Server side invitation
              </label>
            </div>

            <div className="mb-1">
              <input
                type="checkbox"
                className="form-check-input me-2"
                id="force2falogin-input"
                checked={forceSecFacAuth}
                onChange={(e) => {
                  setForceSecFacAuth(e.target.checked);
                }}
              />
              <label htmlFor="force2falogin-input" className="form-label">
                2fa login enforce
              </label>
            </div>

            <div className="mb-1">
              <input
                type="checkbox"
                className="form-check-input me-2"
                id="force2falogin-input"
                checked={forceSecFacInvitation}
                onChange={(e) => {
                  setForceSecFacInvitation(e.target.checked);
                }}
              />
              <label htmlFor="force2falogin-input" className="form-label">
                2fa registration enforce
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="defaultauthtype-input" className="form-label">
                Type
              </label>
              <select
                className="form-select"
                value={defaultAuthType}
                id="defaultauthtype-input"
                onChange={(e) => {
                  setDefaultAuthType(e.target.value);
                }}>
                <option value={LoginValidationTypeOrNone.NONE}>None</option>
                <option value={LoginValidationTypeOrNone.DUO}>DUO</option>
                <option value={LoginValidationTypeOrNone.LOGINCARD}>
                  Login card
                </option>
                <option value={LoginValidationTypeOrNone.PASSCODE}>
                  Passcode
                </option>
                <option value={LoginValidationTypeOrNone.TOTP}>TOTP</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </React.StrictMode>
  );
}
