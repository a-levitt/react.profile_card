import Skill from './Skill'

function SkillList() {
    return (
        <div className='skill-list'>
            <Skill skill='React' emoji='⚛️' color='#0096FF' />
            <Skill skill='Go' emoji='🐿️' color='#ADD8E6' />
            <Skill skill='AQA' emoji='⚙️️' color='orange' />
            <Skill skill='Java' emoji='☕' color='red' />
            <Skill skill='JavaScript' emoji='👨‍💻' color='yellow' />
            <Skill skill='Python' emoji='🐍' color='lime' />
        </div>
    )
}

export default SkillList;