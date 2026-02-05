/**
 * Assets integration tests
 */

import { describe, it, expect } from 'vitest';
import { HaloPsaClient } from '../../src/client.js';

describe('AssetsResource', () => {
  const createClient = () =>
    new HaloPsaClient({
      clientId: 'test-client-id',
      clientSecret: 'test-client-secret',
      tenant: 'testcompany',
    });

  describe('list', () => {
    it('should list assets', async () => {
      const client = createClient();
      const response = await client.assets.list();

      expect(response.record_count).toBe(3);
      expect(response.assets).toHaveLength(3);
      expect(response.assets[0]?.inventory_number).toBe('LAPTOP-001');
    });

    it('should filter by client', async () => {
      const client = createClient();
      const response = await client.assets.list({ client_id: 1 });

      expect(response.assets).toBeDefined();
    });
  });

  describe('get', () => {
    it('should get a single asset', async () => {
      const client = createClient();
      const asset = await client.assets.get(1);

      expect(asset.id).toBe(1);
      expect(asset.inventory_number).toBe('LAPTOP-001');
      expect(asset.assettype_name).toBe('Laptop');
    });
  });

  describe('create', () => {
    it('should create an asset', async () => {
      const client = createClient();
      const asset = await client.assets.create({
        assettype_id: 1,
        client_id: 1,
        key_field: 'New Test Asset',
      });

      expect(asset.id).toBe(100);
      expect(asset.inventory_number).toBe('NEW-ASSET-001');
    });
  });

  describe('delete', () => {
    it('should delete an asset', async () => {
      const client = createClient();

      await expect(client.assets.delete(1)).resolves.not.toThrow();
    });
  });
});

describe('AssetTypesResource', () => {
  const createClient = () =>
    new HaloPsaClient({
      clientId: 'test-client-id',
      clientSecret: 'test-client-secret',
      tenant: 'testcompany',
    });

  describe('list', () => {
    it('should list asset types', async () => {
      const client = createClient();
      const response = await client.assetTypes.list();

      expect(response.record_count).toBe(3);
      expect(response.asset_types).toHaveLength(3);
      expect(response.asset_types[0]?.name).toBe('Laptop');
    });
  });

  describe('get', () => {
    it('should get a single asset type', async () => {
      const client = createClient();
      const assetType = await client.assetTypes.get(1);

      expect(assetType.id).toBe(1);
      expect(assetType.name).toBe('Laptop');
    });
  });
});
