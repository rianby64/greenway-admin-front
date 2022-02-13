import React, { useEffect } from "react";
import {
  setEditingRouteToStore,
  setIsUsers,
} from "../../../redux/useEditRouteReducer";
import { useDispatch } from "react-redux";
import * as Styled from "./styled";

export const DropDown: React.FunctionComponent<any> = (props) => {
  const dispatch = useDispatch();

  const setEditingRoute = (array) => {
    dispatch(setEditingRouteToStore(array));
    if (props?.isUsers) {
      dispatch(setIsUsers(true));
    }
  };

  useEffect(() => {
    console.log(props);
  }, [props]);
  return (
    <Styled.Dropdown style={{ left: props.left }}>
      <Styled.DropdownHeader>
        <Styled.DropdownTitle>{props.title}</Styled.DropdownTitle>
        <i className="material-icons">expand_more</i>
      </Styled.DropdownHeader>
      <Styled.Ul className="route-list">
        {props.fetchedRoutes ? (
          props.fetchedRoutes.map((el, ind) => {
            return (
              <Styled.Li
                key={ind}
                onClick={() => setEditingRoute(el)}
                to={`/route/${el.id}`}
                className="route-list-li-a"
              >
                {el.title}
              </Styled.Li>
            );
          })
        ) : (
          <Styled.Li>Нет данных</Styled.Li>
        )}
      </Styled.Ul>
    </Styled.Dropdown>
  );
};
