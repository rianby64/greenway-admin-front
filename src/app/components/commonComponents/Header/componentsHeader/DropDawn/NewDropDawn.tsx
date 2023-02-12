import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { setEditingRouteToStore, setIsUsers } from "../../../../../../redux/useEditRouteReducer";
import { useTypedSelector } from '../../../../../../redux/useTypedSelector.hook';
import * as Styled from './styledDropDawn.js'


const newDropdown = (props) => {
    const dispatch = useDispatch();
    const { id, title } = useTypedSelector(store => store.editing);
    const [show, setShow] = useState(false);

    const setEditingRoute = (array) => {
        dispatch(setEditingRouteToStore(array));
        if (props?.isUsers) {
            dispatch(setIsUsers(true));
        }
    };

    const getDropdownTitle = (): string => {
        if (!id) {
            return props.title
        } else {
            return props.fetchedRoutes.find(el => el.id === id)?.title || props.title
        }
    }

    useEffect(() => {
        console.log(props.fetchedRoutes, "dr", show);
    }, [props.fetchedRoutes])

    return (
        <Styled.Container onMouseLeave={() => setShow(false)}>
            <Styled.Button
                className={title === getDropdownTitle() ? 'active' : ''}
                onMouseEnter={() => setShow(true)}
            >
                <Styled.StyledTitle>{getDropdownTitle()}</Styled.StyledTitle>
                <Styled.Span><Styled.StyledIcon className={title === getDropdownTitle() ? 'active material-icons' : 'material-icons'}>expand_more</Styled.StyledIcon></Styled.Span>
            </Styled.Button>
            <Styled.DropdownList show={show}>
                {props.fetchedRoutes.length ? (
                    props.fetchedRoutes.map((el, ind) => {
                        return (
                            <Styled.DropdownItem
                                key={ind}
                                onClick={() => setEditingRoute(el)}
                                to={`/route/${el.id}`}
                                className={title && el === id ? "route-list-li-a active" : "route-list-li-a"}
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