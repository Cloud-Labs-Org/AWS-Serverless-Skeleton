import { response } from '@app/helpers';

export const handler = async (event, context, callback) => {
  // If you have an Authorizer
  // const claims = event.requestContext.authorizer.claims

  // GET Parameters from the URL
  // event.queryStringParameters

  // POST Parameters
  // JSON.parse(event.body)

  // Parameters in the URL: /orders/{id}
  // event.pathParameters

  response(callback, () => ({ message: 'Hello World!' }));
};
