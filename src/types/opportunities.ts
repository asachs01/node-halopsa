/**
 * Opportunity (Sales) types for HaloPSA
 */

import type { BaseEntity, BaseListParams } from './common.js';

/**
 * Opportunity entity
 */
export interface Opportunity extends BaseEntity {
  name: string;
  description?: string;
  client_id: number;
  client_name?: string;
  site_id?: number;
  site_name?: string;
  contact_id?: number;
  contact_name?: string;
  status: string;
  stage?: string;
  value?: number;
  probability?: number;
  expectedclosedate?: string;
  closeddate?: string;
  owner_id?: number;
  owner_name?: string;
  source?: string;
  notes?: string;
}

/**
 * Opportunity list parameters
 */
export interface OpportunityListParams extends BaseListParams {
  /** Filter by client */
  client_id?: number;
  /** Filter by status */
  status?: string;
  /** Filter by stage */
  stage?: string;
  /** Filter by owner */
  owner_id?: number;
}

/**
 * Opportunity list response
 */
export interface OpportunityListResponse {
  record_count: number;
  opportunities: Opportunity[];
}

/**
 * Opportunity creation data
 */
export interface OpportunityCreateData {
  name: string;
  client_id: number;
  description?: string;
  site_id?: number;
  contact_id?: number;
  status?: string;
  stage?: string;
  value?: number;
  probability?: number;
  expectedclosedate?: string;
  owner_id?: number;
  source?: string;
  notes?: string;
}

/**
 * Opportunity update data
 */
export interface OpportunityUpdateData {
  name?: string;
  description?: string;
  site_id?: number;
  contact_id?: number;
  status?: string;
  stage?: string;
  value?: number;
  probability?: number;
  expectedclosedate?: string;
  closeddate?: string;
  owner_id?: number;
  source?: string;
  notes?: string;
}
