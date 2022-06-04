import { Route, Routes } from "react-router-dom";

import AdminResolver from "components/admin/admin.resolver";
import UserListResolver from "components/user-list/user-list-resolver";
import UserViewResolver from "components/user-view/user-view-resolver";
// TODO: stuff ran twice when lazy loaded
/**
import { lazy } from "react";
const AdminResolver = lazy(() => import("components/admin/admin.resolver"));
const UserListResolver = lazy(
  () => import("components/user-list/user-list-resolver")
);
const UserViewResolver = lazy(
  () => import("components/user-view/user-view-resolver")
);
*/

export default function AdminRouting() {
  return (
    <Routes>
      <Route path="/" element={<AdminResolver />}>
        <Route path="user" element={<UserListResolver />} />
        <Route path="user/:userId" element={<UserViewResolver />} />
      </Route>
    </Routes>
  );
}
