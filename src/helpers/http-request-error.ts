export class HttpRequestError extends Error {
  name = 'HttpRequestError';

  constructor(message?: string) {
    // 'Error' breaks prototype chain here
    super(message);

    // restore prototype chain
    const actualProto = new.target.prototype;

    Object.setPrototypeOf(this, actualProto);
  }
}
