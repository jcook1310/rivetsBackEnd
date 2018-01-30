const request = require('supertest')
const app = require('../app')
jest.mock('../models/rivet')

describe("App", () => {
    //loads page without crashing
    it("Tests the root path", () => {
        return request(app).get("/").then(response => {
            expect(response.statusCode).toBe(200)
        })
    })
    //checks the rivet index for the name copper
    it("Lists rivets", () => {
        return request(app).get("/rivets").then(response => {
            expect(response.statusCode).toBe(200)
            expect(response.body.rivets[0].title).toBe('Copper')
        })
    })
    //create a rivet page
    it("Creates rivets", () => {
        return request(app)
        .post("/rivets")
        .send({
            title: 'Gold',
            summary: 'Gold rivet',
            description: 'A gold rivet from the gold rush of the 1800s.'
        })
        .then(response => {
            expect(response.statusCode).toBe(201)
            expect(response.body.rivet.title).toBe('Gold')
            expect(response.body.rivet.summary).toBe('Gold rivet')
            expect(response.body.rivet.description).toBe('A gold rivet from the gold rush of the 1800s.')
        })
    })
    //validation Tests
    it("Validates title when creating rivet", () => {
        return request(app)
        .post("/rivets")
        .send({
            summary: "Silver rivet",
            description: "All the way from Mt Everest, the finest silver money can buy."
        })
        .then(response => {
            expect(response.statusCode).toBe(400)
            const error = response.body.errors.validations[0]
            expect(error.param).toBe('title')
            expect(error.msg).toBe('Is required')
        })
    })
    it("Validates summary when creating rivet", () => {
        return request(app)
        .post("/rivets")
        .send({
            title: "Silver",
            description: "All the way from Mt Everest, the finest silver money can buy."
        })
        .then(response => {
            expect(response.statusCode).toBe(400)
            const error = response.body.errors.validations[0]
            expect(error.param).toBe('summary')
            expect(error.msg).toBe('Is required')
        })
    })
    it("Validates description when creating rivet", () => {
        return request(app)
        .post("/rivets")
        .send({
            title: "Silver",
            summary: "Silver rivet"
        })
        .then(response => {
            expect(response.statusCode).toBe(400)
            const error = response.body.errors.validations[0]
            expect(error.param).toBe('description')
            expect(error.msg).toBe('Is required')
        })
    })
})
