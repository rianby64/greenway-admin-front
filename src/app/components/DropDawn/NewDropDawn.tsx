import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import {setEditingRouteToStore, setIsUsers} from "../../../redux/useEditRouteReducer";
import {NavLink} from "react-router-dom";

const Container = styled.div`
  z-index: 1000;
  position: relative;
  :hover{
    Span{
      display: none;
    }
`;

const Button = styled.button`
  background: #0E7505;
  padding: 10px;
  border: 1px solid #ccc;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #F9F9F9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:270px;
  height:48px;
  :hover{
    cursor: pointer;
  }
`;

const Span = styled.span`
color: #F9F9F9;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #ccc;
  padding: 0;
  margin: 0;
  list-style: none;
  display: ${props => (props.show ? 'flex' : 'none')};
  transition: all .2s;
  max-height: 270px;
  overflow: auto;
  flex-direction: column;
`;

const DropdownItem = styled(NavLink)`
  padding: 10px;
  text-decoration:none;
  color: rgba(0, 0, 0, 0.5);
  :hover{
    background: #D3DFB9;
    color: #000000;
    cursor: pointer;
  }
`;

const newDropdown = (props) => {
    const dispatch = useDispatch();

    const setEditingRoute = (array) => {
        dispatch(setEditingRouteToStore(array));
        if (props?.isUsers) {
            dispatch(setIsUsers(true));
        }
    };
    useEffect(()=>{
        console.log(props.fetchedRoutes);
    }, [])
    const [show, setShow] = useState(false);

    return (
        <Container onMouseLeave={() => setShow(false)}>
            <Button
                onMouseEnter={() => setShow(true)}
            >
                {props.title}
                <Span><i className="material-icons">expand_more</i></Span>
            </Button>
            <DropdownList show={show}>
                {props.fetchedRoutes ? (
                    props.fetchedRoutes.map((el, ind) => {
                        return (
                            <DropdownItem
                                key={ind}
                                onClick={() => setEditingRoute(el)}
                                to={`/route/${el.id}`}
                                className="route-list-li-a"
                            >
                                {el.title}
                            </DropdownItem>
                        );
                    })
                ) : (
                    <DropdownItem>Нет данных</DropdownItem>
                )}

            </DropdownList>
        </Container>
    );
};

export default newDropdown;