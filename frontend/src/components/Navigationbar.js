import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
      <div style={{ color: "white" }}>SALES APP</div>
      <Navbar.Toggle
        aria-controls="navbarScroll"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
      />
      <Navbar.Collapse id="navbarScroll">
        <Nav>
          <NavLink eventKey="1" as={Link} to="/add_sales">
            ADD SALES
          </NavLink>
          <NavLink eventKey="2" as={Link} to="/top_5_sales">
            TOP 5 SALES{" "}
          </NavLink>
          <NavLink eventKey="3" as={Link} to="/revenue">
            TODAY'S TOTAL REVENUE
          </NavLink>
          <NavLink eventKey="4" as={Link} to="/login">
            LOGIN
          </NavLink>
          <NavLink eventKey="5" as={Link} to="/register">
            REGISTER
          </NavLink>
          <NavLink eventKey="6" as={Link} to="/logout">
            LOGOUT
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;
