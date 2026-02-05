/**
 * Configuration types and defaults for the HaloPSA client
 */

/**
 * Rate limiting configuration
 */
export interface RateLimitConfig {
  /** Whether rate limiting is enabled (default: true) */
  enabled: boolean;
  /** Maximum requests per window (default: 500) */
  maxRequests: number;
  /** Window duration in milliseconds (default: 180000 = 3 minutes) */
  windowMs: number;
  /** Threshold percentage to start throttling (default: 0.8 = 80% = 400 requests) */
  throttleThreshold: number;
  /** Delay between retries on 429 (default: 5000ms) */
  retryAfterMs: number;
  /** Maximum retry attempts on rate limit errors (default: 3) */
  maxRetries: number;
}

/**
 * Default rate limit configuration for HaloPSA
 * 500 requests per 3-minute rolling window
 */
export const DEFAULT_RATE_LIMIT_CONFIG: RateLimitConfig = {
  enabled: true,
  maxRequests: 500,
  windowMs: 180_000, // 3 minutes
  throttleThreshold: 0.8, // 80% = 400 requests
  retryAfterMs: 5_000,
  maxRetries: 3,
};

/**
 * Configuration for the HaloPSA client
 */
export interface HaloPsaConfig {
  /** OAuth 2.0 Client ID */
  clientId: string;
  /** OAuth 2.0 Client Secret */
  clientSecret: string;
  /** Tenant name (used to construct the base URL: https://{tenant}.halopsa.com) */
  tenant?: string;
  /** Explicit base URL (alternative to tenant) */
  baseUrl?: string;
  /** Tenant ID for multi-tenant applications */
  tenantId?: string;
  /** OAuth scope (default: 'all') */
  scope?: string;
  /** Rate limiting configuration */
  rateLimit?: Partial<RateLimitConfig>;
}

/**
 * Resolved configuration with all defaults applied
 */
export interface ResolvedConfig {
  clientId: string;
  clientSecret: string;
  baseUrl: string;
  tenantId?: string;
  scope: string;
  rateLimit: RateLimitConfig;
}

/**
 * Resolves a configuration object by applying defaults
 */
export function resolveConfig(config: HaloPsaConfig): ResolvedConfig {
  // Determine base URL
  let baseUrl: string;
  if (config.baseUrl) {
    // Remove trailing slash if present
    baseUrl = config.baseUrl.replace(/\/$/, '');
  } else if (config.tenant) {
    baseUrl = `https://${config.tenant}.halopsa.com`;
  } else {
    throw new Error('Either tenant or baseUrl must be provided');
  }

  return {
    clientId: config.clientId,
    clientSecret: config.clientSecret,
    baseUrl,
    tenantId: config.tenantId,
    scope: config.scope ?? 'all',
    rateLimit: {
      ...DEFAULT_RATE_LIMIT_CONFIG,
      ...config.rateLimit,
    },
  };
}
