/**
 * Project types for HaloPSA
 */

import type { BaseEntity, BaseListParams } from './common.js';

/**
 * Project entity
 */
export interface Project extends BaseEntity {
  name: string;
  description?: string;
  client_id: number;
  client_name?: string;
  site_id?: number;
  site_name?: string;
  status: string;
  startdate?: string;
  enddate?: string;
  budget?: number;
  percentcomplete?: number;
  manager_id?: number;
  manager_name?: string;
  notes?: string;
}

/**
 * Project task entity
 */
export interface ProjectTask extends BaseEntity {
  project_id: number;
  name: string;
  description?: string;
  status: string;
  startdate?: string;
  enddate?: string;
  estimatedhours?: number;
  actualhours?: number;
  percentcomplete?: number;
  assignee_id?: number;
  assignee_name?: string;
  parent_task_id?: number;
}

/**
 * Project list parameters
 */
export interface ProjectListParams extends BaseListParams {
  /** Filter by client */
  client_id?: number;
  /** Filter by site */
  site_id?: number;
  /** Filter by status */
  status?: string;
  /** Filter by manager */
  manager_id?: number;
}

/**
 * Project list response
 */
export interface ProjectListResponse {
  record_count: number;
  projects: Project[];
}

/**
 * Project task list parameters
 */
export interface ProjectTaskListParams extends BaseListParams {
  /** Filter by status */
  status?: string;
  /** Filter by assignee */
  assignee_id?: number;
}

/**
 * Project task list response
 */
export interface ProjectTaskListResponse {
  record_count: number;
  tasks: ProjectTask[];
}

/**
 * Project creation data
 */
export interface ProjectCreateData {
  name: string;
  client_id: number;
  description?: string;
  site_id?: number;
  status?: string;
  startdate?: string;
  enddate?: string;
  budget?: number;
  manager_id?: number;
  notes?: string;
}

/**
 * Project update data
 */
export interface ProjectUpdateData {
  name?: string;
  description?: string;
  site_id?: number;
  status?: string;
  startdate?: string;
  enddate?: string;
  budget?: number;
  percentcomplete?: number;
  manager_id?: number;
  notes?: string;
}
