/**
 * Client tests
 */

import { describe, it, expect } from 'vitest';
import { HaloPsaClient } from '../../src/client.js';

describe('HaloPsaClient', () => {
  const createClient = () =>
    new HaloPsaClient({
      clientId: 'test-client-id',
      clientSecret: 'test-client-secret',
      tenant: 'testcompany',
    });

  describe('constructor', () => {
    it('should create client with tenant', () => {
      const client = createClient();

      expect(client.getConfig().baseUrl).toBe('https://testcompany.halopsa.com');
    });

    it('should create client with explicit baseUrl', () => {
      const client = new HaloPsaClient({
        clientId: 'test-id',
        clientSecret: 'test-secret',
        baseUrl: 'https://custom.halopsa.com',
      });

      expect(client.getConfig().baseUrl).toBe('https://custom.halopsa.com');
    });

    it('should throw without tenant or baseUrl', () => {
      expect(
        () =>
          new HaloPsaClient({
            clientId: 'test-id',
            clientSecret: 'test-secret',
          })
      ).toThrow('Either tenant or baseUrl must be provided');
    });
  });

  describe('resource initialization', () => {
    it('should have all resources initialized', () => {
      const client = createClient();

      expect(client.tickets).toBeDefined();
      expect(client.clients).toBeDefined();
      expect(client.sites).toBeDefined();
      expect(client.assets).toBeDefined();
      expect(client.assetTypes).toBeDefined();
      expect(client.contacts).toBeDefined();
      expect(client.items).toBeDefined();
      expect(client.contracts).toBeDefined();
      expect(client.invoices).toBeDefined();
      expect(client.quotes).toBeDefined();
      expect(client.projects).toBeDefined();
      expect(client.actions).toBeDefined();
      expect(client.appointments).toBeDefined();
      expect(client.opportunities).toBeDefined();
      expect(client.suppliers).toBeDefined();
      expect(client.agents).toBeDefined();
      expect(client.teams).toBeDefined();
      expect(client.ticketTypes).toBeDefined();
      expect(client.statuses).toBeDefined();
      expect(client.priorities).toBeDefined();
      expect(client.categories).toBeDefined();
      expect(client.slas).toBeDefined();
      expect(client.customFields).toBeDefined();
      expect(client.userRoles).toBeDefined();
      expect(client.knowledgeBase).toBeDefined();
      expect(client.recurringInvoices).toBeDefined();
      expect(client.reports).toBeDefined();
      expect(client.softwareLicences).toBeDefined();
    });
  });

  describe('getRateLimitStatus', () => {
    it('should return rate limit status', () => {
      const client = createClient();
      const status = client.getRateLimitStatus();

      expect(status.remaining).toBe(500);
      expect(status.rate).toBe(0);
    });
  });

  describe('invalidateToken', () => {
    it('should not throw', () => {
      const client = createClient();

      expect(() => client.invalidateToken()).not.toThrow();
    });
  });
});
