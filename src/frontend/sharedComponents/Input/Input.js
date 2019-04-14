import React, { Component } from 'react'

import { StyledInput, StyledTextArea } from './Input.styles.js'

class Input extends Component {
    render() {
        const { hintText, name, value, onChange, theme, rows, textarea } = this.props

        return textarea ? (
            <StyledTextArea
                theme={theme}
                name={name}
                placeholder={hintText}
                value={value}
                onChange={onChange}
                type="text"
                rows={rows}
            />
        ) : (
            <StyledInput
                theme={theme}
                name={name}
                placeholder={hintText}
                value={value}
                onChange={onChange}
                type="text"
            />
        )
    }
}

export default Input
