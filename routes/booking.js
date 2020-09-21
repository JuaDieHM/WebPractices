const router = require('express').Router()
const { allBooking, add, register } = require('./../controllers/bookingCtrl')

router.get('/', allBooking)

router.post('/addbooking', )
router.post('/register',  (req, res) => {
    const user = req.body;
    register(user, res)
    return res.send(`Ejecuto el registro de booking. - ${user.id}, ${user.name}, ${user.phoneNumber}, ${user.email}, ${user.date}`)
})

module.exports = router