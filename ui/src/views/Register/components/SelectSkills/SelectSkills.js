// @flow

import * as React from 'react'
import Button from '@material-ui/core/Button'

type Props = {
    skills: Array<string>,
    selectedSkills: Set<string>,
    onClick: Function
}

type State = {}

const SelectSkills = ({ skills, onClick, selectedSkills }: Props) => {
    const SkillButtons = skills.map(skill => {
        return (
            <Button
                key={skill}
                onClick={() => onClick(skill)}
                variant="contained"
                color={selectedSkills.has(skill) ? 'primary' : 'default'}
            >
                {skill}
            </Button>
        )
    })

    return SkillButtons
}

export default SelectSkills
