import { handler } from '@app/handlers/hello-world';

test('HelloWorldHandler should say "Hello World!"', (done) => {
  const callback = jest.fn();

  handler({}, {}, callback).finally(() => {
    expect(callback).toHaveBeenCalledWith(null, {
      body: JSON.stringify({
        message: 'Hello World!'
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
