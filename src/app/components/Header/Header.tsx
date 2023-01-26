import React from 'react';
import {DropDown} from "../DropDawn/DropDawn";
import Search from "../Search/Search";
import * as Styled from "./styledHeader";
import logo from "../../images/logo.png";
import NewDropDawn from "../DropDawn/NewDropDawn";
const Header = (props) => {



    return (
        <Styled.StyledHeader>
            <img alt="logo" src={logo}/>
            <Search/>
            <NewDropDawn fetchedRoutes={props.fetchedVerified}
                         isUsers={true}
                         title={"Пользовательские маршруты"}/>
            <DropDown
                fetchedRoutes={props.fetchedUsersRoutes}
                isUsers={true}
                title={"Пользовательские маршруты"}
            />
            <DropDown
                fetchedRoutes={props.fetchedVerified}
                title={"Проверенные маршруты"}
            />
            <DropDown
                fetchedRoutes={props.fetchedNotVerified}
                title={"Не проверенные маршруты"}
            />
        </Styled.StyledHeader>
    );
};

export default Header;