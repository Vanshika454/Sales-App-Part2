import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
const backendHost = "http://localhost:3001/api/sales";

function AddSales() {
  const [productName, setProductName] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [amount, setAmount] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // setError("");
    // setMsg("");
  }, [msg, error, show]);
  const submitHanlder = async (e) => {
    e.preventDefault();
    const res = await axios.post(backendHost, {
      productName,
      amount,
      quantity,
    });
    console.log(res.status);
    if (res.status === 201) {
      setMsg("Sale created successfully");
    } else {
      setError("Failed to create sales");
    }
    setAmount(0);
    setQuantity(0);
    setProductName("");
    setShow(true);
  };

  const handleAmount = (e) => {
    console.log(error, msg);
    setAmount(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleName = (e) => {
    setProductName(e.target.value);
  };

  return (
    <div>
      <h1 style={{ margin: "1rem", textAlign: "center" }}>ADD SALES ENTRY</h1>
      <Form
        className="form"
        style={{
          marginLeft: "10%",
          width: "80%",
          padding: "2rem",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name </Form.Label>
          <Form.Control type="text" value={productName} onChange={handleName} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="text"
            value={quantity}
            onChange={handleQuantity}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="text" value={amount} onChange={handleAmount} />
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
          <div>
            {" "}
            <Alert
              key="success"
              variant="success"
              onClose={() => setShow(false)}
              dismissible
            >
              {msg}
            </Alert>
          </div>
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

export default AddSales;
