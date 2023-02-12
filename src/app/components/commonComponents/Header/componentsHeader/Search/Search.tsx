import React, { useState } from 'react';
import * as Styled from './SearchStyled';
import search from './Search.png'
import { useDispatch } from 'react-redux';
import { setEditingRouteToStore } from '../../../../../../redux/useEditRouteReducer';
const Search = (props) => {
    const [filteredRoutes, setFilteredRoutes] = useState<any[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    const dispatch = useDispatch();

    const setEditingRoute = (array) => {
        dispatch(setEditingRouteToStore(array));
        setInputValue('');
        setFilteredRoutes([]);
    };

    const onSearch = (e) => {
        setInputValue(e.target.value)
        const inputValue = e.target.value;
        if (!inputValue) {
            setFilteredRoutes([]);
            return
        }
        if (props.allRoutes.length) {
            const filteredRoutes = props.allRoutes.filter(el => el.title.toLowerCase().includes(inputValue.toLowerCase()));
            setFilteredRoutes(filteredRoutes.length ? filteredRoutes : []);
        }
    }
    return (
        <Styled.StyledDiv>
            <Styled.StyledForm style={{ marginLeft: '70px' }}>
                <img src={search} style={{ position: 'absolute', top: '13px', left: '20px' }} />
                <Styled.StyledMyInput value={inputValue} onChange={onSearch} type="text" placeholder="Искать маршрут" />
            </Styled.StyledForm>
            {filteredRoutes.length ? (
                <Styled.StyledSearchList>
                    {filteredRoutes.map((el: any, ind) =>
                        <Styled.NavLinkStyled
                            key={ind}
                            onClick={() => setEditingRoute(el)}
                            to={`/route/${el.id}`}>
                            {el.title}
                        </Styled.NavLinkStyled>
                    )}
                </Styled.StyledSearchList>
            ) : <></>}

        </Styled.StyledDiv>
    );
};

export default Search;