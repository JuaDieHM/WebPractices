const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const port = 3001

// Router
const experiencesRouters = require('./routes/experiences')

app.use('/experiences', experiencesRouters)

/** Sample endpoints:
  - localhost:3001/experiences/all
  - localhost:3001/experiences/top5
  - localhost:3001/experiences/detail/1
 */
 

app.listen(port, () => {
 console.log(`Server running ${port}`)
})