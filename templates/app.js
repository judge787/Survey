const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 8080;

const fs = require('fs');
const password = fs.readFileSync('password.txt', 'utf8').split('\n')[0];
// console.log(password);

app.use(cors());
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '')));

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'index.html'));
});

// Route to handle the form submission
app.post('/submit-form', async (req, res) => {
  // const { name, email, message } = req.body;
  const formData = req.body;

  try {
    // Create a transporter using your Gmail account
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jashanjudge2002@gmail.com',
        pass: 'xfkvhqyelzvlynrg',
      },
    });

    // Compose the email
    const mailOptions = {
      from: 'jashanjudge2002@gmail.com',
      to: 'jashanjudge87@gmail.com',
      subject: 'Form Submission',
      // text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      attachments: [
        {
          filename: 'data.json',
          content: JSON.stringify(formData)
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
