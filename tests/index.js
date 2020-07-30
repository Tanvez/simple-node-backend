import chai from 'chai';
import 'regenerator-runtime/runtime.js';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);

const { expect } = chai;

describe('test', () => {
  describe('POST /', () => {
    it('should return a new string with every third letter from the original string', done => {
      chai
        .request(app)
        .post('/test')
        .send({ string_to_cut: 'iamyourlyftdriver' })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a('object');
          expect(res.body.return_string).to.equal('muydv');
          done();
        });
    });
  });
});
