import React, {useState} from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import "./baseCategory.css";
import NavbarCustom from "./navbar";
import { MessageCircle } from "react-feather";
import { Eye } from "react-feather";
import {connect} from "react-redux";
import {postCounts} from "../../redux/actions";
import {useLocation} from "react-router-dom";

const BaseCategory = (props) => {
    const location = useLocation();
    const { category } = location.state;

    useState(() => {
        console.log(category);
        props.postCounts(category, props.authToken);
    }, []);

    return (
    <React.Fragment>
      <NavbarCustom />
      <h1
        style={{
          textAlign: "center",
          paddingBottom: "5rem",
          paddingTop: "8rem",
        }}
      >
        {props.title}
      </h1>
      <Container>
        <Row>
          <Col>

            <Card style={{ width: "18rem" }}>
              <img
                style={{ height: "15rem" }}
                variant="top"
                src="https://source.unsplash.com/random"
              />

              <Card.Body>
                <Card.Title>title</Card.Title>

                <Card.Text>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <p style={{ paddingRight: 5, paddingLeft: 5 }}> admin </p>

                    <MessageCircle />
                    <p style={{ paddingRight: 5, paddingLeft: 5 }}> 01 </p>
                    <Eye />
                    <p style={{ paddingRight: 5, paddingLeft: 5 }}> 301 </p>
                  </div>
                </Card.Text>
                <Button className="customButton" variant="primary">
                  READ MORE >>
                </Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
    return {
        authToken: state.auth.user.access
    }
}


export default connect(mapStateToProps, {
    postCounts
})(BaseCategory);
