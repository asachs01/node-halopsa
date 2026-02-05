/**
 * Contracts resource operations
 */

import type { HttpClient } from '../http.js';
import type { PaginatedIterable } from '../pagination.js';
import { createPaginatedIterable } from '../pagination.js';
import type {
  Contract,
  ContractListParams,
  ContractListResponse,
  ContractCreateData,
  ContractUpdateData,
} from '../types/contracts.js';

/**
 * Contracts resource operations
 */
export class ContractsResource {
  private readonly httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * List contracts with optional filtering
   */
  async list(params?: ContractListParams): Promise<ContractListResponse> {
    return this.httpClient.request<ContractListResponse>('/ClientContract', {
      params: this.buildListParams(params),
    });
  }

  /**
   * List all contracts with automatic pagination
   */
  listAll(params?: Omit<ContractListParams, 'pageSize' | 'pageNo'>): PaginatedIterable<Contract> {
    return createPaginatedIterable<Contract>(
      this.httpClient,
      '/ClientContract',
      'contracts',
      this.buildListParams(params)
    );
  }

  /**
   * Get a single contract by ID
   */
  async get(id: number): Promise<Contract> {
    const response = await this.httpClient.request<{ contracts: Contract[] }>(`/ClientContract/${id}`);
    const contract = response.contracts[0];
    if (!contract) {
      throw new Error(`Contract ${id} not found`);
    }
    return contract;
  }

  /**
   * Create a new contract
   */
  async create(data: ContractCreateData): Promise<Contract> {
    const response = await this.httpClient.request<{ contracts: Contract[] }>('/ClientContract', {
      method: 'POST',
      body: [data],
    });
    const contract = response.contracts[0];
    if (!contract) {
      throw new Error('Failed to create contract');
    }
    return contract;
  }

  /**
   * Update an existing contract
   */
  async update(id: number, data: ContractUpdateData): Promise<Contract> {
    const response = await this.httpClient.request<{ contracts: Contract[] }>('/ClientContract', {
      method: 'POST',
      body: [{ id, ...data }],
    });
    const contract = response.contracts[0];
    if (!contract) {
      throw new Error('Failed to update contract');
    }
    return contract;
  }

  /**
   * Delete a contract
   */
  async delete(id: number): Promise<void> {
    await this.httpClient.request<void>(`/ClientContract/${id}`, {
      method: 'DELETE',
    });
  }

  /**
   * Build query parameters from list params
   */
  private buildListParams<T extends object>(params?: T): Record<string, string | number | boolean | undefined> {
    if (!params) return {};

    const result: Record<string, string | number | boolean | undefined> = {};
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) {
        const apiKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
        result[apiKey] = value as string | number | boolean;
      }
    }
    return result;
  }
}
