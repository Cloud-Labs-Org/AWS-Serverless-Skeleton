import { HttpRequestError } from '@app/helpers';

test('HttpRequestError Class', () => {
  const message = 'Error Message!';
  const httpRequestError = new HttpRequestError(message);

  expect(httpRequestError.message).toEqual(message);
});
