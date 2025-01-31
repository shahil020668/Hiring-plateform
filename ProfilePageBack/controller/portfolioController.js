const db = require('../database');

const Portfolio = require('../models/Portfolio')
const portDetails = async(req , res) =>{
    
    try {
        const data = await Portfolio.find();
        res.json(data);
        // console.log(data);
      } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ message: 'Error fetching data', error: err });
      }
    // res.send('hi');
}

module.exports = {
    portDetails
}