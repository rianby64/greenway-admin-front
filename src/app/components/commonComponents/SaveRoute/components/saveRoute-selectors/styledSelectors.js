import styled from 'styled-components';

export const styledUnderTitleLabel = styled.span`
  display: block;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  text-align: left;
  margin-bottom: 16px;
`;

export const CustomSelect = styled.select`
border-radius: 5px;
width: 100%;
display: initial;
  padding: 13px 24px;
  height: auto;
border: 1px solid #777474;
  background: #0E7505;
  box-shadow: 2px 2px 20px rgba(97, 180, 45, 0.2);
  color: #F9F9F9;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
option {
  color: rgba(0, 0, 0, 0.5);
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  background:#F9F9F9;
  box-shadow: 2px 2px 20px rgba(97, 180, 45, 0.2);
  border-radius: 2px;

  :hover {
      background: #D3DFB9;
      color: #000000;
        cursor: pointer;
    }
  :checked{
    background: #D3DFB9;
  }
  ::-moz-focus-inner {
    border: 0;
  }
}
`