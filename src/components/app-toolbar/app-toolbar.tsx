import FAIcon from "components/common/fa-icon";

import Logout from "components/logout";
import "./app-toolbar.scss";

type AppToolbarProps = {
  nick: string;
};

export default function AppToolbar(props: AppToolbarProps) {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container d-flex">
          <label className="navbar-brand ">elenchus</label>
          <ul className="navbar-nav flex-grow-1 mb-2 mb-lg-0">
            <li className="nav-item mx-auto">
              <button
                type="button"
                className="btn btn-outline-secondary app-toolbar-search"
                data-bs-toggle="modal"
                data-bs-target="#toolbar-search-modal">
                <span className="app-toolbar-search-icon">
                  <FAIcon type="GENERAL" icon="SEARCH" />
                </span>
                Find
              </button>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="app-toolbar-dropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                {props.nick}
              </span>
              <ul
                className="dropdown-menu"
                aria-labelledby="app-toolbar-dropdown">
                <li>
                  <span
                    className="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#logout-confirm-modal">
                    Logout
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <Logout />
    </>
  );
}
