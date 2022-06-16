import React, { useState } from "react";
import { useForm } from "react-hook-form";

export function EnterpriseTimeout(props) {
  const { register, handleSubmit } = useForm();
  const [forced, setForced] = useState<boolean>(props.forced || false);
  const [timeout, setTimeout] = useState<number>(props.timeout || 0);

  const onSubmit = function () {};

  return (
    <React.StrictMode>
      <div className="card mt-3">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Timeout settings</h3>
            <div className="mb-1">
              <input
                type="checkbox"
                className="form-check-input me-2"
                id="forced-input"
                checked={forced}
                onChange={(e) => {
                  setForced(e.target.checked);
                }}
              />
              <label htmlFor="forced-input" className="form-label">
                Forced
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="timeout-input" className="form-label">
                Timeout
              </label>
              <input
                type="number"
                className="form-control"
                id="timeout-input"
                value={timeout}
                {...register("timeout", {
                  min: 20,
                  max: 99999,
                })}
                onChange={(e) => {
                  setTimeout(parseInt(e.target.value));
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </React.StrictMode>
  );
}
