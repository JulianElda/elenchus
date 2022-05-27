import axios from "api/axios";
import ConfirmModal from "components/common/confirm-modal";

export default function Logout() {
  const cancel = () => {};

  const confirm = () => {
    axios
      .post("/uiapi/AccountsAPI/v1/rest/logout?opt=THIS")
      .then((res) => {
        window.location.href = window.location.origin + "/login";
        localStorage.removeItem("csfrToken");
      })
      .catch((res) => {});
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
