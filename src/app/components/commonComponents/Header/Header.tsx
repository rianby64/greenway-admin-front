import React from 'react';
import Search from "./componentsHeader/Search/Search";
import * as Styled from "./styledHeader";
import logo from "../../../images/logo.png";
import NewDropDawn from "./componentsHeader/DropDawn/NewDropDawn";
import { NavLink, useHistory } from 'react-router-dom';
import { useTypedSelector } from '../../../../redux/useTypedSelector.hook';
const Header = () => {
    const { verifiedRoutes, notVerifiedRoutes, usersRoutes, allRoutes } = useTypedSelector(store => store.settings)
    const history = useHistory()
    return (
        <Styled.StyledHeader>
            <NavLink to={'/'}><img alt="logo" src={logo} /></NavLink>
            {history.location.pathname === "login" ? <Search allRoutes={allRoutes} /> : null}
            {history.location.pathname === "login" ? <NewDropDawn
                fetchedRoutes={usersRoutes}
                isUsers={true}
                title={"Пользовательские маршруты"}
            /> : null}
            {history.location.pathname === "login" ? <NewDropDawn isUsers={false}
                fetchedRoutes={verifiedRoutes}
                title={"Проверенные маршруты"}
            /> : null}

            {history.location.pathname === "login" ? <NewDropDawn
                isUsers={false}
                fetchedRoutes={notVerifiedRoutes}
                title={"Не проверенные маршруты"}
            /> : null}
        </Styled.StyledHeader>
    );
};

export default Header;