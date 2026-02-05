/**
 * Auth fixtures
 */

export const tokenSuccess = {
  access_token: 'mock-jwt-token-for-testing',
  token_type: 'Bearer',
  expires_in: 360000, // 100 hours in seconds
  scope: 'all',
};

export const tokenFailure = {
  error: 'invalid_client',
  error_description: 'Bad credentials',
};
