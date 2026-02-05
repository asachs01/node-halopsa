/**
 * Contract types for HaloPSA
 */

import type { BaseEntity, BaseListParams } from './common.js';

/**
 * Contract entity
 */
export interface Contract extends BaseEntity {
  ref: string;
  client_id: number;
  client_name?: string;
  site_id?: number;
  site_name?: string;
  type?: string;
  status?: string;
  startdate: string;
  enddate?: string;
  billingfrequency?: string;
  value?: number;
  notes?: string;
  inactive: boolean;
}

/**
 * Contract list parameters
 */
export interface ContractListParams extends BaseListParams {
  /** Filter by client */
  client_id?: number;
  /** Filter by site */
  site_id?: number;
  /** Filter by status */
  status?: string;
  /** Filter by type */
  type?: string;
  /** Show inactive contracts */
  inactive?: boolean;
}

/**
 * Contract list response
 */
export interface ContractListResponse {
  record_count: number;
  contracts: Contract[];
}

/**
 * Contract creation data
 */
export interface ContractCreateData {
  ref: string;
  client_id: number;
  site_id?: number;
  type?: string;
  status?: string;
  startdate: string;
  enddate?: string;
  billingfrequency?: string;
  value?: number;
  notes?: string;
  inactive?: boolean;
}

/**
 * Contract update data
 */
export interface ContractUpdateData {
  ref?: string;
  site_id?: number;
  type?: string;
  status?: string;
  startdate?: string;
  enddate?: string;
  billingfrequency?: string;
  value?: number;
  notes?: string;
  inactive?: boolean;
}
