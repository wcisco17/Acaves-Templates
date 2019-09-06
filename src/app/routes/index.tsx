import Home from 'app/modules/Home';
import * as React from 'react';
import { Route, Switch,  } from "react-router-dom";
import Restaurant from 'app/modules/Restaurants';
import Mission from 'app/modules/AboutUs';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/restaurant' component={Restaurant} />
        <Route path='/mission' component={Mission} />
    </Switch>
);