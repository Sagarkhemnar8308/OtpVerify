const express = require('express');
const app = express();
app.use(express.json());


let otp;

app.post('/sendotp', (req, resp) => {

    let number = req.body.number;

    if (otp = Math.floor(100000 + Math.random() * 900000)) {
        console.log(`otp send successfully and otp is ${otp}`);
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

    votp = req.params.votp;

    if (votp == otp) {
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

