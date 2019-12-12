import { APIGatewayProxyResult } from 'aws-lambda';
import { HttpRequestError } from 'src/helpers';

export const response = async (
  callback: (...any) => any,
  payload: () => any,
  responseObject = {},
  headers = {},
  statusCode = 200,
  isBase64Encoded = false
) => {
  let res;
  const errorMessage = 'Bad Request!';

  headers['Access-Control-Allow-Origin'] = '*';
  headers['Access-Control-Allow-Credentials'] = true;
  headers['Content-Type'] = 'application/json';

  try {
    res = await payload();

    if (!res) {
      statusCode = 400;
      responseObject['error'] = true;
      responseObject['message'] = errorMessage;
    }
  } catch (error) {
    statusCode = 400;
    responseObject['error'] = true;
    responseObject['message'] = error instanceof HttpRequestError ? error.message : errorMessage;

    console.error('RESPONSE ERROR NAME: ', error.name);
    console.error('RESPONSE ERROR MESSAGE: ', error.message);
    console.error('RESPONSE ERROR STACK: ', error.stack);
    console.error('SERVICE ERROR: ', errorMessage);
  }

  return callback(null, <APIGatewayProxyResult>{
    body: JSON.stringify(res || responseObject),
    headers,
    isBase64Encoded,
    statusCode
  });
};
