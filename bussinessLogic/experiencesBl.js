const EXPERIENCES = require('./../repository/experiencesRepository')

const findAllExperiences = () => {
    return { experiences : EXPERIENCES }
}

const findTop5Experiences = () => {
    const experienceSorted = EXPERIENCES.sort( (a, b) => {
        if( a.score  < b.score) return 1
        if( a.score > b.score ) return -1
        return 0
    })
    const top5Experiences = experienceSorted.slice(0, 5)
    return { top5: top5Experiences }
}

const findExperience = (id) => {
    const experience = EXPERIENCES.find( el => Number(id) === el.id)
    if (experience === undefined) throw('Not found')
    return { experiences }
}

module.exports = {
    findAllExperiences, 
    findTop5Experiences, 
    findExperience
}