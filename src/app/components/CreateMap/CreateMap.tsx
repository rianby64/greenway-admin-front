import React, { useEffect } from "react";
import { MapContainer } from "react-leaflet";
import { useDispatch } from "react-redux";
import { removeEditingRoute } from "../../../redux/useEditRouteReducer";
import { useTypedSelector } from "../../../redux/useTypedSelector.hook";
import { MapControl } from "../commonComponents/MapControl/MapControl";
import { DescriptionComponent } from "../commonComponents/PointDescriptionComponent/Description";
import { SaveRoute } from "../commonComponents/SaveRoute/saveRoute";
import * as Styled from "./styled";

export const CreateMap: React.FunctionComponent = () => {
    const { currentFeature } = useTypedSelector((store) => store.route);
    const [saveRouteMenu, setSaveRouteMenu] = React.useState<boolean>(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(removeEditingRoute());
    }, [])

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
                style={{ zIndex: 1999, position: "absolute", bottom: 120, left: "75%" }}
                onClick={() => {
                    setSaveRouteMenu(true);
                }}
            >
                СОХРАНИТЬ МАРШРУТ
            </Styled.styledButton>
            <Styled.styledButton2
                style={{ zIndex: 1999, position: "absolute", bottom: 60, left: "75%" }}
            >ОЧИСТИТЬ</Styled.styledButton2>
        </>
    );
};
