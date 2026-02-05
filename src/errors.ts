/**
 * Custom error classes for the HaloPSA client
 */

/**
 * Base error class for all HaloPSA errors
 */
export class HaloPsaError extends Error {
  /** HTTP status code if applicable */
  readonly statusCode: number;
  /** Raw response data if available */
  readonly response: unknown;

  constructor(message: string, statusCode: number = 0, response?: unknown) {
    super(message);
    this.name = 'HaloPsaError';
    this.statusCode = statusCode;
    this.response = response;
    Object.setPrototypeOf(this, HaloPsaError.prototype);
  }
}

/**
 * Authentication error (400 bad credentials, 401 unauthorized)
 */
export class HaloPsaAuthenticationError extends HaloPsaError {
  constructor(message: string, statusCode: number = 401, response?: unknown) {
    super(message, statusCode, response);
    this.name = 'HaloPsaAuthenticationError';
    Object.setPrototypeOf(this, HaloPsaAuthenticationError.prototype);
  }
}

/**
 * Forbidden error (403 permission denied)
 */
export class HaloPsaForbiddenError extends HaloPsaError {
  constructor(message: string, response?: unknown) {
    super(message, 403, response);
    this.name = 'HaloPsaForbiddenError';
    Object.setPrototypeOf(this, HaloPsaForbiddenError.prototype);
  }
}

/**
 * Resource not found error (404)
 */
export class HaloPsaNotFoundError extends HaloPsaError {
  constructor(message: string, response?: unknown) {
    super(message, 404, response);
    this.name = 'HaloPsaNotFoundError';
    Object.setPrototypeOf(this, HaloPsaNotFoundError.prototype);
  }
}

/**
 * Validation error (400 with field-level errors)
 */
export class HaloPsaValidationError extends HaloPsaError {
  /** Field-level validation errors */
  readonly errors: Array<{ field: string; message: string }>;

  constructor(message: string, errors: Array<{ field: string; message: string }> = [], response?: unknown) {
    super(message, 400, response);
    this.name = 'HaloPsaValidationError';
    this.errors = errors;
    Object.setPrototypeOf(this, HaloPsaValidationError.prototype);
  }
}

/**
 * Rate limit exceeded error (429)
 */
export class HaloPsaRateLimitError extends HaloPsaError {
  /** Suggested retry delay in milliseconds */
  readonly retryAfter: number;

  constructor(message: string, retryAfter: number = 5000, response?: unknown) {
    super(message, 429, response);
    this.name = 'HaloPsaRateLimitError';
    this.retryAfter = retryAfter;
    Object.setPrototypeOf(this, HaloPsaRateLimitError.prototype);
  }
}

/**
 * Server error (500+)
 */
export class HaloPsaServerError extends HaloPsaError {
  constructor(message: string, statusCode: number = 500, response?: unknown) {
    super(message, statusCode, response);
    this.name = 'HaloPsaServerError';
    Object.setPrototypeOf(this, HaloPsaServerError.prototype);
  }
}
