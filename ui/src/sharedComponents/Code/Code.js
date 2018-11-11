import React, { Component } from 'react'

import { CodeSpan, CodeDiv } from './Code.styles.js'

const Code = ({ inline, children }) => {
    return inline ? <CodeSpan>{children}</CodeSpan> : <CodeDiv>{children}</CodeDiv>
}

export default Code
