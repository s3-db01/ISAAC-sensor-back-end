const request = require('supertest');
const { sequelize } = require('../models');
const app = require('../server');

describe('Post Endpoints', () => {
    it('Should create a new sensor', async () => {
        const res = await request(app)
        .post('/api/sensors')
        .send({ 
            "floor_id": 3,
            "x_coordinate": 4,
            "y_coordinate": 6
        })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('id')
        expect(res.body).toHaveProperty('floor_id')
        expect(res.body).toHaveProperty('x_coordinate')
        expect(res.body).toHaveProperty('y_coordinate')
        expect(res.body).toHaveProperty('updatedAt')
        expect(res.body).toHaveProperty('createdAt')
    })
})

describe('Get Endpoints', () =>{
     it('Should get a sensor with id "4-6"', async () =>{
         const res = await request(app)
         .get('/api/sensors/4-6')
         expect(res.statusCode).toEqual(200)
     })

     it('Should get all sensors', async () =>{
         const res = await request(app)
         .get('/api/sensors/')
         expect(res.statusCode).toEqual(200)
     })
})

describe('Put Endpoints', () =>{
    it('Schould update a sensor with id "4-6"', async () =>{
        const res = await request(app)
        .put('/api/sensors/4-6')
        .send({
            "flagged_faulty": true
        })
        expect(res.statusCode).toEqual(200)
    })
})

afterAll(done => {
    app.close();
    done();
});