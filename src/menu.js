import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function Menu2() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="//metsakarelia.fi/puukauppa">PUUKAUPPA</Nav.Link>
          <Nav.Link href="//metsakarelia.fi/jatkuva_kasvatus">
            JATKUVA KASVATUS
          </Nav.Link>
          <Nav.Link href="//metsakarelia.fi/hakkuut">HAKKUUTYÖT</Nav.Link>
          <Nav.Link href="//metsakarelia.fi/metsuripalvelut">
            METSURITYÖT
          </Nav.Link>
          <Nav.Link href="//metsakarelia.fi/tyota">TYÖTÄ TARJOLLA</Nav.Link>
          <Nav.Link href="//metsakarelia.fi/yhteystiedot">
            YHTEYSTIEDOT
          </Nav.Link>
          <Nav.Link eventKey={2} href="//metsakarelia.fi/suostumus">
            METSÄÄN.FI SUOSTUMUS
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
