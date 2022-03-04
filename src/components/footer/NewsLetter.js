import React from "react";
import { Button, Form } from "react-bootstrap";

const NewsLetter = () => {
  return (
    <div style={{ margin: "0 auto" }} className="col-md-6 py-5">
      <Form className="py-1">
        <Form.Group>
          <Form.Label style={{ color: "grey" }}>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="youremail@domain.com"
          ></Form.Control>
          <Form.Text style={{ marginLeft: "10px" }}>
            We will never share your privacy.
          </Form.Text>
        </Form.Group>
      </Form>
      <Button
        style={{ margin: "auto 0px auto auto", display: "block" }}
        variant="success"
        type="submit"
      >
        Submit
      </Button>
    </div>
  );
};

export default NewsLetter;
