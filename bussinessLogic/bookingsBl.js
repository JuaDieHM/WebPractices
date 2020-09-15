const BOOKINGS = require('./../repository/bookingRepository')

const findAllBookings = () => {
    return { booking : BOOKINGS }
}

const addBooking = (booking) => {
    const isExistingBooking = BOOKINGS.find( el => Number(booking.id) === el.id )
    if (isExistingBooking === undefined) BOOKINGS.push(booking)
    return { isExistingBooking }
}

module.exports = {
    findAllBookings,
    addBooking
}