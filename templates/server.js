const express = require('express');
const nodemailer = require('nodemailer');
const fs = require('fs');

// Read the JSON file
const jsonData = fs.readFileSync('formData (66).json');

const app = express();
const port = 3000;

// Middleware to parse the request body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Route to handle the form submission
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a transporter using your Gmail account
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'luke6799@gmail.com',
        pass: 'kjivqvarqlwwyudc',
      },
    });

    // Compose the email
    const mailOptions = {
      from: 'luke6799@gmail.com',
      to: 'kjdakdkkdjjasndnajn@gmail.com',
      subject: 'Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      attachments: [
        {
          filename: 'data.json',
          content: jsonData
        }
      ]
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log('Email sent successfully');
    res.send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
