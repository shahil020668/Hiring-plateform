const submit = async (req, res) => {
    try {
  
      console.log(req.body);
      const { name, age, email } = req.body;
      console.log(`Received data: Name = ${name}, Age = ${age}, Email = ${email}`);
    //   const newUser = new User({ name, age, email }); // Create a new user instance
    //   await newUser.save(); // Save user data to the database
      res.json({ message: 'Form submitted successfully!'});
    } catch (error) {
      console.error('Error submitting form data:', error);
      res.status(500).json({ message: 'Error saving data', error });
    }
  };

  module.exports = {submit}