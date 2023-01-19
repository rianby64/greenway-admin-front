import styled from 'styled-components'

export const CustomSelect = styled.select`
  border-radius: 5px;
  width: 40%;
  display: initial;
  height: 40px;
  margin-top: 20px;
  border: 1px solid #777474;
  background: rgba(226, 227, 218, 0.5);
  option {
    font-size: 16px;
    :hover {
      cursor: pointer;
    }
  }
`



export const styledTextArea = styled.textarea`
  width: 905px;
  height: 134px;
  background: rgba(226, 227, 218, 0.5);

`;

export const styledTitleLabel = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #0E7505;
  margin-top: 30px;
`;

export const customOption = styled.option`

`

export const SelectContainer = styled.div`
 display: flex;
 align-items: center;
 flex-flow column;
 width: 90%;
`