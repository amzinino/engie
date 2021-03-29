const request = require('supertest');
import { Server } from './server';

describe('/api/agencies', function() {

  it('should send agencies list data', async () => {
    
    const res = await request(Server())
      .get('/api/agencies')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('data')
    expect(res.body.data).toHaveLength(3)
  })
});
