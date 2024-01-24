import axios from 'axios';

const sendEmail = async (name, email, message) => {
  try {
    const response = await axios.post(
      "https://api.sendgrid.com/v3/mail/send",
      {
        personalizations: [
          {
            to: [
              {
                email: "alabiemmanuel177@gmail.com", // Replace with your email address
              },
            ],
            subject: "New Contact Form Submission",
          },
        ],
        from: {
          email: "alabiemmanuel177@yahoo.com", // Replace with the email address you want to send from
          name: "Contact Form",
        },
        content: [
          {
            type: "text/plain",
            value: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`, // Replace with your SendGrid API key
        },
      }
    );

    console.log("Email sent:", response.data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default sendEmail;
