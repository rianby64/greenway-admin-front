import React from 'react';
import Search from "../Search/Search";
import * as Styled from "./styledHeader";
import logo from "../../images/logo.png";
import NewDropDawn from "../DropDawn/NewDropDawn";
const Header = (props) => {



    return (
        <Styled.StyledHeader>
            <img alt="logo" src={logo}/>
            <Search/>
            <NewDropDawn
                fetchedRoutes={props.fetchedUsersRoutes}
                isUsers={true}
                title={"Пользовательские маршруты"}
            />
            <NewDropDawn
                fetchedRoutes={props.fetchedVerified}
                title={"Проверенные маршруты"}
            />
            <NewDropDawn
                fetchedRoutes={props.fetchedNotVerified}
                title={"Не проверенные маршруты"}
            />
        </Styled.StyledHeader>
    );
};

export default Header;