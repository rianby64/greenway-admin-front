import styled from 'styled-components'

export const CustomSelect = styled.select`
display: initial;
margin-top: 20px;
border: 1px solid #777474;
background: #9c9a9a;
option {
    font-size: 16px;
    :hover {
        cursor: pointer;
    }
}
`

export const customOption = styled.option`

`

export const SelectContainer = styled.div`
 display: flex;
 align-items: center;
 flex-flow column;
 width: 90%;
`