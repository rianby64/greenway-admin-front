import *  as React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getAllRoutes, getAllUsersRoutes } from '../axios/requests';
import { setDefaultState } from '../redux/useEditRouteReducer';
import Header from './components/commonComponents/Header/Header';
import { CreateMap } from './components/CreateMap/CreateMap';
import { CreateEditingMap } from './components/EditRoute/EditRoute';


export const AdminMap: React.FC = () => {
    const [fetchedRoutes, setFetchedRoutes] = React.useState<Array<any>>([]);
    const [fetchedVerified, setFetchedVerified] = React.useState<Array<any>>([]);
    const [fetchedNotVerified, setFetchedNotVerified] = React.useState<
        Array<any>
    >([]);
    const [fetchedUsersRoutes, setFetchedUsersRoutes] = React.useState<
        Array<any>
    >([]);

    const dispatch = useDispatch();

    const filterNotVerified = (array): void => {
        setFetchedNotVerified(array.filter((el) => !el.approved));
        console.log(fetchedNotVerified, "notverif");
        console.log(fetchedRoutes, "notverif");
    };

    const filterVerified = (array): void => {
        setFetchedVerified(array.filter((el) => el.approved));
        console.log(fetchedVerified, "verif");
    };

    const fetchAllRoutes = async () => {
        const fetchedData = await getAllRoutes();
        const fetchedUsers = await getAllUsersRoutes();
        setFetchedRoutes(fetchedData);
        filterVerified(fetchedData);
        filterNotVerified(fetchedData);
        setFetchedUsersRoutes(fetchedUsers);
        console.log(fetchedUsersRoutes);

    };

    React.useEffect(() => {
        dispatch(setDefaultState());
        fetchAllRoutes();
    }, []);
    return (
        <>

            <Router>
                <Header fetchedUsersRoutes={fetchedUsersRoutes}
                    fetchedVerified={fetchedVerified}
                    fetchedNotVerified={fetchedNotVerified} />
                <Switch>
                    <Route component={CreateMap} path="/" exact />
                    <Route component={CreateEditingMap} path="/route/:id" />
                </Switch>
            </Router>
        </>
    )
}
