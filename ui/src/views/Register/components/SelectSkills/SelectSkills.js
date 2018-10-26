import * as React from 'react'
import Button from '@material-ui/core/Button'

const SUPPORTED_SKILLS = ['c_sharp', 'f_sharp', 'javascript', 'python', 'go']

class SelectSkills extends React.Component<Props, State> {
    // state = {
    //     selectedSkills: []
    // }

    toggleSkill = skill => {
        // const {  } = this.state
        const { onChange, selectedSkills } = this.props

        let selectedSkillsPatch = [...selectedSkills]
        const selectedSkillIndex = selectedSkills.indexOf(skill)
        if (selectedSkillIndex === -1) {
            selectedSkillsPatch.push(skill)
        } else {
            selectedSkillsPatch.splice(selectedSkillIndex, 1)
        }
        console.log(selectedSkillsPatch)
        // this.setState({ selectedSkills: selectedSkillsPatch })
        onChange(selectedSkillsPatch)
    }

    render() {
        const { selectedSkills } = this.props

        const SkillsToggles = SUPPORTED_SKILLS.map(skill => {
            return (
                <Button
                    key={skill}
                    onClick={() => this.toggleSkill(skill)}
                    variant="contained"
                    color={selectedSkills.includes(skill) ? 'primary' : 'default'}
                >
                    {skill}
                </Button>
            )
        })

        return <div>{SkillsToggles}</div>
    }
}

export default SelectSkills
