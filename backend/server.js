const express = require("express");

// require('dotenv').config()
const app = express();
const cors = require("cors");
// const PORT = process.env.API_PORT;
const mail = require('./common/send_email')
// Bodyparser middleware, extended false does not allow nested payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const corsOpts = {
    origin: '*',

    methods: [
        'GET',
        'POST',
    ],

    allowedHeaders: [
        'Content-Type',
    ],
};
app.use(cors(corsOpts));


app.post('/send-email',(req, res)=>{
    let {name, phoneNumber, customerEmail, emailBody} = req.body;
    let mailDetailsToConquer = {
        to: 'info@conquerescaperooms.com',
        subject: 'Customer Request For Information',
        html: `<h6>Customer Name: ${name}</h6><br/><h6>Customer Email: ${customerEmail}</h6><br/><h6>Customer Phone #: ${phoneNumber}</h6><br/><h6>Customer Message: ${emailBody}</h6><br/>`
    };
    let mailDetailsToCustomer = {
        to: customerEmail,
        subject: 'Customer Request For Information',
        html: `<h4>Thank you</h4><br/><p>We have received your information, and we will be back to you as soon as possible. Have a great day!</p>`
    }
    mail.mail(mailDetailsToConquer);
    mail.mail(mailDetailsToCustomer)
     res.status(200).json({ success: `Email sent successfully`})
});

app.get('/', (req, res) => {
    res.send('Good mornning')
});



app.listen(3001, () => console.log(`Backend listening on port ${3001}!`));