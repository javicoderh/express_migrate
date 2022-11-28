import request from 'supertest';
import app from '../app.js';

async function getToken() {
  const payload = {
    'user_nombre': 'J',
    'user_email': 'javier@gmail.com',
    'user_password': 'javi8'
  }
  const { body } = await request(app).post('/auth/login').send(payload);
  return body.accessToken;
}

export default getToken;