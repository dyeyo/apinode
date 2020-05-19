const { app } = require('../server')
const request = require('supertest')

describe('test classr', () => {
    it('get ', (done) => {
        request(app).get('/api/classrooms').then((response) => {
            expect(response.statusCode).toBe(200)
            done()
        })
    })
    it('post ', (done) => {
        const body = {
            name: "nombre"
        }
        request(app).post('/api/classrooms').send(body).then((response) => {
            expect(response.statusCode).toBe(201)
            done()
        })
    })
})
