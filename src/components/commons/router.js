import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../auth/login";
import lifeStyle from "../catogeries/lifestyle";
import politics from "../catogeries/politics";
import travel from "../catogeries/travel";
import Homepage from "../homepage";
import fashion from "./../catogeries/fashion";
import entertainment from "./../catogeries/entertainment";
import local from "./../catogeries/local";
import interbational from "./../catogeries/international";
import sports from "./../catogeries/sports";
import contact from "./../catogeries/contact";

const CustomRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Login} />
        <Route path="/lifestyle" exact component={lifeStyle} />
        <Route path="/travel" exact component={travel} />
        <Route path="/fashion" exact component={fashion} />
        <Route path="/politics" exact component={politics} />
        <Route path="/entertainment" exact component={entertainment} />
        <Route path="/local" exact component={local} />
        <Route path="/international" exact component={interbational} />
        <Route path="/sports" exact component={sports} />
        <Route path="/contact" exact component={contact} />
      </Switch>
    </React.Fragment>
  );
};

export default CustomRouter;
