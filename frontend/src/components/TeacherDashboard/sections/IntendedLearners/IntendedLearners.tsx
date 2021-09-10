import { FC } from 'react'
import { useDispatch } from 'react-redux'
import Objective from './Objective'
import Requirement from './Requirement'
import TargetAudience from './TargetAudience'

const IntendedLearners = () => {
    return (
        <div>
            <div>Intended learners</div>
            <div>
                The following descriptions will be publicly visible on your Course Landing Page and will have a direct
                impact on your course performance. These descriptions will help learners decide if your course is right
                for them.
            </div>
            <Objective />
            <Requirement />
            <TargetAudience />
        </div>
    )
}
export default IntendedLearners
