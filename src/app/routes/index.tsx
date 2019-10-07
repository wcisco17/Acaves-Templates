import Mission from 'app/modules/AboutUs';
import Home from 'app/modules/Home';
import HomeOwners from 'app/modules/HomeOwners';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/owner' component={HomeOwners} />
        <Route path='/mission' component={Mission} />
    </Switch>
);