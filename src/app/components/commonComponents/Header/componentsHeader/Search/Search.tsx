import React from 'react';
import * as Styled from './SearchStyled';
import search from './Search.png'
const Search = () => {
    return (
        <Styled.StyledDiv>
            <Styled.StyledForm style={{marginLeft:'70px'}}>
                <img src={search} style={{position:'absolute', top:'13px', left:'20px'}}/>
                <Styled.StyledMyInput type="text" placeholder="Искать маршрут"/>

            </Styled.StyledForm>
        </Styled.StyledDiv>
    );
};

export default Search;