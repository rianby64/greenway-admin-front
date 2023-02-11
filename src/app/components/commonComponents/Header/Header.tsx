import React from 'react';
import Search from "./componentsHeader/Search/Search";
import * as Styled from "./styledHeader";
import logo from "../../../images/logo.png";
import NewDropDawn from "./componentsHeader/DropDawn/NewDropDawn";
import { NavLink } from 'react-router-dom';
const Header = (props) => {



    return (
        <Styled.StyledHeader>
            <NavLink to={'/'}><img alt="logo" src={logo} /></NavLink>
            <Search />
            <NewDropDawn
                fetchedRoutes={props.fetchedUsersRoutes}
                isUsers={true}
                title={"Пользовательские маршруты"}
            />
            <NewDropDawn
                isUsers={false}
                fetchedRoutes={props.fetchedVerified}
                title={"Проверенные маршруты"}
            />
            <NewDropDawn
                isUsers={false}
                fetchedRoutes={props.fetchedNotVerified}
                title={"Не проверенные маршруты"}
            />
        </Styled.StyledHeader>
    );
};

export default Header;