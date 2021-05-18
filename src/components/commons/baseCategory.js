import React, {useState} from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import "./baseCategory.css";
import NavbarCustom from "./navbar";
import { MessageCircle } from "react-feather";
import { Eye } from "react-feather";
import {connect} from "react-redux";
import {postCounts} from "../../redux/actions";
import {Link, useLocation} from "react-router-dom";
import {fetchCategory} from "../../redux/actions";
import {fetchNews} from "../../redux/actions";
const BaseCategory = (props) => {
    let immortalId = '';
    const location = useLocation();
    const { category } = location.state;


    {
        props.category.map((elem) => {
            if (elem.name === category) {
                immortalId = elem.id;
            }
        })
    }

    useState(() => {
        console.log(category);
        props.postCounts(category, props.authToken);
        props.fetchNews(immortalId)
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
        {category}
      </h1>
      <Container>
        <Row>


              {props.news.map((element) => {
                  return (
                      <Col>
                  <Card style={{ width: "15rem", padding: 5, margin: 0 }}>
                      <img
                          style={{ height: "12rem" }}
                          variant="top"
                          src="https://source.unsplash.com/random"
                      />

                      <Card.Body>
                          <Card.Title style={{ whiteSpace: "nowrap", overflow: "hidden" }}>{element.title}</Card.Title>

                          <Card.Text>
                              <div
                                  style={{
                                      display: "flex",
                                      flexDirection: "row",
                                      justifyContent: "center",
                                  }}
                              >
                                  <p style={{ paddingRight: 5, paddingLeft: 5 }}> By: admin</p>

                                  {/*<MessageCircle />*/}
                                  {/*<p style={{ paddingRight: 5, paddingLeft: 5 }}> 01 </p>*/}
                                  {/*<Eye />*/}
                                  {/*<p style={{ paddingRight: 5, paddingLeft: 5 }}> 301 </p>*/}
                              </div>
                          </Card.Text>
                          <Link to={{ pathname: "/detail", state: {title: element.title, category: category, body: element.description} }} >
                              <Button className="customButton" variant="primary">
                                  READ MORE >>
                              </Button>
                          </Link>
                      </Card.Body>
                  </Card>
                      </Col>
                  )
              })}





        </Row>
      </Container>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
    return {
        authToken: state.auth.user.access,
        category: state.category.getCategory,
        news: state.news.getNews
    }
}


export default connect(mapStateToProps, {
    postCounts,
    fetchCategory,
    fetchNews
})(BaseCategory);
