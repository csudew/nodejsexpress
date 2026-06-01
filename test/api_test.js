'use strict';
const config = require('../config');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app');

chai.use(chaiHttp);

describe('GET /api/status', () => {
    it('returns JSON status ok', (done) => {
        chai.request(`http://localhost:${config.port}`)
            .get('/api/status')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('status').eql('ok');
                res.body.should.have.property('app').eql('Contoso');
                done();
            });
    });
});
