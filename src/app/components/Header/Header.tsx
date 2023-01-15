import React from 'react';
import {DropDown} from "../DropDawn/DropDawn";
import Search from "../Search/Search";
import * as Styled from "./styledHeader";

const Header = (props) => {



    return (
        <Styled.StyledHeader>
            <img src="/logo.png"/>
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