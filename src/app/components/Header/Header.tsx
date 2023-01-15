import React from 'react';
import {DropDown} from "../DropDawn/DropDawn";
import Search from "../Search/Search";
import * as Styled from "./styledHeader";
import logo from "../../images/logo.png";
const Header = (props) => {



    return (
        <Styled.StyledHeader>
            <img src={logo}/>
            <Search/>
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