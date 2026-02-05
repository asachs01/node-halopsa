/**
 * Teams resource operations
 */

import type { HttpClient } from '../http.js';
import type { PaginatedIterable } from '../pagination.js';
import { createPaginatedIterable } from '../pagination.js';
import type {
  Team,
  TeamListParams,
  TeamListResponse,
  TeamCreateData,
  TeamUpdateData,
} from '../types/teams.js';

/**
 * Teams resource operations
 */
export class TeamsResource {
  private readonly httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * List teams with optional filtering
   */
  async list(params?: TeamListParams): Promise<TeamListResponse> {
    return this.httpClient.request<TeamListResponse>('/Team', {
      params: this.buildListParams(params),
    });
  }

  /**
   * List all teams with automatic pagination
   */
  listAll(params?: Omit<TeamListParams, 'pageSize' | 'pageNo'>): PaginatedIterable<Team> {
    return createPaginatedIterable<Team>(
      this.httpClient,
      '/Team',
      'teams',
      this.buildListParams(params)
    );
  }

  /**
   * Get a single team by ID
   */
  async get(id: number): Promise<Team> {
    const response = await this.httpClient.request<{ teams: Team[] }>(`/Team/${id}`);
    const team = response.teams[0];
    if (!team) {
      throw new Error(`Team ${id} not found`);
    }
    return team;
  }

  /**
   * Create a new team
   */
  async create(data: TeamCreateData): Promise<Team> {
    const response = await this.httpClient.request<{ teams: Team[] }>('/Team', {
      method: 'POST',
      body: [data],
    });
    const team = response.teams[0];
    if (!team) {
      throw new Error('Failed to create team');
    }
    return team;
  }

  /**
   * Update an existing team
   */
  async update(id: number, data: TeamUpdateData): Promise<Team> {
    const response = await this.httpClient.request<{ teams: Team[] }>('/Team', {
      method: 'POST',
      body: [{ id, ...data }],
    });
    const team = response.teams[0];
    if (!team) {
      throw new Error('Failed to update team');
    }
    return team;
  }

  /**
   * Delete a team
   */
  async delete(id: number): Promise<void> {
    await this.httpClient.request<void>(`/Team/${id}`, {
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
