import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { PasswordPolicy } from "types";

export default function EnterprisePassword(props: PasswordPolicy) {
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
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Password policy</h3>

            <div className="mb-1">
              <input
                type="checkbox"
                className="form-check-input me-2"
                id="digit-input"
                checked={digit}
                onChange={(e) => {
                  setDigit(e.target.checked);
                }}
              />
              <label htmlFor="digit-input" className="form-label">
                Use digits
              </label>
            </div>

            <div className="mb-1">
              <input
                type="checkbox"
                className="form-check-input me-2"
                id="mixedcase-input"
                checked={mixedCase}
                onChange={(e) => {
                  setMixedCase(e.target.checked);
                }}
              />
              <label htmlFor="mixedcase-input" className="form-label">
                Use mixed case
              </label>
            </div>

            <div className="mb-1">
              <input
                type="checkbox"
                className="form-check-input me-2"
                id="norepeat-input"
                checked={specialChar}
                onChange={(e) => {
                  setSpecialChar(e.target.checked);
                }}
              />
              <label htmlFor="norepeat-input" className="form-label">
                Use special char
              </label>
            </div>

            <div className="mb-1">
              <input
                type="checkbox"
                className="form-check-input me-2"
                id="forcechange-input"
                checked={forceChange}
                onChange={(e) => {
                  setForceChange(e.target.checked);
                }}
              />
              <label htmlFor="forcechange-input" className="form-label">
                Force change
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="changeinterval-input" className="form-label">
                Change interval
              </label>
              <input
                type="number"
                className="form-control"
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
                className="form-check-input me-2"
                id="forcelength-input"
                checked={forceLengthForCreated}
                onChange={(e) => {
                  setForceLengthForCreated(e.target.checked);
                }}
              />
              <label htmlFor="forcelength-input" className="form-label">
                Force length
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="minlength-input" className="form-label">
                Minimum length
              </label>
              <input
                type="number"
                className="form-control"
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
                className="form-check-input me-2"
                id="norepeat-input"
                checked={noRepeat}
                onChange={(e) => {
                  setNoRepeat(e.target.checked);
                }}
              />
              <label htmlFor="norepeat-input" className="form-label">
                No repeat
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="norepeatcount-input" className="form-label">
                No repeat count
              </label>
              <input
                type="number"
                className="form-control"
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
              <label htmlFor="warnbeforechange-input" className="form-label">
                Warn before change
              </label>
              <input
                type="number"
                className="form-control"
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
