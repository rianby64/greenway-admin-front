import React, { useEffect } from "react";
import { MapContainer } from "react-leaflet";
import { useDispatch } from "react-redux";
import { removeEditingRoute } from "../../../redux/useEditRouteReducer";
import { setDistanceZero } from "../../../redux/useRoutesReducer";
import { useTypedSelector } from "../../../redux/useTypedSelector.hook";
import { fetchAllRoutes } from "../utils/utils";
import { MapControl } from "../commonComponents/MapControl/MapControl";
import { DescriptionComponent } from "../commonComponents/PointDescriptionComponent/Description";
import { SaveRoute } from "../commonComponents/SaveRoute/saveRoute";
import * as Styled from "./styled";

export const CreateMap: React.FunctionComponent = () => {
    const { currentFeature } = useTypedSelector((store) => store.route);
		const { distance } = useTypedSelector((store) => store.route);
    const [saveRouteMenu, setSaveRouteMenu] = React.useState<boolean>(false);
    const dispatch = useDispatch();
		useEffect(() => {
        fetchAllRoutes(dispatch);
        dispatch(removeEditingRoute());
				dispatch(setDistanceZero());
    }, [])

		useEffect(() => {
			console.log("distance = " + distance)
		}, [distance])

    return (
        <>
            <div>
                <DescriptionComponent currentFeature={currentFeature} />
                <MapContainer
                    style={{ height: "calc(100vh - 100px)" }}
                    center={[53.893009, 27.567444]}
                    zoom={9}
                    scrollWheelZoom={true}
                >
                    <MapControl />
                </MapContainer>
            </div>
            <SaveRoute
                isEditing={false}
                isShawn={saveRouteMenu}
                setIsShawn={setSaveRouteMenu}
            />
            <Styled.styledButton
                className="waves-effect waves-light btn red"
                style={{ zIndex: 1999, position: "absolute", bottom: 60, left: "75%", /*visibility: distance <= 0 ? "hidden" : "visible"*/ background: distance <= 0 ? "#adcfaa" : "#0E7505"  }}
								disabled={distance <= 0 ? true : false}
                onClick={() => {
                    setSaveRouteMenu(true);
                }}
            >
                СОХРАНИТЬ МАРШРУТ
            </Styled.styledButton>
            {/* MAKE IN FUTURE VERSION 
            <Styled.styledButton2
                style={{ zIndex: 1999, position: "absolute", bottom: 60, left: "75%" }}
            >ОЧИСТИТЬ</Styled.styledButton2> */}
        </>
    );
};
