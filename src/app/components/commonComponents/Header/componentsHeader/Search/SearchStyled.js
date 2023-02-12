import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledForm = styled.form`
  height: 46px;
  position: relative;
  width: 300px;
  margin: 0 auto;
  background: white;
`;

export const StyledDiv = styled.div`
  z-index: 999;
  display: flex;
  flex-flow: column;
  position: relative;
`;

export const StyledMyInput = styled.input`
  align-items: center;
  padding: 12px 12px 12px 50px;
  width: 270px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  border: 1px solid #0e7505;
  border-radius: 2px;
  box-sizing: border-box;
  outline-color: #91c18d;
`;

export const StyledButton = styled.button`
  position: absolute;
  top: 0;
  right: 0px;
  width: 42px;
  height: 42px;
  border: none;
  background: #7ba7ab;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  :before {
    content: "\\f002";
    font-family: FontAwesome;
    font-size: 16px;
    color: #f9f0da;
  }
`;

export const StyledSearchList = styled.ul`
  position: absolute;
  top: 30px;
  background: #fff;
  width: 73%;
  padding: 0;
  right: 30px;
  display: flex;
  flex-flow: column;
  max-height: 270px;
  overflow-y: auto;
  li {
    list-style: none;
    /* background: #d3dfb9; */
    color: rgb(47, 46, 46) !important;
    cursor: pointer;
    padding: 10px;
    :hover {
      background: #d3dfb9;
      color: #000000;
      cursor: pointer;
    }
  }
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  overflow-wrap: anywhere;
  list-style: none;
  /* background: #d3dfb9; */
  color: rgb(47, 46, 46) !important;
  cursor: pointer;
  padding: 10px;
  :hover {
    background: #d3dfb9;
    color: #000000;
    cursor: pointer;
  }
`;
