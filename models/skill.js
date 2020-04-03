const skills = [
    {skill: "HTML", learned: true},
    {skill: "CSS", learned: true},
    {skill: "Javascript", learned: true},
    {skill: "Express", learned: false}
]

const getAll = () => {
    return skills
}

const getOne = (id) => {
    return skills[id]
}

const create = (skill) => {
    skills.push(skill)
}

const deleteOne = (id) => {
    skills.splice(id, 1)
}

module.exports = {
    getAll,
    getOne,
    create, 
    deleteOne
}