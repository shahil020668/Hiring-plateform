const express = require('express');
const app = express();
app.use('/images', express.static('public/images'));
const {profileRouter, serviceRouter, reviewRouter, portfolioRouter, bookingRouter, ratingRouter, registrationRouter} = require('./routes')

const cors = require('cors')
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/',(req, res) =>{
//     res.send('Hello World!')
// })

app.use('/profile',profileRouter)
app.use('/service',serviceRouter);
app.use('/review',reviewRouter);
app.use('/port',portfolioRouter);
app.use('/bookings',bookingRouter);
app.use('/rateus',ratingRouter);1
app.use('/cusregister',registrationRouter);

app.listen(3030,()=>{
    console.log('server is running on port 3030');
})