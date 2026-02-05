/**
 * Team types for HaloPSA
 */

import type { BaseEntity, BaseListParams } from './common.js';

/**
 * Team entity
 */
export interface Team extends BaseEntity {
  name: string;
  description?: string;
  inactive: boolean;
  email?: string;
  manager_id?: number;
  manager_name?: string;
}

/**
 * Team list parameters
 */
export interface TeamListParams extends BaseListParams {
  /** Show inactive teams */
  inactive?: boolean;
}

/**
 * Team list response
 */
export interface TeamListResponse {
  record_count: number;
  teams: Team[];
}

/**
 * Team creation data
 */
export interface TeamCreateData {
  name: string;
  description?: string;
  inactive?: boolean;
  email?: string;
  manager_id?: number;
}

/**
 * Team update data
 */
export interface TeamUpdateData {
  name?: string;
  description?: string;
  inactive?: boolean;
  email?: string;
  manager_id?: number;
}
