import * as React from 'react'
import Slider from '@material-ui/lab/Slider'

import { Text } from 'sharedComponents'

type State = {}

const RateSkill = ({ skill, onChange: handleChange, value }) => {
    console.log(value, typeof value)
    return (
        <div>
            <Text>{skill}</Text>
            <Slider value={value} min={0} max={10} step={0.5} onChange={(_, value) => handleChange(skill, value)} />
        </div>
    )
}

export default RateSkill
