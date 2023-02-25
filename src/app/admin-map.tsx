import *  as React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { setDefaultState } from '../redux/useEditRouteReducer';
import { fetchAllRoutes } from '../utils/utils';
import Header from './components/commonComponents/Header/Header';
import { CreateMap } from './components/CreateMap/CreateMap';
import { CreateEditingMap } from './components/EditRoute/EditRoute';


export const AdminMap: React.FC = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setDefaultState());
        fetchAllRoutes(dispatch);
    }, []);
    return (
        <>
            <Router>
                <Header/>
                <Switch>
                    <Route component={CreateMap} path="/" exact />
                    <Route component={CreateEditingMap} path="/route/:id" />
                </Switch>
            </Router>
        </>
    )
}
