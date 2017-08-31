class CustomError {
  constructor(message) {
    this.message = message || this.constructor.name;
    this.stack = (new Error()).stack;
  }
}
CustomError.prototype = Object.create(Error.prototype);

class InvalidArgumentError extends CustomError {}

class RuntimeError extends CustomError {}

export { InvalidArgumentError, RuntimeError };

