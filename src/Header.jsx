import { Link } from "react-router-dom"; //redrawing screen instead of refreshing whole page
import { LogoutLink } from "./LogoutLink";

export function Header() {
  let authenticationLink;

  if (localStorage.jwt === undefined) {
    authenticationLink = (
      <>
        <li>
          <Link className="dropdown-item" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/signup">
            Signup
          </Link>
        </li>
      </>
    );
  } else {
    authenticationLink = (
      <li className="dropdown-item">
        <LogoutLink />
      </li>
    );
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* <a className="navbar-brand" id="pantry-brand" href="/">
            Pantry Purge App
          </a> */}
          <Link to="/" className="navbar-brand" id="pantry-brand">
            Pantry Purge App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a> */}
                <Link to="/" className="nav-link active" aria-current="page" a>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                {/* <a className="nav-link" href="#">
                  Your Pantry
                </a> */}
                <Link to="/your_pantry" className="nav-link">
                  Your Pantry
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
                <ul className="dropdown-menu">
                  {authenticationLink}
                  {/* <li>
                    <Link className="dropdown-item" to="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/signup">
                      Signup
                    </Link>
                  </li>

                  <li className="dropdown-item">
                    <LogoutLink />
                  </li> */}
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" action="/" method="get">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Recipe"
                id="header-search"
                aria-label="Search"
                name="s"
              ></input>
              <button onClick="/" className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

// onSubmit grab input text on form
