// @flow

import * as React from 'react'
import Button from '@material-ui/core/Button'

type Props = {
    skills: Array<string>,
    selectedSkills: Set<string>,
    onClick: Function
}

type State = {}

const SelectSkills = ({ skills, onClick }: Props) => {
    const SkillButtons = Object.values(skills).map(({ skill, isSelected }) => {
        return (
            <Button
                key={skill}
                onClick={() => onClick(skill)}
                variant="contained"
                color={isSelected ? 'primary' : 'default'}
            >
                {skill}
            </Button>
        )
    })

    return SkillButtons
}

export default SelectSkills
