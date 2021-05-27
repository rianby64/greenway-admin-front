import *  as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CreateMap } from './components/CreateMap/CreateMap';


export const AdminMap: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route component={CreateMap} path="/" exact />
                <Route path="/route/:id">
                    <div>
                        will be map with drawed route
                     </div>
                </Route>
            </Switch>
        </Router>
    )
}
