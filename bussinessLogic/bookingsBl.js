const BOOKINGS = require('./../repository/bookingRepository')
const BookingModel = require('../models/bookingModel')

const findAllBookings = () => {
    return { booking : BOOKINGS }
}

const addBooking = (booking) => {
    const isExistingBooking = BOOKINGS.find( el => Number(booking.id) === el.id )
    if (isExistingBooking === undefined) BOOKINGS.push(booking)
    return { isExistingBooking }
}

const registerBooking = async (user) => {
    try {
        await BookingModel.create(user)
        return ('Reserva registrada para su usuario.')
    } catch(error) {
        throw error
    }
}

module.exports = {
    findAllBookings,
    addBooking,
    registerBooking
}