/**
 * Rate limiter tests
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { RateLimiter } from '../../src/rate-limiter.js';
import type { RateLimitConfig } from '../../src/config.js';

describe('RateLimiter', () => {
  let config: RateLimitConfig;
  let rateLimiter: RateLimiter;

  beforeEach(() => {
    config = {
      enabled: true,
      maxRequests: 100,
      windowMs: 60000,
      throttleThreshold: 0.8,
      retryAfterMs: 5000,
      maxRetries: 3,
    };
    rateLimiter = new RateLimiter(config);
  });

  describe('recordRequest', () => {
    it('should record requests', () => {
      expect(rateLimiter.getRemainingRequests()).toBe(100);

      rateLimiter.recordRequest();
      expect(rateLimiter.getRemainingRequests()).toBe(99);

      rateLimiter.recordRequest();
      expect(rateLimiter.getRemainingRequests()).toBe(98);
    });

    it('should not record when disabled', () => {
      const disabledLimiter = new RateLimiter({ ...config, enabled: false });

      disabledLimiter.recordRequest();
      disabledLimiter.recordRequest();

      expect(disabledLimiter.getRemainingRequests()).toBe(100);
    });
  });

  describe('getCurrentRate', () => {
    it('should return current rate as fraction', () => {
      expect(rateLimiter.getCurrentRate()).toBe(0);

      // Record 50 requests (50%)
      for (let i = 0; i < 50; i++) {
        rateLimiter.recordRequest();
      }

      expect(rateLimiter.getCurrentRate()).toBe(0.5);
    });
  });

  describe('getRemainingRequests', () => {
    it('should return remaining requests', () => {
      expect(rateLimiter.getRemainingRequests()).toBe(100);

      for (let i = 0; i < 25; i++) {
        rateLimiter.recordRequest();
      }

      expect(rateLimiter.getRemainingRequests()).toBe(75);
    });
  });

  describe('calculateRetryDelay', () => {
    it('should use exponential backoff', () => {
      expect(rateLimiter.calculateRetryDelay(0)).toBe(5000);
      expect(rateLimiter.calculateRetryDelay(1)).toBe(10000);
      expect(rateLimiter.calculateRetryDelay(2)).toBe(20000);
      expect(rateLimiter.calculateRetryDelay(3)).toBe(30000); // Capped at 30s
    });
  });

  describe('shouldRetry', () => {
    it('should return true when under max retries', () => {
      expect(rateLimiter.shouldRetry(0)).toBe(true);
      expect(rateLimiter.shouldRetry(1)).toBe(true);
      expect(rateLimiter.shouldRetry(2)).toBe(true);
    });

    it('should return false when at or over max retries', () => {
      expect(rateLimiter.shouldRetry(3)).toBe(false);
      expect(rateLimiter.shouldRetry(4)).toBe(false);
    });
  });

  describe('parseRetryAfter', () => {
    it('should parse numeric seconds', () => {
      expect(rateLimiter.parseRetryAfter('60')).toBe(60000);
      expect(rateLimiter.parseRetryAfter('30')).toBe(30000);
    });

    it('should return default for null', () => {
      expect(rateLimiter.parseRetryAfter(null)).toBe(5000);
    });

    it('should return default for invalid values', () => {
      expect(rateLimiter.parseRetryAfter('invalid')).toBe(5000);
    });
  });

  describe('waitForSlot', () => {
    it('should not wait when under threshold', async () => {
      const start = Date.now();
      await rateLimiter.waitForSlot();
      const elapsed = Date.now() - start;

      expect(elapsed).toBeLessThan(100);
    });

    it('should skip waiting when disabled', async () => {
      const disabledLimiter = new RateLimiter({ ...config, enabled: false });

      const start = Date.now();
      await disabledLimiter.waitForSlot();
      const elapsed = Date.now() - start;

      expect(elapsed).toBeLessThan(100);
    });
  });
});
