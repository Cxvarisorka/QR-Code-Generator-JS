import inquirer from "inquirer";
import qr from 'qr-image';
import fs from 'fs';

inquirer
    .prompt([{
        message: 'Enter url to generate QR code: ',
        name: 'URL',
    }])
    .then((answers)=>{
        const url = answers.URL;
        const qrCode = qr.image(url);
        qrCode.pipe(fs.createWriteStream('QR-image.png'));
    })
