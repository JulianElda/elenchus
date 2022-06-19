import { TimeoutSettingsType } from "types";

export const generate_getDefaultSessionTimeout =
  function (): TimeoutSettingsType {
    return {
      forced: true,
      timeout: 60,
    };
  };
