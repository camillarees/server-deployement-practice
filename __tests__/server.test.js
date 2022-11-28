const { app } = require('../server');
const supertest = require('supertest');
const { describe } = require('yargs');
const { it } = require('node:test');
const request = supertest(app);

describe('APIServer', () => {
    it('handles root path', aync () => {
        const response = await request.get('/');

        expect(response.status).toBe(200);
        expect(response.text).teBeTruthy();
        expect(response.text).toEqual('Hello World')
    });
});
