import *  as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CreateMap } from './components/CreateMap/CreateMap';
import { CreateEditingMap } from './components/EditRoute/EditRoute';


export const AdminMap: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route component={CreateMap} path="/" exact />
                <Route component={CreateEditingMap} path="/route/:id" />
            </Switch>
        </Router>
    )
}
