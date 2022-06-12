import api from "api/api";
import ConfirmModal from "components/common/confirm-modal";

export default function Logout() {
  const logoutCallback = function () {
    window.location.href = window.location.origin + "/login";
    localStorage.removeItem("csfrToken");
  };

  const cancel = () => {};

  const confirm = () => {
    api.logout(logoutCallback);
  };

  return (
    <ConfirmModal
      id="logout"
      header="logout"
      body="sure?"
      cancel={cancel}
      confirm={confirm}
    />
  );
}
