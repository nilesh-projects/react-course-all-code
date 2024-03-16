import React from "react";
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { useState } from "react";

function Header() {
  const [openNavColorThird, setOpenNavColorThird] = useState(false);
  return (
    <header>
      <MDBNavbar
        expand="md"
        className="h-12 text-xl"
        light
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <MDBContainer fluid>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNavColorThird(!openNavColorThird)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse open={openNavColorThird} navbar>
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0 space-x-5">
              <MDBNavbarItem className="active">
                <Link aria-current="page" to="/">
                  Home
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to="/about">About</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to="/contact">Contact</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to="/login">Login</Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}

export default Header;
