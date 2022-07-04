import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TimeoutSettingsType } from "types";

import {
  checkbox_style,
  input_label_style,
  input_style,
  h3_style,
} from "const/styles";

export function EnterpriseTimeout(props: TimeoutSettingsType) {
  const { register, handleSubmit } = useForm();
  const [forced, setForced] = useState<boolean>(props.forced || false);
  const [timeout, setTimeout] = useState<number>(props.timeout || 0);

  const onSubmit = function () {};

  return (
    <React.StrictMode>
      <div className="md:shadow rounded bg-white p-4 my-4">
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className={h3_style}>Timeout settings</h3>
            <div className="mb-1">
              <input
                type="checkbox"
                className={checkbox_style}
                id="forced-input"
                checked={forced}
                onChange={(e) => {
                  setForced(e.target.checked);
                }}
              />
              <label htmlFor="forced-input" className={input_label_style}>
                Forced
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="timeout-input" className={input_label_style}>
                Timeout
              </label>
              <input
                type="number"
                className={input_style}
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
