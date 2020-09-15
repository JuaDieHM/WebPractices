const router = require('express').Router()
const { allBooking, add } = require('./../controllers/bookingCtrl')

router.get('/', allBooking)
router.post('/addbooking', add)

module.exports = router