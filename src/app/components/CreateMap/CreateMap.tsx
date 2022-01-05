import React from "react";
import { MapContainer } from "react-leaflet";
import { useTypedSelector } from "../../../redux/useTypedSelector.hook";
import { DropDown } from "../DropDawn/DropDawn";
import { MapControl } from "../MapControl/MapControl";
import { DescriptionComponent } from "../PointDescriptionComponent/Description";
import { SaveRoute } from "../SaveRoute/saveRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDefaultState } from "../../../redux/useEditRouteReducer";
import { getAllRoutes } from "../../../axios/requests";

export const CreateMap: React.FunctionComponent = () => {
  const { currentFeature } = useTypedSelector((store) => store.route);
  const [saveRouteMenu, setSaveRouteMenu] = React.useState<boolean>(false);
  const [fetchedRoutes, setFetchedRoutes] = React.useState<Array<any>>([]);
  const [fetchedVerified, setFetchedVerified] = React.useState<Array<any>>([]);
  const [fetchedNotVerified, setFetchedNotVerified] = React.useState<Array<any>>([]);


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
    setFetchedRoutes(fetchedData);
    filterVerified(fetchedData);
    filterNotVerified(fetchedData);
  };

  useEffect(() => {
    dispatch(setDefaultState());
    fetchAllRoutes();
  }, []);

  return (
    <>
      <DescriptionComponent currentFeature={currentFeature} />
      <MapContainer
        center={[53.893009, 27.567444]}
        zoom={9}
        scrollWheelZoom={true}
      >
        <MapControl />
      </MapContainer>
      <button
        className="waves-effect waves-light btn red"
        style={{ zIndex: 1999, position: "absolute", bottom: 0, left: "45%" }}
        onClick={() => {
          setSaveRouteMenu(true);
        }}
      >
        СОХРАНИТЬ
      </button>
      <DropDown fetchedRoutes={fetchedVerified} title={"Проверенные маршруты"} left={"60%"} />
      <DropDown fetchedRoutes={fetchedNotVerified} title={"Не проверенные маршруты"} left={"40%"} />
      <SaveRoute
        isEditing={false}
        isShawn={saveRouteMenu}
        setIsShawn={setSaveRouteMenu}
      />
    </>
  );
};
