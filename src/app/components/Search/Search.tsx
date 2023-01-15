import React from 'react';
import * as Styled from './SearchStyled';
const Search = () => {
    return (
        <Styled.StyledDiv>
            <Styled.StyledForm>
                <Styled.StyledMyInput type="text" placeholder="Искать маршрут"/>

            </Styled.StyledForm>
        </Styled.StyledDiv>
    );
};

export default Search;