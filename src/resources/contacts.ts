/**
 * Contacts (Users) resource operations
 */

import type { HttpClient } from '../http.js';
import type { PaginatedIterable } from '../pagination.js';
import { createPaginatedIterable } from '../pagination.js';
import type {
  Contact,
  ContactListParams,
  ContactListResponse,
  ContactCreateData,
  ContactUpdateData,
} from '../types/contacts.js';

/**
 * Contacts resource operations
 */
export class ContactsResource {
  private readonly httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * List contacts with optional filtering
   */
  async list(params?: ContactListParams): Promise<ContactListResponse> {
    return this.httpClient.request<ContactListResponse>('/Users', {
      params: this.buildListParams(params),
    });
  }

  /**
   * List all contacts with automatic pagination
   */
  listAll(params?: Omit<ContactListParams, 'pageSize' | 'pageNo'>): PaginatedIterable<Contact> {
    return createPaginatedIterable<Contact>(
      this.httpClient,
      '/Users',
      'users',
      this.buildListParams(params)
    );
  }

  /**
   * Get a single contact by ID
   */
  async get(id: number): Promise<Contact> {
    const response = await this.httpClient.request<{ users: Contact[] }>(`/Users/${id}`);
    const contact = response.users[0];
    if (!contact) {
      throw new Error(`Contact ${id} not found`);
    }
    return contact;
  }

  /**
   * Create a new contact
   */
  async create(data: ContactCreateData): Promise<Contact> {
    const response = await this.httpClient.request<{ users: Contact[] }>('/Users', {
      method: 'POST',
      body: [data],
    });
    const contact = response.users[0];
    if (!contact) {
      throw new Error('Failed to create contact');
    }
    return contact;
  }

  /**
   * Update an existing contact
   */
  async update(id: number, data: ContactUpdateData): Promise<Contact> {
    const response = await this.httpClient.request<{ users: Contact[] }>('/Users', {
      method: 'POST',
      body: [{ id, ...data }],
    });
    const contact = response.users[0];
    if (!contact) {
      throw new Error('Failed to update contact');
    }
    return contact;
  }

  /**
   * Delete a contact
   */
  async delete(id: number): Promise<void> {
    await this.httpClient.request<void>(`/Users/${id}`, {
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
