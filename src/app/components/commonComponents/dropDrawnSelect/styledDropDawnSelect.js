import styled from 'styled-components';

export const Container = styled.div`
  z-index: 1000;
  position: relative;

  :hover {
    Span {
      display: none;
    }
`;

export const Button = styled.button`
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
  width: 270px;
  height: 48px;

  :hover {
    cursor: pointer;
  }
`;

export const Span = styled.span`
  color: #F9F9F9;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 20px rgba(97, 180, 45, 0.2);
  border-radius: 2px;
  padding: 0;
  margin: 0;
  list-style: none;
  display: ${props => (props.show ? 'flex' : 'none')};
  transition: all .2s;
  max-height: 270px;
  overflow: auto;
  flex-direction: column;
`;

export const DropdownItem = styled.li`
  padding: 10px;
  text-decoration: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.5);
  &.active{
    background-color: #D3DFB9;
  }
  :hover {
    background: #D3DFB9;
    color: #000000;
    cursor: pointer;
  }
`;