import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {setEditingRouteToStore, setIsUsers} from "../../../../../../redux/useEditRouteReducer";
import * as Styled from './styledDropDawn.js'


const newDropdown = (props) => {
    const dispatch = useDispatch();

    const setEditingRoute = (array) => {
        dispatch(setEditingRouteToStore(array));
        if (props?.isUsers) {
            dispatch(setIsUsers(true));
        }
    };
    useEffect(()=>{
        console.log(props.fetchedRoutes, "dr");
    }, [props.fetchedRoutes])
    const [show, setShow] = useState(false);

    return (
        <Styled.Container onMouseLeave={() => setShow(false)}>
            <Styled.Button
                onMouseEnter={() => setShow(true)}
            >
                {props.title}
                <Styled.Span><i className="material-icons">expand_more</i></Styled.Span>
            </Styled.Button>
            <Styled.DropdownList show={show}>
                {props.fetchedRoutes.length ? (
                    props.fetchedRoutes.map((el, ind) => {
                        return (
                            <Styled.DropdownItem
                                key={ind}
                                onClick={() => setEditingRoute(el)}
                                to={`/route/${el.id}`}
                                className="route-list-li-a"
                            >
                                {el.title}
                            </Styled.DropdownItem>
                        );
                    })
                ) : (
                    <Styled.DropdownItem to={""}>Нет данных</Styled.DropdownItem>
                )}

            </Styled.DropdownList>
        </Styled.Container>
    );
};

export default newDropdown;