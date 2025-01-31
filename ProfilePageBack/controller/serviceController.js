const db = require('../database');

const services = require("../models/Service");

const fetchService = async(req , res) =>{
    
    try {
        const data = await services.find();
        res.json(data);
        // console.log(data);
      } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ message: 'Error fetching data', error: err });
      }
    // res.send('hi');
}

module.exports = {
    fetchService
}