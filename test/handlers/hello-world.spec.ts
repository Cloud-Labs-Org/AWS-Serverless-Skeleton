import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';

import { handler } from '@app/handlers/hello-world';

chai.should();
chai.use(sinonChai);

describe('Hello World Handler', () => {
  it('Should say "Hello World!"', (done) => {
    const callback = sinon.spy();

    handler({}, {}, callback).finally(() => {
      callback.should.have.been.calledWith(null, {
        body: JSON.stringify({
          'message':'Hello World!'
        }),
        headers: {
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
        isBase64Encoded: false,
        statusCode: 200
      });
      done();
    });
  });
});
