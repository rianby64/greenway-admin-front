import *  as React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getAllRoutes, getAllUsersRoutes } from '../axios/requests';
import { setDefaultState } from '../redux/useEditRouteReducer';
import { setAllRoutes, setNotVerifiedRoutes, setUsersRoutes, setVerifiedRoutes } from '../redux/useSettingsReducer';
import Header from './components/commonComponents/Header/Header';
import { CreateMap } from './components/CreateMap/CreateMap';
import { CreateEditingMap } from './components/EditRoute/EditRoute';


export const AdminMap: React.FC = () => {
    const dispatch = useDispatch();

    const filterNotVerified = (array): void => {
        dispatch(setNotVerifiedRoutes(array.filter((el) => !el.approved)))
    };

    const filterVerified = (array): void => {
        dispatch(setVerifiedRoutes(array.filter((el) => el.approved)))
    };

    const fetchAllRoutes = async () => {
        const fetchedData = await getAllRoutes();
        const fetchedUsers = await getAllUsersRoutes();
        dispatch(setAllRoutes(fetchedData));
        filterVerified(fetchedData);
        filterNotVerified(fetchedData);
        dispatch(setUsersRoutes(fetchedUsers));
    };

    React.useEffect(() => {
        dispatch(setDefaultState());
        fetchAllRoutes();
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
