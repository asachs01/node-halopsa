/**
 * Action (Ticket Activity) types for HaloPSA
 */

import type { BaseEntity, BaseListParams } from './common.js';

/**
 * Action entity
 */
export interface Action extends BaseEntity {
  ticket_id: number;
  who: string;
  who_agentid?: number;
  who_type: string;
  note: string;
  note_html?: string;
  outcome?: string;
  timetaken?: number;
  hiddenfromuser?: boolean;
  emailfrom?: string;
  emailto?: string;
  emailcc?: string;
  sendemail?: boolean;
  actiondate: string;
  actiontype_id?: number;
  actiontype_name?: string;
}

/**
 * Action list parameters
 */
export interface ActionListParams extends BaseListParams {
  /** Filter by ticket */
  ticket_id?: number;
  /** Filter by agent */
  who_agentid?: number;
  /** Filter by action type */
  actiontype_id?: number;
  /** Filter by date start */
  actiondate_start?: string;
  /** Filter by date end */
  actiondate_end?: string;
}

/**
 * Action list response
 */
export interface ActionListResponse {
  record_count: number;
  actions: Action[];
}

/**
 * Action creation data
 */
export interface ActionCreateData {
  ticket_id: number;
  note: string;
  outcome?: string;
  timetaken?: number;
  hiddenfromuser?: boolean;
  sendemail?: boolean;
  emailto?: string;
  emailcc?: string;
  actiontype_id?: number;
}

/**
 * Action update data
 */
export interface ActionUpdateData {
  note?: string;
  outcome?: string;
  timetaken?: number;
  hiddenfromuser?: boolean;
  actiontype_id?: number;
}
