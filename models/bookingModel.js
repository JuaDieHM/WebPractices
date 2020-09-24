const mongoose=require('mongoose')
const { mongo } =require('mongoose')
constmoongose=require('mongoose')
const { Schema } =mongoose
 
constBookingSchema=newSchema({
    name:String,
    email:String,
    phone:String,
    booking_date:Date,
    experience_id:String
})
 
constBookingModel=moongose.model('bookings', BookingSchema)
 
module.exports=BookingModel

