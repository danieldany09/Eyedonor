import "./topbar.css";
import { Nav, NavDropdown, } from "react-bootstrap"

import { Link, Redirect, useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const history = useHistory();
  function logOut() {
    localStorage.clear();
    history.push('/register')
  }



  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "black" }}>
        <div className="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="" alt="" />
          </a>
          <button className="navbar-toggler btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon bg-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" style={{ color: "white" }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "white" }}>About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white" }}>
                  EyeBanks in India
                </a>
                <ul className="dropdown-menu" style={{ backgroundColor: "black" }}>
                  <li><a className="dropdown-item " href="#" style={{ color: "white" }}>Donate funds</a></li>

                </ul>
              </li>
              <Nav >
                <NavDropdown title={user && user.username} style={{ color: "white" }}>
                  <NavDropdown.Item onClick={logOut}>logout</NavDropdown.Item>
                </NavDropdown>

              </Nav>


            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

              <button class="btn btn-outline-light " type="submit">Search</button>


            </form>
          </div>
        </div>

      </nav>

    </div>
  );
}
