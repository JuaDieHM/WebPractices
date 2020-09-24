const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
const port = 3001

// mongo connection
require('./connection/connectionDb')

// Router
const experiencesRouters = require('./routes/experiences')
const bookingRouters = require('./routes/booking')

app.use('/experiences', experiencesRouters)
app.use('/bookings', bookingRouters)

/** Sample endpoints:
  - localhost:3001/experiences/all
  - localhost:3001/experiences/top5
  - localhost:3001/experiences/detail/1
 */
 

app.listen(port, () => {
 console.log(`Server running ${port}`)
})