import request from 'supertest';
import chai from 'chai';
import app from '../app.js';
import User from '../models/Users.js';

const { expect } = chai;

describe('Test the auth endpoints', () => {

    it('should allow to create users', async () => {
        const payload = {
            'user_nombre': 'J',
            'user_email': 'javier@gmail.com',
            'user_password': 'javi8'
        }
        const { body, status } = await request(app).post('/auth/register').send(payload);
        expect(status).to.equal(201);        
        expect(body).to.have.property('user_id');
        const user_id = body.user_id;
        const user = await User.findByPk(user_id);
        expect(user.user_name).to.equal(payload.user_name);
    });
    

    it('should return 400 if password does not match the payload password', async () => {
        const payload = {
         'user_nombre': 'J',
         'user_email': 'javier@gmail.com',
         'user_password': 'jav8'
        }
        const { body, status } = await request(app).post('/auth/register').send(payload);
        expect(status).to.equal(400);
        expect(body.message).contains('invalid password');
    });    

    it('should allow to login', async () => {
        const payload = {
            'user_email': 'javier@gmail.com',
            'user_password': 'javi8'
        }
        const { body, status } = await request(app)
            .post('/auth/login')
            .type("json")
            .send(payload);
        expect(status).to.equal(200);
        expect(body.message).contains("User created");
    });

    it("should fail if email is not incorrect", async () => {
        const payload = {
            'user_email': 'wrongmail@test.com',
            'user_password': 'javi8'
        }
        const { body, status } = await request(app)
            .post('/auth/login')
            .type("json")
            .send(payload);
        expect(status).to.equal(404);
        expect(body.message).contains(`no user found with email ${req.body.email}`);
    });

    it("should fail if password is not incorrect", async () => {
        const payload = {
            'user_email': 'javier@gmail.com',
            'user_password': 'javu9'
        }
        const { body, status } = await request(app)
            .post('/auth/login')
            .type("json")
            .send(payload);
        expect(status).to.equal(401);
        expect(body.message).contains('Invalid Password');
    });
});