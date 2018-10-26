// @flow

import * as React from 'react'
import Slider from '@material-ui/lab/Slider'

import { Text } from 'sharedComponents'

type Props = {
    skill: string,
    value: number,
    handleChange: (skill: string, value: number) => void
}

type State = {}

const RateSkill = ({ skill, handleChange, value }: Props) => {
    console.log(skill, handleChange, value)
    return (
        <div>
            <Text>{skill}</Text>
            <Slider value={value} min={0} max={10} step={1} onChange={(_, value) => handleChange(skill, value)} />
        </div>
    )
}

export default RateSkill
