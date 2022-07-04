import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { PasswordPolicyType } from "types";

import {
  checkbox_style,
  input_label_style,
  input_style,
  h3_style,
} from "const/styles";

export function EnterprisePassword(props: PasswordPolicyType) {
  const { register, handleSubmit } = useForm();

  const [changeInterval, setChangeInterval] = useState<number>(
    props.changeInterval || 0
  );
  const [digit, setDigit] = useState<boolean>(props.digit || false);
  const [forceChange, setForceChange] = useState<boolean>(
    props.forceChange || false
  );
  const [forceLengthForCreated, setForceLengthForCreated] = useState<boolean>(
    props.forceLengthForCreated || false
  );
  const [minLength, setMinLength] = useState<number>(props.minLength || 0);
  const [mixedCase, setMixedCase] = useState<boolean>(props.mixedCase || false);
  const [noRepeat, setNoRepeat] = useState<boolean>(props.noRepeat || false);
  const [noRepeatCount, setNoRepeatCount] = useState<number>(
    props.noRepeatCount || 0
  );
  const [specialChar, setSpecialChar] = useState<boolean>(
    props.specialChar || false
  );
  const [warnBeforeChange, setWarnBeforeChange] = useState<number>(
    props.warnBeforeChange || 0
  );

  const onSubmit = function () {};

  return (
    <React.StrictMode>
      <div className="md:shadow rounded bg-white p-4 my-4">
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className={h3_style}>Password policy</h3>

            <div className="mb-1">
              <input
                type="checkbox"
                className={checkbox_style}
                id="digit-input"
                checked={digit}
                onChange={(e) => {
                  setDigit(e.target.checked);
                }}
              />
              <label htmlFor="digit-input" className={input_label_style}>
                Use digits
              </label>
            </div>

            <div className="mb-1">
              <input
                type="checkbox"
                className={checkbox_style}
                id="mixedcase-input"
                checked={mixedCase}
                onChange={(e) => {
                  setMixedCase(e.target.checked);
                }}
              />
              <label htmlFor="mixedcase-input" className={input_label_style}>
                Use mixed case
              </label>
            </div>

            <div className="mb-1">
              <input
                type="checkbox"
                className={checkbox_style}
                id="norepeat-input"
                checked={specialChar}
                onChange={(e) => {
                  setSpecialChar(e.target.checked);
                }}
              />
              <label htmlFor="norepeat-input" className={input_label_style}>
                Use special char
              </label>
            </div>

            <div className="mb-1">
              <input
                type="checkbox"
                className={checkbox_style}
                id="forcechange-input"
                checked={forceChange}
                onChange={(e) => {
                  setForceChange(e.target.checked);
                }}
              />
              <label htmlFor="forcechange-input" className={input_label_style}>
                Force change
              </label>
            </div>

            <div className="mb-3">
              <label
                htmlFor="changeinterval-input"
                className={input_label_style}>
                Change interval
              </label>
              <input
                type="number"
                className={input_style}
                id="changeinterval-input"
                value={changeInterval}
                onChange={(e) => {
                  setChangeInterval(parseInt(e.target.value));
                }}
              />
            </div>

            <div className="mb-1">
              <input
                type="checkbox"
                className={checkbox_style}
                id="forcelength-input"
                checked={forceLengthForCreated}
                onChange={(e) => {
                  setForceLengthForCreated(e.target.checked);
                }}
              />
              <label htmlFor="forcelength-input" className={input_label_style}>
                Force length
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="minlength-input" className={input_label_style}>
                Minimum length
              </label>
              <input
                type="number"
                className={input_style}
                id="minlength-input"
                value={minLength}
                {...register("minlength", {
                  min: 1,
                })}
                onChange={(e) => {
                  setMinLength(parseInt(e.target.value));
                }}
              />
            </div>

            <div className="mb-1">
              <input
                type="checkbox"
                className={checkbox_style}
                id="norepeat-input"
                checked={noRepeat}
                onChange={(e) => {
                  setNoRepeat(e.target.checked);
                }}
              />
              <label htmlFor="norepeat-input" className={input_label_style}>
                No repeat
              </label>
            </div>

            <div className="mb-3">
              <label
                htmlFor="norepeatcount-input"
                className={input_label_style}>
                No repeat count
              </label>
              <input
                type="number"
                className={input_style}
                id="norepeatcount-input"
                value={noRepeatCount}
                {...register("norepeatcount", {
                  min: 1,
                })}
                onChange={(e) => {
                  setNoRepeatCount(parseInt(e.target.value));
                }}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="warnbeforechange-input"
                className={input_label_style}>
                Warn before change
              </label>
              <input
                type="number"
                className={input_style}
                id="warnbeforechange-input"
                value={warnBeforeChange}
                {...register("warnbeforechange", {
                  min: 1,
                })}
                onChange={(e) => {
                  setWarnBeforeChange(parseInt(e.target.value));
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </React.StrictMode>
  );
}
