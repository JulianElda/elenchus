import { Route, Routes } from "react-router-dom";

import AdminResolver from "components/admin/admin.resolver";
import EnterpriseSettings from "components/enterprise/enterprise";
import UserListResolver from "components/user-list/user-list-resolver";
import UserViewResolver from "components/user-view/user-view-resolver";

export default function AdminRouting() {
  return (
    <Routes>
      <Route path="/" element={<AdminResolver />}>
        <Route path="user" element={<UserListResolver />} />
        <Route path="user/:userId" element={<UserViewResolver />} />
        <Route path="enterprise" element={<EnterpriseSettings />} />
      </Route>
    </Routes>
  );
}
