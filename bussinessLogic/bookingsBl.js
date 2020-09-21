const BOOKINGS = require('./../repository/bookingRepository')

const findAllBookings = () => {
    return { booking : BOOKINGS }
}

const addBooking = (booking) => {
    const isExistingBooking = BOOKINGS.find( el => Number(booking.id) === el.id )
    if (isExistingBooking === undefined) BOOKINGS.push(booking)
    return { isExistingBooking }
}

const registerBooking = (user) => {
    const {name, phoneNumber, email } = user

    if (name !== '' && phoneNumber !== '' && email !== ''){    
        BOOKINGS.push(user)
        return (
            `Usuario registrado  la informacion es: 
            Id: ${user.id},
            Name: ${user.name},
            PhoneNumber: ${user.phoneNumber},
            Email: ${user.email},
            Date: ${user.date}`
        )
    }
}

module.exports = {
    findAllBookings,
    addBooking,
    registerBooking
}