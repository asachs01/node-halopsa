/**
 * Client (Company) types for HaloPSA
 */

import type { BaseEntity, BaseListParams, CustomField } from './common.js';

/**
 * Client entity
 */
export interface Client extends BaseEntity {
  name: string;
  inactive: boolean;
  toplevel_id?: number;
  main_site_id?: number;
  website?: string;
  notes?: string;
  phonenumber?: string;
  email?: string;
  colour?: string;
  customfields?: CustomField[];
}

/**
 * Client list parameters
 */
export interface ClientListParams extends BaseListParams {
  /** Show inactive clients */
  inactive?: boolean;
  /** Filter by top-level client */
  toplevel_id?: number;
}

/**
 * Client list response
 */
export interface ClientListResponse {
  record_count: number;
  clients: Client[];
}

/**
 * Client creation data
 */
export interface ClientCreateData {
  name: string;
  inactive?: boolean;
  toplevel_id?: number;
  website?: string;
  notes?: string;
  phonenumber?: string;
  email?: string;
  colour?: string;
  customfields?: CustomField[];
}

/**
 * Client update data
 */
export interface ClientUpdateData {
  name?: string;
  inactive?: boolean;
  toplevel_id?: number;
  website?: string;
  notes?: string;
  phonenumber?: string;
  email?: string;
  colour?: string;
  customfields?: CustomField[];
}
