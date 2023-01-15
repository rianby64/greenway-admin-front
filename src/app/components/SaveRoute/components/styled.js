import styled from 'styled-components'

export const CustomSelect = styled.select`
border-radius: 5px;
width: 95%;
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

export const styledDiv = styled.div`
display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const styledTextArea = styled.textarea`
  width: 905px;
  height: 134px;
  background: rgba(226, 227, 218, 0.5);

`;
export const styledInput = styled.input`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.3);
  align-items: center;
  padding: 10px 24px;
max-width: 380px;
  background: rgba(226, 227, 218, 0.5);
  border: 1px solid #E2E3DA;
  border-radius: 2px;
`

export const SelectContainer = styled.div`
 display: flex;
 align-items: center;
 flex-flow column;
 width: 90%;
`