const {
    findAllBookings,
    addBooking,
    registerBooking
} = require('./../bussinessLogic/bookingsBl')

const allBooking = (req, res) => {
    const response = findAllBookings()
    res.json(response)
}

const add = (req, res) => {
    const { id } = req.params
    try {
        const response = addBooking(id)
        res.json(response)
    } catch (error) {
        res.status(404).send(error)
    }
}

const register = (user, res) => {
    try {
        const response = registerBooking(user)
        res.json(response)
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = {
    allBooking, add, register
}