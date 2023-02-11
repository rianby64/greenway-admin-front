import React from "react";
import {MapContainer} from "react-leaflet";
import {useTypedSelector} from "../../../redux/useTypedSelector.hook";
import {MapControl} from "../MapControl/MapControl";
import {DescriptionComponent} from "../PointDescriptionComponent/Description";
import {SaveRoute} from "../SaveRoute/saveRoute";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setDefaultState} from "../../../redux/useEditRouteReducer";
import {getAllRoutes, getAllUsersRoutes} from "../../../axios/requests";
import Header from "../commonComponents/Header/Header";
import * as Styled from "./styled";

export const CreateMap: React.FunctionComponent = () => {
    const {currentFeature} = useTypedSelector((store) => store.route);
    const [saveRouteMenu, setSaveRouteMenu] = React.useState<boolean>(false);
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
    };

    useEffect(() => {
        dispatch(setDefaultState());
        fetchAllRoutes();
    }, []);

    return (
        <>
            <Header
                fetchedUsersRoutes={fetchedUsersRoutes}
                fetchedVerified={fetchedVerified}
                fetchedNotVerified={fetchedNotVerified}
            />
            <div>
                <DescriptionComponent currentFeature={currentFeature}/>
                <MapContainer
                    style={{height: "calc(100vh - 100px)"}}
                    center={[53.893009, 27.567444]}
                    zoom={9}
                    scrollWheelZoom={true}
                >
                    <MapControl/>
                </MapContainer>
            </div>
            <SaveRoute
                isEditing={false}
                isShawn={saveRouteMenu}
                setIsShawn={setSaveRouteMenu}
            />
            <Styled.styledButton
                className="waves-effect waves-light btn red"
                style={{zIndex: 1999, position: "absolute", bottom: 120, left: "75%"}}
                onClick={() => {
                    setSaveRouteMenu(true);
                }}
            >
                СОХРАНИТЬ МАРШРУТ
            </Styled.styledButton>
            <Styled.styledButton2
                style={{zIndex: 1999, position: "absolute", bottom: 60, left: "75%"}}
            >ОЧИСТИТЬ</Styled.styledButton2>
        </>
    );
};
