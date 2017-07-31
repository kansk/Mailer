const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'out-cloud.mms.t-systems-service.com',
//    service: 'gmail',
    port: 25,
    secure: false, // secure:true for port 465, secure:false for port 587
/**
    auth: {
            user: 'k.praveen15703@gmail.com',
            pass: 'password'
        },
**/
        tls:
        {
            rejectUnauthorized:false
        }
/**/
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Praveen Kumar 👻" <Mailer@praveentest.com>', // sender address
    to: 'praveen3.k@aricent.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});