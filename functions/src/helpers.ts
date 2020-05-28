import * as corsConfig from 'cors';

import { RequestBody } from './types';

export const cors = corsConfig({
  origin: [
    'http://localhost:5000',
    'https://tiago-ribeiro.com',
    'https://www.tiago-ribeiro.com',
  ],
  methods: ['post'],
});

export const validateBody = ({
  firstName,
  lastName,
  email,
  subject,
  message,
}: RequestBody) => {
  const errs = [];

  if (!firstName) {
    errs.push({ key: 'firstName', msg: 'First name is required' });
  }

  if (!lastName) {
    errs.push({ key: 'lastName', msg: 'Last name is required' });
  }

  if (!email) {
    errs.push({ key: 'email', msg: 'Email is required' });
  }

  if (!subject) {
    errs.push({ key: 'subject', msg: 'Subject is required' });
  }

  if (!message) {
    errs.push({ key: 'message', msg: 'Message is required' });
  }

  if (errs.length) {
    throw Error(JSON.stringify({ message: errs, code: 400 }));
  }

  return { firstName, lastName, email, subject, message };
};
