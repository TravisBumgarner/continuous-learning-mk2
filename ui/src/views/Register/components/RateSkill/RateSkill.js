// @flow

import * as React from 'react'

type Props = {
    /* ... */
}

type State = {
    foo: number
}

class RateSkill extends React.Component<Props, State> {
    state = {
        foo: 5
    }

    render() {
        const { foo } = this.state

        return <p>{foo}</p>
    }
}

export default RateSkill
