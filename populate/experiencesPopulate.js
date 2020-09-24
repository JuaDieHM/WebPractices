require('./../connection/connectionDb')
const ExperienceModel = require('./../models/experiencesModel')
const EXPERIENCES_REPOSITORY = require('./../repository/experiencesRepository')

const experiencesPopulate = () => {
    EXPERIENCES_REPOSITORY.map(async element => {
        try {
                await ExperienceModel(element).save()
                console.log('Populate', element)
            } catch(err) {
            console.error('Error: ', err)
        }
    })
}

experiencesPopulate()