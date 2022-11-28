import request from 'supertest';
import app from '../app.js'

before(async () => {
    
const payload = {
    'user_nombre': 'J',
    'user_email': 'Javier@gmail.com',
    'user_password': 'javi8'
}

await request(app).post('/auth/register').send(payload);
    
})  