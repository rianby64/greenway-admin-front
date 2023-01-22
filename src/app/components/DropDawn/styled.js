import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Dropdown = styled.div`
  
  border-radius: 2px;
  overflow-y: hidden;
  width: 20% !important;
  height: 46px;
  /* height: 200px; */
  background-color: #0E7505;
  display: flex;
  flex-flow: column;
  z-index: 1999 !important;
  transition: all 0.2s;
  overflow-x: hidden;
  :hover {
    
    overflow-y: hidden;
    i {
      display: none;
    }
  }
`;

export const DropdownHeader = styled.div`
  padding: 12px;
  font-size: 18px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

export const DropdownTitle = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #F9F9F9;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Li = styled(NavLink)`
  color: #F9F9F9 !important;
  font-size: 15px;
  margin-bottom: 8px;
  :hover {
    cursor: pointer;
  }
`;
export const Ul = styled.ul`
  width: 100%;
  /* padding-left: 5px !important; */
  padding-bottom: 10px !important;
  display: flex;
  flex-flow: column;
  overflow-y: auto;
`;
