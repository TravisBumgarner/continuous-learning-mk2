import React, { Component } from 'react'

import { MediumText } from './Text.styles.js'

class Text extends Component {
    render() {
        const { size, children, inverted } = this.props

        switch (size) {
            default:
                return <MediumText inverted={inverted}>{children}</MediumText>
        }
    }
}

export default Text
