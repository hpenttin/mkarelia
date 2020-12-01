import React from "react";
import Slogan from "./otsikko";
import Etusivu from "./etusivu";
import Puukauppa from "./puukauppa";
import Hakkuutyo from "./hakkuutyot";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <Router>
      <div>
        <div>
          <Link className="app" to="/etusivu">
            Metsä-Karelia Oy
          </Link>
          <h2 className="slogan mobiili">{Slogan}</h2>
        </div>

        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link eventKey="8" as={Link} to="/puukauppa">
                  {" "}
                  PUUKAUPPA{" "}
                </Nav.Link>
                <Nav.Link
                  eventKey="2"
                  href="//metsakarelia.fi/jatkuva_kasvatus"
                >
                  JATKUVA KASVATUS
                </Nav.Link>
                <Nav.Link eventKey="3" as={Link} to="/hakkuutyot">
                  HAKKUUTYÖT
                </Nav.Link>
                <Nav.Link eventKey="4" as={Link} to="/metsuripalvelut">
                  METSURIPALVELUT
                </Nav.Link>
                <Nav.Link eventKey="5" as={Link} to="/rekry">
                  TYÖTÄ TARJOLLA
                </Nav.Link>
                <Nav.Link eventKey="6" as={Link} to="/yhteystiedot">
                  YHTEYSTIEDOT
                </Nav.Link>
                <Nav.Link eventKey={7} as={Link} to="/suostumus">
                  METSÄÄN.FI SUOSTUMUS
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
      <div>
        <Link to="/popup"> </Link>
      </div>
      <Switch>
        <div>
          <Route path="/etusivu">
            <Etusivu />
          </Route>
          <Route path="/puukauppa">
            <Puukauppa />
          </Route>
          <Route path="/hakkuutyot">
            <Hakkuutyo />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
