import { Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <Nav
      className="d-flex flex-row justify-content-center align-items-center"
      style={{ backgroundColor: "black", color: "white" }}
      variant="bgdark"
    >
      <p className="align-self-center mt-2">Redux Contacts List</p>
    </Nav>
  );
}
