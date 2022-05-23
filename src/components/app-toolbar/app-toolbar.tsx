export default function AppToolbar(props) {

  const nick = props.nick;

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container d-flex">
        <label className="navbar-brand flex-grow-1">gandoo-idgard</label>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle"
              id="app-toolbar-dropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              {nick}
            </a>
            <ul className="dropdown-menu" aria-labelledby="app-toolbar-dropdown">
              <li>
                <span className="dropdown-item"
                  data-bs-toggle="modal"
                  data-bs-target="#logout-confirm-modal">Logout</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}