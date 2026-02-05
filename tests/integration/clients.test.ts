/**
 * Clients integration tests
 */

import { describe, it, expect } from 'vitest';
import { HaloPsaClient } from '../../src/client.js';

describe('ClientsResource', () => {
  const createClient = () =>
    new HaloPsaClient({
      clientId: 'test-client-id',
      clientSecret: 'test-client-secret',
      tenant: 'testcompany',
    });

  describe('list', () => {
    it('should list clients', async () => {
      const client = createClient();
      const response = await client.clients.list();

      expect(response.record_count).toBe(3);
      expect(response.clients).toHaveLength(3);
      expect(response.clients[0]?.name).toBe('Acme Corporation');
    });
  });

  describe('get', () => {
    it('should get a single client', async () => {
      const client = createClient();
      const result = await client.clients.get(1);

      expect(result.id).toBe(1);
      expect(result.name).toBe('Acme Corporation');
      expect(result.website).toBe('https://acme.com');
    });
  });

  describe('create', () => {
    it('should create a client', async () => {
      const client = createClient();
      const result = await client.clients.create({
        name: 'New Client Inc',
        website: 'https://newclient.com',
      });

      expect(result.id).toBe(100);
      expect(result.name).toBe('New Client Inc');
    });
  });

  describe('update', () => {
    it('should update a client', async () => {
      const client = createClient();
      const result = await client.clients.update(1, {
        notes: 'Updated notes',
      });

      expect(result).toBeDefined();
    });
  });

  describe('delete', () => {
    it('should delete a client', async () => {
      const client = createClient();

      await expect(client.clients.delete(1)).resolves.not.toThrow();
    });
  });
});
