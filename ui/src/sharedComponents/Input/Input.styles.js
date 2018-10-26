import styled, { css } from 'styled-components'

import { FONT_SIZE_INPUTS_AND_BUTTONS, FONT_FAMILY_TEXT } from 'Theme'

const sharedStyles = props => css`
    padding: 15px 15px 15px 0;
    width: 100%;
    font-family: ${FONT_FAMILY_TEXT};
    background-color: rgba(0, 0, 0, 0);
    box-sizing: border-box;
    margin: 10px 0;
    border: 0px;
    border-bottom: 2px solid rgb(74, 207, 160);
    font-size: ${FONT_SIZE_INPUTS_AND_BUTTONS}px;

    &::placeholder {
        color: black;
        text-transform: uppercase;
    }
`

const StyledInput = styled.input`
    ${props => sharedStyles(props)};
`
const StyledTextArea = styled.textarea`
    ${props => sharedStyles(props)};
`

export { StyledInput, StyledTextArea }
