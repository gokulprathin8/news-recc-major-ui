import React, { useEffect } from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import { Calendar, MessageCircle, Eye } from "react-feather";
import { connect } from "react-redux";
import "./mainBody.css";
import { useHistory } from "react-router-dom";
import {fetchCategory , fetchNews, fetchLatestNews} from "../../redux/actions";
import { Link } from "react-router-dom";


const HomepageBody = (props) => {
    let history = useHistory();

    useEffect(() => {
        props.fetchLatestNews();
        props.fetchCategory();
        props.fetchNews();
    }, []);


    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col  xs={8}>
                        {props.news && props.news.getNews.map((elem) => {
                            return (
                            <React.Fragment>

                                <Card>
                                    <Card.Img variant="top" style={{ height: 600 }} src="https://images.unsplash.com/photo-1478940020726-e9e191651f1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                                    <Card.Body style={{ textAlign: 'center' }}>
                                        <Card.Title>{elem.title}</Card.Title>

                                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                            <p style={{ paddingRight: 5, paddingLeft: 5 }}> {elem.author.username} </p>
                                            <Calendar />
                                            <p style={{ paddingRight: 5, paddingLeft: 5 }}>{elem.created_at.split('T')[0]} </p>
                                            <MessageCircle />
                                            <p style={{ paddingRight: 5, paddingLeft: 5 }}> 01 </p>
                                            <Eye />
                                            <p style={{ paddingRight: 5, paddingLeft: 5 }}> 301 </p>
                                        </div>

                                        <Card.Text>
                                            {elem.description}
                                        </Card.Text>
                                        <Link to={{ pathname: "/detail", state: {title: elem.title, category: elem.category.name, body: elem.description} }} >
                                            <Button className="customButton" variant="primary" >READ MORE >></Button>
                                        </Link>


                                    </Card.Body>
                                </Card>

                            <br/><br/>
                            </React.Fragment>
                            )
                        })}
                    </Col>


                    <Col xs={4} sm={false} className="custom-side-bg">
                        <div >
                            <Row>
                                <h4 className="right-side-bar-heading">POPULAR POSTS</h4>
                                <hr style={{ color: "orangered" }}/>

                                <Row>
                                    <Col xs={4}>
                                        <img style={{ height: 100, width: 100 }} src="https://images.unsplash.com/photo-1620421680906-275860f61e27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"  alt=""/>
                                    </Col>
                                    <Col>
                                        <p>Certainty listening no behavior existence assurance situation</p>
                                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                                            <p style={{ paddingRight: 5, paddingLeft: 5 }}> admin </p>
                                            <Calendar />
                                            <p style={{ paddingRight: 5, paddingLeft: 5 }}> 01 </p>
                                            <Eye />
                                            <p style={{ paddingRight: 5, paddingLeft: 5 }}> 301 </p>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={4}>
                                        <img style={{ height: 100, width: 100 }} src="https://images.unsplash.com/photo-1620421680906-275860f61e27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"  alt=""/>
                                    </Col>
                                    <Col>
                                        <p>Certainty listening no behavior existence assurance situation</p>
                                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                                            <p style={{ paddingRight: 5, paddingLeft: 5 }}> admin </p>
                                            <Calendar />
                                            <p style={{ paddingRight: 5, paddingLeft: 5 }}> 01 </p>
                                            <Eye />
                                            <p style={{ paddingRight: 5, paddingLeft: 5 }}> 301 </p>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={4}>
                                        <img style={{ height: 100, width: 100 }} src="https://images.unsplash.com/photo-1620421680906-275860f61e27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"  alt=""/>
                                    </Col>
                                    <Col>
                                        <p>Certainty listening no behavior existence assurance situation</p>
                                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                                            <p style={{ paddingRight: 5, paddingLeft: 5 }}> admin </p>
                                            <Calendar />
                                            <p style={{ paddingRight: 5, paddingLeft: 5 }}> 01 </p>
                                            <Eye />
                                            <p style={{ paddingRight: 5, paddingLeft: 5 }}> 301 </p>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={4}>
                                        <img style={{ height: 100, width: 100 }} src="https://images.unsplash.com/photo-1620421680906-275860f61e27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"  alt=""/>
                                    </Col>
                                    <Col>
                                        <p>Certainty listening no behavior existence assurance situation</p>
                                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                                            <p style={{ paddingRight: 5, paddingLeft: 5 }}> admin </p>
                                            <Calendar />
                                            <p style={{ paddingRight: 5, paddingLeft: 5 }}> 01 </p>
                                            <Eye />
                                            <p style={{ paddingRight: 5, paddingLeft: 5 }}> 301 </p>
                                        </div>
                                    </Col>
                                </Row>

                                <div style={{ margin: 20 }} />

                                <h4 className="right-side-bar-heading">TRENDING NEWS</h4>
                                <hr style={{ color: "orangered" }}/>

                                <Card className="side-card-customize">
                                    <Card.Img style={{ height: 300 }} variant="top" src="https://images.unsplash.com/photo-1620652154541-149b1ac656c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" />
                                    <Card.Body>
                                        <Card.Title>Certainty listening no behavior existence assurance situation</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                                <Card className="side-card-customize">
                                    <Card.Img style={{ height: 300 }} variant="top" src="https://images.unsplash.com/photo-1611095565995-d09bbf618f6d?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80s" />
                                    <Card.Body>
                                        <Card.Title>Certainty listening no behavior existence assurance situation</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                                <div style={{ margin: 20 }} />

                                <h4 className="right-side-bar-heading">CATEGORIES</h4>
                                <hr style={{ color: "orangered" }}/>

                                <div style={{ paddingLeft: 20 }}>
                                    {props.category.map((elem) => {
                                        return (
                                            <p> {elem.name} </p>
                                        )
                                    })}
                                    {/*<p>LIFE STYLE   (13)</p>*/}
                                    {/*<p>BUSINESS   (06)</p>*/}
                                    {/*<p>DESIGN   (16)</p>*/}
                                    {/*<p>PHOTOGRAPHY   (11)</p>*/}
                                    {/*<p>TRAVEL   (8)</p>*/}
                                    {/*<p>NATURE   (9)</p>*/}
                                    {/*<p>PLACES   (4)</p>*/}
                                    {/*<p>FASHION   (10)</p>*/}
                                </div>

                                <div style={{ margin: 20 }} />

                                <h4 className="right-side-bar-heading">TAGS</h4>
                                <hr style={{ color: "orangered" }}/>

                                <div style={{ display: "flex", justifyContent: "row" }}>
                                    {/*<p className="tag-effect">hearted</p>*/}
                                    {/*<p className="tag-effect">never</p>*/}
                                    {/*<p className="tag-effect">contants</p>*/}
                                    {/*<p className="tag-effect">abilities</p>*/}
                                    {/*<p className="tag-effect">promotion</p>*/}
                                </div>


                            </Row>
                        </div>
                    </Col>
                </Row>

            </Container>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        category: state.category.getCategory,
        news: state.news
    }
}

export default connect(mapStateToProps, {
    fetchCategory,
    fetchNews,
    fetchLatestNews
})(HomepageBody);
