const express = require('express');
const app = express();
app.use(express.json());


let otp;
const otpGenerator = require('otp-generator');
const Otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, digits: true });
app.post('/sendotp', (req, resp) => {
    let number = req.body.number;
    if (Otp) {
        console.log(`otp send successfully and otp is ${Otp}`);
        resp.json({
            "Mobile Number": number,
            "message": "otp send successfully",
            "otp": otp,
        })

    } else {
        console.log('failed to send otp.')
        resp.json({
            "message": "failed to send otp.",
        })
    }
});

app.get('/verifyotp/:votp', (req, resp) => {

    let votp = req.params.votp;

    if (votp == Otp) {
        resp.json({
            "message": "Otp verified Successfully...",
        })
    } else {
        resp.json({
            "message": "Invalid Otp !",
        })
    }

});

app.listen(4200, () => {
    console.warn('server is started on 4200');
});

