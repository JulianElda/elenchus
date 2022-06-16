import { Route, Routes } from "react-router-dom";

import { AdminResolver } from "components/admin";
import { EnterpriseSettings } from "components/enterprise";
import { UserListResolver } from "components/user-list";
import { UserViewResolver } from "components/user-view";

export function AdminRouting() {
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
