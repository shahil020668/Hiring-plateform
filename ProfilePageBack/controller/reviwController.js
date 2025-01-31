const db = require('../database');

const Review = require("../models/Review");

const fetchReview = async(req , res) =>{
    
    try {
        const data = await Review.find();
        res.json(data);
        // console.log(data);
      } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ message: 'Error fetching data', error: err });
      }
    // res.send('hi');
}

module.exports = {
    fetchReview
}