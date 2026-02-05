/**
 * Sites resource operations
 */

import type { HttpClient } from '../http.js';
import type { PaginatedIterable } from '../pagination.js';
import { createPaginatedIterable } from '../pagination.js';
import type {
  Site,
  SiteListParams,
  SiteListResponse,
  SiteCreateData,
  SiteUpdateData,
} from '../types/sites.js';

/**
 * Sites resource operations
 */
export class SitesResource {
  private readonly httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * List sites with optional filtering
   */
  async list(params?: SiteListParams): Promise<SiteListResponse> {
    return this.httpClient.request<SiteListResponse>('/Site', {
      params: this.buildListParams(params),
    });
  }

  /**
   * List all sites with automatic pagination
   */
  listAll(params?: Omit<SiteListParams, 'pageSize' | 'pageNo'>): PaginatedIterable<Site> {
    return createPaginatedIterable<Site>(
      this.httpClient,
      '/Site',
      'sites',
      this.buildListParams(params)
    );
  }

  /**
   * Get a single site by ID
   */
  async get(id: number): Promise<Site> {
    const response = await this.httpClient.request<{ sites: Site[] }>(`/Site/${id}`);
    const site = response.sites[0];
    if (!site) {
      throw new Error(`Site ${id} not found`);
    }
    return site;
  }

  /**
   * Create a new site
   */
  async create(data: SiteCreateData): Promise<Site> {
    const response = await this.httpClient.request<{ sites: Site[] }>('/Site', {
      method: 'POST',
      body: [data],
    });
    const site = response.sites[0];
    if (!site) {
      throw new Error('Failed to create site');
    }
    return site;
  }

  /**
   * Update an existing site
   */
  async update(id: number, data: SiteUpdateData): Promise<Site> {
    const response = await this.httpClient.request<{ sites: Site[] }>('/Site', {
      method: 'POST',
      body: [{ id, ...data }],
    });
    const site = response.sites[0];
    if (!site) {
      throw new Error('Failed to update site');
    }
    return site;
  }

  /**
   * Delete a site
   */
  async delete(id: number): Promise<void> {
    await this.httpClient.request<void>(`/Site/${id}`, {
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
