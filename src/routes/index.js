import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Profiler from "../containers/profiler";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/passports/:token" component={Profiler} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
