import React, { Component } from 'react'

import { StyledButton } from './Button.styles.js'

class Button extends Component {
    render() {
        const { onClick, label, theme } = this.props

        return (
            <StyledButton theme={theme} onClick={onClick}>
                {label}
            </StyledButton>
        )
    }
}

export default Button
