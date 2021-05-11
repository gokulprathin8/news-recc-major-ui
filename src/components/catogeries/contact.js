import React, { Component } from "react";
import BaseCategory from "../commons/baseCategory";
import { Form, Button } from "react-bootstrap";

const contact = () => {
  return (
    <div
      style={{
        height: "20rem",
        width: "40rem",
        alignContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <h1>Contact Us</h1>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Anything you want to tell us?</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <Button variant="primary">Submit</Button>
    </div>
  );
};
export default contact;
