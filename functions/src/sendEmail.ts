import { createTransport } from 'nodemailer';
import { config } from 'firebase-functions';

import { validateBody } from './helpers';
import { RequestBody } from './types';

export default (body: RequestBody) => {
  const transporter = createTransport({
    host: 'smtp.dreamhost.com',
    port: 465,
    secure: true,
    auth: {
      user: config().email.address,
      pass: config().email.password,
    },
  });

  try {
    const { firstName, lastName, email, subject, message } = validateBody(body);

    const mailOptions = {
      from: `Tiago Ribeiro <${config().email.address}>`,
      to: 'tiagoribeiro.1803@gmail.com',
      subject: 'New message from possible customer',
      html: `First name: ${firstName}<br/>Last name: ${lastName}<br/>Email: ${email}<br/>Subject: ${subject}<br/>Message: ${message} `,
    };

    transporter.sendMail(mailOptions, (err: any) => {
      if (err) {
        throw Error(JSON.stringify({ message: err, code: 500 }));
      }
    });
  } catch (err) {
    return err;
  }
};
