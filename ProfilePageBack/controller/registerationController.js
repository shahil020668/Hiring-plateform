const customer = async (req, res) => {
    try {
  
      console.log(req.body);
      
      res.json({ message: 'Form submitted successfully!'});
    } catch (error) {
      console.error('Error submitting form data:', error);
      res.status(500).json({ message: 'Error saving data', error });
    }
  };

  module.exports = {customer}