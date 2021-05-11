import React from "react";
import { Route, Switch } from 'react-router-dom';
import Login from "../auth/login";
import Homepage from "../homepage";

const CustomRouter = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/login" exact component={Login}/>
            </Switch>
        </React.Fragment>
    )
};

export default CustomRouter;
