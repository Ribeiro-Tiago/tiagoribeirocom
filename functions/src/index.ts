import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { config as dotenv } from 'dotenv';
import { resolve } from 'path';

import { cors } from './helpers';
import sendEmail from './sendEmail';

admin.initializeApp();

dotenv({ path: resolve(__dirname, '../.env') });

exports.sendMail = functions
  .region('europe-west1')
  .https.onRequest((req, res) => {
    return cors(req, res, async () => {
      const err = await sendEmail(req.body);

      return err
        ? res.status(err.status).send(err.message)
        : res.status(201).send(JSON.stringify({ status: 201 }));
    });
  });
