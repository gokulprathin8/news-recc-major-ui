import React from 'react';
import NavbarCustom from "../commons/navbar";
import CaurosalHomepage from "./caurosal";
import HomepageBody from "./mainBody";

const Homepage = () => {
    return (
        <React.Fragment>
            <NavbarCustom />
            <CaurosalHomepage />
            <div style={{ margin: 25 }} />
            <HomepageBody />
        </React.Fragment>
    )
}

export default Homepage;
