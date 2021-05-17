import React, {useEffect, useState} from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Calendar, Eye, MessageCircle} from "react-feather";
import {connect} from "react-redux";
import "./mainBody.css";
import {Link, useHistory} from "react-router-dom";
import {fetchCategory, fetchLatestNews, fetchNews, predict} from "../../redux/actions";

const HomepageBody = (props) => {
    let history = useHistory();
    let predictionValue = '';
    let immortalId = 0;

    useEffect(() => {
        props.fetchLatestNews();
        props.fetchCategory();
        props.fetchNews();
        props.predict(props.authToken);
    }, []);

    let aggrigateBuilder = () => {
        // let unique = []
        // if (props.predictions.length > 0) {
        //     props.predictions.map((element) => {
        //         unique.push(element.category_name);
        //     })
        // }
        // let filtered = [...new Set(unique)];
        // let vengeance= {};
        // const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
        // let totalLength = filtered.length;
        // console.log(totalLength);
        // for (let i=0; i<totalLength; i++) {
        //     let tmp = filtered[i];
        //     console.log(tmp);
        //     // vengeance.filtered[i] = countOccurrences(props.predictions, filtered[i]);
        //     console.log(countOccurrences(props.predictions, filtered[i]));
        // }
        // console.log(vengeance);

        let lifeStyleCnt = 0;
        let travel = 0;
        let fashion = 0;
        let politics = 0;
        let entertainment = 0;
        let localNews = 0;
        let international = 0;
        let sports = 0;

        props.predictions.map((elem) => {
            console.log(elem);
            if (elem.category_name === "LifeStyle")  lifeStyleCnt++;
            if (elem.category_name === "Travel") travel++;
            if (elem.category_name === "Fashion") fashion++;
            if (elem.category_name === "Politics") politics++;
            if (elem.category_name === "Entertainment") entertainment++;
            if (elem.category_name === "LocalNews") localNews++;
            if (elem.category_name === "International") international++;
            if (elem.category_name === "Sports") sports++;
        });

        let myarr = [lifeStyleCnt, travel, fashion, politics, entertainment, localNews, international, sports];
        let myObj = {
            'LifeStyle': 0,
            'Travel': 0,
            'Fashion': 0,
            'Politics': 0,
            'Entertainment': 0,
            'LocalNews': 0,
            'International': 0,
            'Sports': 0
        }

        function indexOfMax(arr) {
            if (arr.length === 0) {
                return -1;
            }
            var max = arr[0];
            var maxIndex = 0;
            for (var i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    maxIndex = i;
                    max = arr[i];
                }
            }
            return maxIndex;
        }
        predictionValue = Object.keys(myObj)[indexOfMax(myarr)];
    }


    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col  xs={8}>
                        {aggrigateBuilder()}
                        {
                            props.category.map((elem) => {
                                if (elem.name === predictionValue) {
                                    immortalId = elem.id;
                                }
                            })

                        }
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
                                        <Link to={{ pathname: "/detail", state: {title: elem.title, category: elem.category, body: elem.description} }} >
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
        news: state.news,
        authToken: state.auth.user.access,
        predictions: state.predict.counts
    }
}

export default connect(mapStateToProps, {
    fetchCategory,
    fetchNews,
    fetchLatestNews,
    predict
})(HomepageBody);
