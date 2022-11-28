const { app } = require('../server');
const supertest = require('supertest');
const { describe } = require('yargs');
const { it } = require('node:test');
const request = supertest(app);

describe('APIServer', () => {
  it('handles root path', async () => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.text).teBeTruthy();
    expect(response.text).toEqual('Hello World');
  });

  it('handes invalid requests', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });

  it('handles errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual('/bad');
  });
});

