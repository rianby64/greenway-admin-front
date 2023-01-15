import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Dropdown = styled.div`
  border-radius: 2px;
  overflow-y: hidden;
  width: 20% !important;
  height: 46px;
  /* height: 200px; */
  background-color: #0E7505;
  z-index: 3000;
  top: 10px !important;
  display: flex;
  flex-flow: column;
  z-index: 1999 !important;
  transition: all 0.2s;
  overflow-x: hidden;
  :hover {
    height: 200px;
    overflow-y: hidden;
    i {
      display: none;
    }
  }
`;

export const DropdownHeader = styled.div`
  padding: 5px;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const DropdownTitle = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1vw;
  color: #F9F9F9;
`;

export const Li = styled(NavLink)`
  padding-left: 5px;
  color: #F9F9F9 !important;
  font-size: 15px;
  margin-bottom: 8px;
  border-bottom: 1px solid #342525;
  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
export const Ul = styled.ul`
  width: 100%;
  /* padding-left: 5px !important; */
  padding-bottom: 5px !important;
  display: flex;
  flex-flow: column;
  overflow-y: auto;
`;
