import React, {useState, useEffect} from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
import { ReactComponent as BrandingImage } from "../../assets/images/logo.svg";
import NavbarCustom from "../commons/navbar";
import {Button, Form} from "react-bootstrap";
import {auth} from "../../redux/actions";
import {connect} from "react-redux";

const Login = (props) => {
    let history = useHistory();

    const [values, setValues] = useState({
        username: "",
        password: ""
    });

    const handleUsername = (event) => {
        setValues({...values, username: event.target.value})
    }

    const handlePassword = (event) => {
        setValues({...values, password: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        props.auth(values);
        history.push('/')
    }

    return (
        <React.Fragment>
            <div className="core-css">
                <NavbarCustom />
                <div>
                    <BrandingImage className="image-specs"/>

                    <Form onSubmit={handleSubmit}>
                        <div className="contain-inputs" >
                            <Form.Group controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="username" placeholder="name@example.com" value={values.username} onChange={handleUsername} />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={values.password} onChange={handlePassword} />
                            </Form.Group>
                            <Button type="submit" className="button-customizer">Login</Button>
                        </div>
                    </Form>


                    {/*<form onSubmit={handleSubmit} style={{ textAlign: "start" }}>*/}
                    {/*    <label for="username" style={{ textAlign: "start", alignItems: "start", alignSelf: "center" }}>Username</label>*/}
                    {/*    <input*/}
                    {/*        id="username"*/}
                    {/*        onChange={handleUsername}*/}
                    {/*        value={values.username}*/}
                    {/*        className="form-input-styler"*/}
                    {/*        placeholder="Username"*/}
                    {/*        name="username"*/}
                    {/*        type="email"*/}
                    {/*    />*/}
                    {/*    <input*/}
                    {/*        onChange={handlePassword}*/}
                    {/*        value={values.password}*/}
                    {/*        className="form-input-styler"*/}
                    {/*        placeholder="Password"*/}
                    {/*        name="password"*/}
                    {/*        type="password"*/}
                    {/*    />*/}
                    {/*    <Button type="submit">Login</Button>*/}
                    {/*</form>*/}
                </div>
            </div>
        </React.Fragment>
    )
}
const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {
    auth
})(Login);
