import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { contactActions } from "./store";

export default function Home(props) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const dispatch = useDispatch();
  const submitted = (e) => {
    e.preventDefault();
    console.log();

    dispatch(
      contactActions.addItemToContactsList({
        userEmail,
        userName,
        userNumber
      })
    );
  };

  return (
    <Container style={{ minHeight: "90.5vh", backgroundColor: "white" }}>
      <Row className="d-flex flex-row justify-content-center">
        <Col
          lg={10}
          md={8}
          sm={5}
          xs={10}
          style={{
            backgroundColor: "gray",
            borderRadius: "5px",
            color: "white"
          }}
          className="mt-5 p-2"
        >
          <div className="df pb-2">
            <h1>Contacts List</h1>
            <Button variant="success">
              <Link className="ink" to="/contacts">
                {" "}
                Goto Contacts
              </Link>
            </Button>
          </div>
          <Card>
            <Card.Body>
              <Form onSubmit={submitted}>
                <Form.Group className="p-1">
                  <Form.Label style={{ color: "black" }}>Username</Form.Label>
                  <Form.Control
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    placeholder="Enter Your Username"
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="p-1">
                  <Form.Label style={{ color: "black" }}>Email</Form.Label>
                  <Form.Control
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    type="text"
                    placeholder="Enter Your Email"
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="p-1">
                  <Form.Label style={{ color: "black" }}>
                    Phone Number
                  </Form.Label>
                  <Form.Control
                    value={userNumber}
                    onChange={(e) => setUserNumber(e.target.value)}
                    type="text"
                    placeholder="Enter Your Phone Number"
                  ></Form.Control>
                </Form.Group>
                <Button className="m-2 mt-3" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
