/**
 * Reference data integration tests
 */

import { describe, it, expect } from 'vitest';
import { HaloPsaClient } from '../../src/client.js';

describe('Reference Data Resources', () => {
  const createClient = () =>
    new HaloPsaClient({
      clientId: 'test-client-id',
      clientSecret: 'test-client-secret',
      tenant: 'testcompany',
    });

  describe('TicketTypesResource', () => {
    it('should list ticket types', async () => {
      const client = createClient();
      const response = await client.ticketTypes.list();

      expect(response.record_count).toBe(3);
      expect(response.ticket_types).toHaveLength(3);
      expect(response.ticket_types[0]?.name).toBe('Incident');
    });

    it('should get a single ticket type', async () => {
      const client = createClient();
      const ticketType = await client.ticketTypes.get(1);

      expect(ticketType.id).toBe(1);
      expect(ticketType.name).toBe('Incident');
    });
  });

  describe('StatusesResource', () => {
    it('should list statuses', async () => {
      const client = createClient();
      const response = await client.statuses.list();

      expect(response.record_count).toBe(4);
      expect(response.statuses).toHaveLength(4);
      expect(response.statuses[0]?.name).toBe('New');
    });

    it('should get a single status', async () => {
      const client = createClient();
      const status = await client.statuses.get(1);

      expect(status.id).toBe(1);
      expect(status.name).toBe('New');
      expect(status.isopen).toBe(true);
    });
  });

  describe('PrioritiesResource', () => {
    it('should list priorities', async () => {
      const client = createClient();
      const response = await client.priorities.list();

      expect(response.record_count).toBe(4);
      expect(response.priorities).toHaveLength(4);
      expect(response.priorities[0]?.name).toBe('Critical');
    });

    it('should get a single priority', async () => {
      const client = createClient();
      const priority = await client.priorities.get(1);

      expect(priority.id).toBe(1);
      expect(priority.name).toBe('Critical');
    });
  });
});
