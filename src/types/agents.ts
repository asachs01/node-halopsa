/**
 * Agent (Technician) types for HaloPSA
 */

import type { BaseEntity, BaseListParams } from './common.js';

/**
 * Agent entity
 */
export interface Agent extends BaseEntity {
  name: string;
  email: string;
  phonenumber?: string;
  mobilephone?: string;
  jobtitle?: string;
  team_id?: number;
  team_name?: string;
  inactive: boolean;
  isadmin: boolean;
  permissions?: string[];
}

/**
 * Agent list parameters
 */
export interface AgentListParams extends BaseListParams {
  /** Filter by team */
  team_id?: number;
  /** Show inactive agents */
  inactive?: boolean;
}

/**
 * Agent list response
 */
export interface AgentListResponse {
  record_count: number;
  agents: Agent[];
}

/**
 * Agent creation data
 */
export interface AgentCreateData {
  name: string;
  email: string;
  phonenumber?: string;
  mobilephone?: string;
  jobtitle?: string;
  team_id?: number;
  inactive?: boolean;
  isadmin?: boolean;
}

/**
 * Agent update data
 */
export interface AgentUpdateData {
  name?: string;
  email?: string;
  phonenumber?: string;
  mobilephone?: string;
  jobtitle?: string;
  team_id?: number;
  inactive?: boolean;
  isadmin?: boolean;
}
