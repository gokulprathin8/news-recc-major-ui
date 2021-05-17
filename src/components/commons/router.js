import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../auth/login";
import lifeStyle from "../categories/lifestyle";
import politics from "../categories/politics";
import travel from "../categories/travel";
import Homepage from "../homepage";
import fashion from "../categories/fashion";
import entertainment from "../categories/entertainment";
import local from "../categories/local";
import international from "../categories/international";
import sports from "../categories/sports";
import contact from "../categories/contact";
import NewsDetail from "./newsDetail";

const CustomRouter = (props) => {
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
        <Route path="/international" exact component={international} />
        <Route path="/sports" exact component={sports} />
        <Route path="/contact" exact component={contact} />
        <Route path="/detail" exact render={(props) => <NewsDetail {...props} /> } />
      </Switch>
    </React.Fragment>
  );
};

export default CustomRouter;
