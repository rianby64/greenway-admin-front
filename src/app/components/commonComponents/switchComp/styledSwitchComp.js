import styled from "styled-components";

export const styledSwitchLabel = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 50px;
  height: 30px;
  background: #E2E3DA;
  display: block;
  border-radius: 100px;
  position: relative;
  :after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 16px;
    transition: 0.3s;
  }
  :active:after {
    background: #F9F9F9;
    width: 30px;
  }
`;

export const styledSwitchInput = styled.input`
  position: absolute;
  height: 0;
  width: 0;
  visibility: hidden;
  :checked + ${styledSwitchLabel}{
    background: #D3DFB9;
  }
  :checked + ${styledSwitchLabel}:after{
    background: #0E7505;
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }
`;

export const styledDivSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: column;
`;

export const styledSpanSwitch = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 20px;
  color: #000000;
`;

export const styledSpanTopSwitch = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  max-width: 200px;
  text-align: center;
`;

export const styledDivUnderSwitch = styled.div`
display: flex;
  gap: 20px;
`;