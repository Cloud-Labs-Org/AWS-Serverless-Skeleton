import { response } from '@app/helpers';
import { HttpRequestError } from '@app/helpers';

test('Response should return the custom error message', (done) => {
  const callback = jest.fn();

  response(callback, () => {
    throw new Error('Error!');
  }).finally(() => {
    expect(callback).toHaveBeenCalledWith(null, {
      body: JSON.stringify({
        error: true,
        message: 'Bad Request!'
      }),
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      isBase64Encoded: false,
      statusCode: 400
    });

    done();
  });
});

test('Response should return the default error message', (done) => {
  const callback = jest.fn();

  response(callback, () => false).finally(() => {
    expect(callback).toHaveBeenCalledWith(null, {
      body: JSON.stringify({
        error: true,
        message: 'Bad Request!'
      }),
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      isBase64Encoded: false,
      statusCode: 400
    });

    done();
  });
});

test('Response should return the custom HttpRequestError message', (done) => {
  const callback = jest.fn();
  const message = 'Error Message!';

  response(callback, () => {
    throw new HttpRequestError(message);
  }).finally(() => {
    expect(callback).toHaveBeenCalledWith(null, {
      body: JSON.stringify({
        error: true,
        message: 'Error Message!'
      }),
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      isBase64Encoded: false,
      statusCode: 400
    });

    done();
  });
});

test('Response should add additional values to the body', (done) => {
  const callback = jest.fn();
  const body = {
    customKey: ''
  };

  response(callback, () => {{}}, body).finally(() => {
    expect(callback).toHaveBeenCalledWith(null, {
      body: JSON.stringify(Object.assign({}, body, {
        error: true,
        message: 'Bad Request!'
      })),
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      isBase64Encoded: false,
      statusCode: 400
    });

    done();
  });
});

test('Response should add additional headers', (done) => {
  const callback = jest.fn();
  const headers = {
    customHeader: ''
  };

  response(callback, () => true, {}, headers).finally(() => {
    expect(callback).toHaveBeenCalledWith(null, {
      body: JSON.stringify(true),
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        customHeader: ''
      },
      isBase64Encoded: false,
      statusCode: 200
    });

    done();
  });
});

test('Response should change the status code', (done) => {
  const callback = jest.fn();

  response(callback, () => true, {}, {}, 201).finally(() => {
    expect(callback).toHaveBeenCalledWith(null, {
      body: JSON.stringify(true),
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      isBase64Encoded: false,
      statusCode: 201
    });

    done();
  });
});

test('Response should return base64Encoded content', (done) => {
  const callback = jest.fn();

  response(callback, () => true, {}, {}, undefined, true).finally(() => {
    expect(callback).toHaveBeenCalledWith(null, {
      body: JSON.stringify(true),
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      isBase64Encoded: true,
      statusCode: 200
    });

    done();
  });
});
