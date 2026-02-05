/**
 * Tickets integration tests
 */

import { describe, it, expect } from 'vitest';
import { HaloPsaClient } from '../../src/client.js';

describe('TicketsResource', () => {
  const createClient = () =>
    new HaloPsaClient({
      clientId: 'test-client-id',
      clientSecret: 'test-client-secret',
      tenant: 'testcompany',
    });

  describe('list', () => {
    it('should list tickets', async () => {
      const client = createClient();
      const response = await client.tickets.list();

      expect(response.record_count).toBe(75);
      expect(response.tickets).toHaveLength(2);
      expect(response.tickets[0]?.summary).toBe('Network connectivity issue');
    });

    it('should support pagination parameters', async () => {
      const client = createClient();
      const response = await client.tickets.list({ pageNo: 2, pageSize: 50 });

      expect(response.tickets).toHaveLength(1);
      expect(response.tickets[0]?.summary).toBe('Printer not working');
    });
  });

  describe('listAll', () => {
    it('should iterate all tickets', async () => {
      const client = createClient();
      const tickets = await client.tickets.listAll().toArray();

      // First page has 2, second page has 1
      expect(tickets.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe('get', () => {
    it('should get a single ticket', async () => {
      const client = createClient();
      const ticket = await client.tickets.get(1);

      expect(ticket.id).toBe(1);
      expect(ticket.summary).toBe('Network connectivity issue');
      expect(ticket.client_name).toBe('Acme Corp');
    });

    it('should throw for non-existent ticket', async () => {
      const client = createClient();

      await expect(client.tickets.get(999)).rejects.toThrow('Ticket 999 not found');
    });
  });

  describe('create', () => {
    it('should create a ticket', async () => {
      const client = createClient();
      const ticket = await client.tickets.create({
        summary: 'New test ticket',
        details: 'Test ticket details',
        client_id: 1,
        tickettype_id: 1,
      });

      expect(ticket.id).toBe(100);
      expect(ticket.summary).toBe('New test ticket');
    });
  });

  describe('update', () => {
    it('should update a ticket', async () => {
      const client = createClient();
      const ticket = await client.tickets.update(1, {
        status_id: 2,
      });

      expect(ticket).toBeDefined();
    });
  });

  describe('delete', () => {
    it('should delete a ticket', async () => {
      const client = createClient();

      await expect(client.tickets.delete(1)).resolves.not.toThrow();
    });
  });

  describe('actions', () => {
    it('should list ticket actions', async () => {
      const client = createClient();
      const response = await client.tickets.actions(1);

      expect(response.record_count).toBe(2);
      expect(response.actions).toHaveLength(2);
      expect(response.actions[0]?.note).toBe('Investigating the issue');
    });
  });

  describe('attachments', () => {
    it('should list ticket attachments', async () => {
      const client = createClient();
      const response = await client.tickets.attachments(1);

      expect(response.record_count).toBe(1);
      expect(response.attachments).toHaveLength(1);
      expect(response.attachments[0]?.filename).toBe('screenshot.png');
    });
  });
});
