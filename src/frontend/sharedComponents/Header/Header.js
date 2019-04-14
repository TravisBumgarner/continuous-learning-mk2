import React, { Component } from 'react'

import { LargeHeader, MediumHeader, SmallHeader, InlineHeader } from './Header.styles.js'

class Header extends Component {
    render() {
        const { size, children, className } = this.props

        switch (size) {
            case 'large':
                return <LargeHeader className={className}>{children}</LargeHeader>
            case 'medium':
                return <MediumHeader className={className}>{children}</MediumHeader>
            case 'small':
                return <SmallHeader className={className}>{children}</SmallHeader>
            case 'inline':
                return <InlineHeader className={className}>{children}</InlineHeader>
            default:
                return <SmallHeader className={className}>{children}</SmallHeader>
        }
    }
}

export default Header
