import { APIGatewayProxyResult } from 'aws-lambda';
import { HttpRequestError } from '@app/helpers';

export const response = async (
  callback: (...any) => any,
  payload: () => any,
  errorResponseObject = {},
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
      errorResponseObject['error'] = true;
      errorResponseObject['message'] = errorMessage;
    }
  } catch (error) {
    statusCode = 400;
    errorResponseObject['error'] = true;
    errorResponseObject['message'] = error instanceof HttpRequestError ? error.message : errorMessage;

    // Debug Logs For CloudWatch
    console.error('RESPONSE ERROR NAME: ', error.name);
    console.error('RESPONSE ERROR MESSAGE: ', error.message);
    console.error('RESPONSE ERROR STACK: ', error.stack);
    console.error('SERVICE ERROR: ', errorMessage);
  }

  return callback(null, <APIGatewayProxyResult>{
    body: JSON.stringify(res || errorResponseObject),
    headers,
    isBase64Encoded,
    statusCode
  });
};
