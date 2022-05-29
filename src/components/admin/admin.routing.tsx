import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const AdminResolver = lazy(() => import("components/admin/admin.resolver"));
const UserListResolver = lazy(
  () => import("components/user-list/user-list-resolver")
);
const UserViewResolver = lazy(
  () => import("components/user-view/user-view-resolver")
);

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
