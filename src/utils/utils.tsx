import { getAllRoutes, getAllUsersRoutes } from "../axios/requests";
import { setAllRoutes, setNotVerifiedRoutes, setUsersRoutes, setVerifiedRoutes } from "../redux/useSettingsReducer";

export const fetchAllRoutes = async (dispatch) => {
    const fetchedData = await getAllRoutes();
    const fetchedUsers = await getAllUsersRoutes();
    dispatch(setAllRoutes(fetchedData));
    dispatch(setVerifiedRoutes(fetchedData.filter((el) => el.approved)))
    dispatch(setNotVerifiedRoutes(fetchedData.filter((el) => !el.approved)))
    dispatch(setUsersRoutes(fetchedUsers));
};