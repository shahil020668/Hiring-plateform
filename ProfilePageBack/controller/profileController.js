const db = require('../database');

const Profile = require('../models/Profile')
const fetchDetails = async(req , res) =>{
    
    try {
        const data = await Profile.findOne();
        res.json(data);
        // console.log(data);
      } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ message: 'Error fetching data', error: err });
      }
    // res.send('hi');
}

// const availability = async(req, res) =>{
//   const { date } = req.query; // Get the date from the query params

//   if (!date) {
//     return res.status(400).json({ error: "Date is required" });
//   }

//   try {
//     const availability = await Profile.findOne({ date });

//     if (!availability) {
//       return res.status(404).json({ error: "No availability found for the selected date" });
//     }

//     // Return availability data
//     res.json(availability.times);
//   } catch (error) {
//     console.error("Error fetching availability:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// }

module.exports = {
    fetchDetails,
    // availability
}