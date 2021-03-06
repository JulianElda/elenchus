import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BoxSettingsType } from "types";

import {
  checkbox_style,
  input_label_style,
  input_style,
  h3_style,
} from "const/styles";

export function EnterpriseBox(props: BoxSettingsType) {
  const { register, handleSubmit } = useForm();

  const [forceBoxPasscode, setForceBoxPasscode] = useState<boolean>(
    props.forceBoxPasscode || false
  );

  const [showFirstVisit, setShowFirstVisit] = useState<boolean>(
    props.showFirstVisit || false
  );
  const [showLastVisit, setShowLastVisit] = useState<boolean>(
    props.showLastVisit || false
  );

  const [quarantinePolicy, setQuarantinePolicy] = useState<number>(
    props.quarantinePolicy?.minDays || 0
  );
  const [tempBoxesPolicy, setTempBoxesPolicy] = useState<number>(
    (props.tempBoxesPolicy?.lifeTime || 0) / 86400000
  );

  const [canCreatePrivacyBoxes, setCanCreatePrivacyBoxes] = useState<boolean>(
    props.boxBasePolicies?.canCreatePrivacyBoxes || false
  );
  const [canCreateDataRooms, setCanCreateDataRooms] = useState<boolean>(
    props.boxBasePolicies?.canCreateDataRooms || false
  );
  const [canCreateTemporaryBoxes, setCanCreateTemporaryBoxes] =
    useState<boolean>(props.boxBasePolicies?.canCreateTemporaryBoxes || false);
  const [canInviteMembers, setCanInviteMembers] = useState<boolean>(
    props.boxBasePolicies?.canInviteMembers || false
  );

  const onSubmit = function () {};

  return (
    <React.StrictMode>
      <div className="md:shadow rounded bg-white p-4 my-4">
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className={h3_style}>Box settings</h3>

            <div className="mb-1">
              <input
                type="checkbox"
                className={checkbox_style}
                id="cancreateprivacy-input"
                checked={canCreatePrivacyBoxes}
                onChange={(e) => {
                  setCanCreatePrivacyBoxes(e.target.checked);
                }}
              />
              <label
                htmlFor="cancreateprivacy-input"
                className={input_label_style}>
                Can create privacy box
              </label>
            </div>

            <div className="mb-1">
              <input
                type="checkbox"
                className={checkbox_style}
                id="cancreatedataroom-input"
                checked={canCreateDataRooms}
                onChange={(e) => {
                  setCanCreateDataRooms(e.target.checked);
                }}
              />
              <label
                htmlFor="cancreatedataroom-input"
                className={input_label_style}>
                Can create data room
              </label>
            </div>

            <div className="mb-1">
              <input
                type="checkbox"
                className={checkbox_style}
                id="cancreatetempbox-input"
                checked={canCreateTemporaryBoxes}
                onChange={(e) => {
                  setCanCreateTemporaryBoxes(e.target.checked);
                }}
              />
              <label
                htmlFor="cancreatetempbox-input"
                className={input_label_style}>
                Can create temporary box
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

            <div className="mb-1">
              <input
                type="checkbox"
                className={checkbox_style}
                id="firstvisit-input"
                checked={showFirstVisit}
                onChange={(e) => {
                  setShowFirstVisit(e.target.checked);
                }}
              />
              <label htmlFor="firstvisit-input" className={input_label_style}>
                Show first visit
              </label>
            </div>

            <div className="mb-1">
              <input
                type="checkbox"
                className={checkbox_style}
                id="lastvisit-input"
                checked={showLastVisit}
                onChange={(e) => {
                  setShowLastVisit(e.target.checked);
                }}
              />
              <label htmlFor="lastvisit-input" className={input_label_style}>
                Show last visit
              </label>
            </div>

            <div className="mb-1">
              <input
                type="checkbox"
                className={checkbox_style}
                id="forcepasscode-input"
                checked={forceBoxPasscode}
                onChange={(e) => {
                  setForceBoxPasscode(e.target.checked);
                }}
              />
              <label
                htmlFor="forcepasscode-input"
                className={input_label_style}>
                Force box passcode
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="quarantine-input" className={input_label_style}>
                Quarantine policy
              </label>
              <input
                type="number"
                className={input_style}
                id="quarantine-input"
                value={quarantinePolicy}
                {...register("quarantine", {
                  min: 0,
                  max: 99999,
                })}
                onChange={(e) => {
                  setQuarantinePolicy(parseInt(e.target.value));
                }}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="tempboxlifetime-input"
                className={input_label_style}>
                Temp box policy
              </label>
              <input
                type="number"
                className={input_style}
                id="tempboxlifetime-input"
                value={tempBoxesPolicy}
                {...register("tempboxlifetime", {
                  min: 1,
                  max: 90,
                })}
                onChange={(e) => {
                  setTempBoxesPolicy(parseInt(e.target.value));
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </React.StrictMode>
  );
}
