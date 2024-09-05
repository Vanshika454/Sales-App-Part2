import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
const backendHost = "http://localhost:3001/api/users/register";
function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);

  useEffect(() => {
    // setError("");
    // setMsg("");
  }, [msg, error, show]);
  const submitHanlder = async (e) => {
    e.preventDefault();
    const res = await axios.post(backendHost, {
      lastName,
      firstName,
      email,
      password,
    });
    // console.log(res.status);
    if (res.status === 201) {
      setMsg("Registered successfully");
    } else {
      setError("Failed to register");
    }
    setEmail("");
    setPassword("");
    setLastName("");
    setFirstName("");
    setShow(true);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  return (
    <div>
      <h1 style={{ margin: "1rem", textAlign: "center" }}>
        REGISTERATION FORM
      </h1>
      <Form
        className="form"
        style={{
          marginLeft: "10%",
          width: "80%",
          padding: "2rem",
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>First Name </Form.Label>
          <Form.Control
            type="text"
            value={firstName}
            onChange={handleFirstName}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            value={lastName}
            onChange={handleLastName}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={handleEmail} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={handlePassword}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={{ width: "100%" }}
          onClick={submitHanlder}
        >
          Submit
        </Button>
      </Form>

      <div
        style={{
          marginLeft: "10%",
          width: "80%",
          padding: "2rem",
          marginTop: "1%",
        }}
      >
        {msg !== "" && show ? (
          <Alert
            key="success"
            variant="success"
            onClose={() => setShow(false)}
            dismissible
          >
            {msg}
          </Alert>
        ) : (
          error !== "" &&
          show && (
            <Alert
              key="danger"
              variant="danger"
              onClose={() => setShow(false)}
              dismissible
            >
              {error}
            </Alert>
          )
        )}
        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </div>
    </div>
  );
}

export default Register;
