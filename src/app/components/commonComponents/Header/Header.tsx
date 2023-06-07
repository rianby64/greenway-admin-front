import React from 'react';
import Search from "./componentsHeader/Search/Search";
import * as Styled from "./styledHeader";
import logo from "../../../images/logo.png";
import NewDropDawn from "./componentsHeader/DropDawn/NewDropDawn";
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../../../../redux/useTypedSelector.hook';
const Header = () => {
    const { verifiedRoutes, notVerifiedRoutes, usersRoutes, allRoutes } = useTypedSelector(store => store.settings)


    return (
        <Styled.StyledHeader>
            <NavLink to={'/'}><img className='logo' alt="logo" src={logo} /></NavLink>
            <Search allRoutes={allRoutes} />
            <NewDropDawn
                fetchedRoutes={usersRoutes}
                isUsers={true}
                title={"Пользовательские маршруты"}
            />
            <NewDropDawn
                isUsers={false}
                fetchedRoutes={verifiedRoutes}
                title={"Проверенные маршруты"}
            />
            <NewDropDawn
                isUsers={false}
                fetchedRoutes={notVerifiedRoutes}
                title={"Не проверенные маршруты"}
            />
        </Styled.StyledHeader>
    );
};

export default Header;