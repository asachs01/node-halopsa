/**
 * Agents integration tests
 */

import { describe, it, expect } from 'vitest';
import { HaloPsaClient } from '../../src/client.js';

describe('AgentsResource', () => {
  const createClient = () =>
    new HaloPsaClient({
      clientId: 'test-client-id',
      clientSecret: 'test-client-secret',
      tenant: 'testcompany',
    });

  describe('list', () => {
    it('should list agents', async () => {
      const client = createClient();
      const response = await client.agents.list();

      expect(response.record_count).toBe(3);
      expect(response.agents).toHaveLength(3);
      expect(response.agents[0]?.name).toBe('Tech Support');
    });
  });

  describe('get', () => {
    it('should get a single agent', async () => {
      const client = createClient();
      const agent = await client.agents.get(1);

      expect(agent.id).toBe(1);
      expect(agent.name).toBe('Tech Support');
      expect(agent.email).toBe('tech@company.com');
    });
  });

  describe('me', () => {
    it('should get current authenticated agent', async () => {
      const client = createClient();
      const agent = await client.agents.me();

      expect(agent.id).toBe(1);
      expect(agent.name).toBe('Tech Support');
      expect(agent.permissions).toBeDefined();
    });
  });

  describe('create', () => {
    it('should create an agent', async () => {
      const client = createClient();
      const agent = await client.agents.create({
        name: 'New Agent',
        email: 'new.agent@company.com',
      });

      expect(agent.id).toBe(100);
      expect(agent.name).toBe('New Agent');
    });
  });

  describe('delete', () => {
    it('should delete an agent', async () => {
      const client = createClient();

      await expect(client.agents.delete(1)).resolves.not.toThrow();
    });
  });
});
