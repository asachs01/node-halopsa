/**
 * Reference data types for HaloPSA
 */

import type { BaseEntity, BaseListParams } from './common.js';

/**
 * Ticket type entity
 */
export interface TicketType extends BaseEntity {
  name: string;
  description?: string;
  inactive: boolean;
}

/**
 * Status entity
 */
export interface Status extends BaseEntity {
  name: string;
  colour?: string;
  isopen: boolean;
  isdefault: boolean;
  sortorder?: number;
}

/**
 * Priority entity
 */
export interface Priority extends BaseEntity {
  name: string;
  colour?: string;
  sla_id?: number;
  sortorder?: number;
}

/**
 * Category entity
 */
export interface Category extends BaseEntity {
  name: string;
  description?: string;
  parent_id?: number;
  level: number;
  inactive: boolean;
}

/**
 * SLA entity
 */
export interface SLA extends BaseEntity {
  name: string;
  description?: string;
  responsetime?: number;
  resolutiontime?: number;
  inactive: boolean;
}

/**
 * Custom field definition
 */
export interface CustomFieldDefinition extends BaseEntity {
  name: string;
  label?: string;
  type: 'text' | 'number' | 'date' | 'checkbox' | 'dropdown' | 'multiline';
  required: boolean;
  entity_type: string;
  options?: string[];
}

/**
 * User role entity
 */
export interface UserRole extends BaseEntity {
  name: string;
  description?: string;
  permissions?: string[];
}

/**
 * Knowledge base article
 */
export interface KBArticle extends BaseEntity {
  title: string;
  content: string;
  category_id?: number;
  category_name?: string;
  status: string;
  views?: number;
  rating?: number;
  datecreated: string;
  datelastmodified?: string;
  author_id?: number;
  author_name?: string;
}

/**
 * Recurring invoice entity
 */
export interface RecurringInvoice extends BaseEntity {
  client_id: number;
  client_name?: string;
  site_id?: number;
  site_name?: string;
  frequency: string;
  nextdate: string;
  status: string;
  value?: number;
  notes?: string;
}

/**
 * Report entity
 */
export interface Report extends BaseEntity {
  name: string;
  description?: string;
  category?: string;
  type?: string;
}

/**
 * Report run result
 */
export interface ReportRunResult {
  report_id: number;
  data: unknown[];
  columns?: string[];
  total_count?: number;
}

/**
 * Software licence entity
 */
export interface SoftwareLicence extends BaseEntity {
  name: string;
  product?: string;
  licencekey?: string;
  quantity?: number;
  expirydate?: string;
  client_id?: number;
  client_name?: string;
  supplier_id?: number;
  supplier_name?: string;
  cost?: number;
  notes?: string;
}

/**
 * Common list parameters for reference data
 */
export interface ReferenceListParams extends BaseListParams {
  /** Show inactive items */
  inactive?: boolean;
}

/**
 * Ticket type list response
 */
export interface TicketTypeListResponse {
  record_count: number;
  ticket_types: TicketType[];
}

/**
 * Status list response
 */
export interface StatusListResponse {
  record_count: number;
  statuses: Status[];
}

/**
 * Priority list response
 */
export interface PriorityListResponse {
  record_count: number;
  priorities: Priority[];
}

/**
 * Category list response
 */
export interface CategoryListResponse {
  record_count: number;
  categories: Category[];
}

/**
 * SLA list response
 */
export interface SLAListResponse {
  record_count: number;
  slas: SLA[];
}

/**
 * Custom field list response
 */
export interface CustomFieldListResponse {
  record_count: number;
  fields: CustomFieldDefinition[];
}

/**
 * User role list response
 */
export interface UserRoleListResponse {
  record_count: number;
  roles: UserRole[];
}

/**
 * KB Article list parameters
 */
export interface KBArticleListParams extends BaseListParams {
  /** Filter by category */
  category_id?: number;
  /** Filter by status */
  status?: string;
}

/**
 * KB article list response
 */
export interface KBArticleListResponse {
  record_count: number;
  articles: KBArticle[];
}

/**
 * KB article creation data
 */
export interface KBArticleCreateData {
  title: string;
  content: string;
  category_id?: number;
  status?: string;
}

/**
 * KB article update data
 */
export interface KBArticleUpdateData {
  title?: string;
  content?: string;
  category_id?: number;
  status?: string;
}

/**
 * Recurring invoice list parameters
 */
export interface RecurringInvoiceListParams extends BaseListParams {
  /** Filter by client */
  client_id?: number;
  /** Filter by status */
  status?: string;
}

/**
 * Recurring invoice list response
 */
export interface RecurringInvoiceListResponse {
  record_count: number;
  recurring_invoices: RecurringInvoice[];
}

/**
 * Recurring invoice creation data
 */
export interface RecurringInvoiceCreateData {
  client_id: number;
  site_id?: number;
  frequency: string;
  nextdate: string;
  status?: string;
  value?: number;
  notes?: string;
}

/**
 * Recurring invoice update data
 */
export interface RecurringInvoiceUpdateData {
  site_id?: number;
  frequency?: string;
  nextdate?: string;
  status?: string;
  value?: number;
  notes?: string;
}

/**
 * Report list response
 */
export interface ReportListResponse {
  record_count: number;
  reports: Report[];
}

/**
 * Report run parameters
 */
export interface ReportRunParams {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Software licence list parameters
 */
export interface SoftwareLicenceListParams extends BaseListParams {
  /** Filter by client */
  client_id?: number;
  /** Filter by supplier */
  supplier_id?: number;
}

/**
 * Software licence list response
 */
export interface SoftwareLicenceListResponse {
  record_count: number;
  software_licences: SoftwareLicence[];
}

/**
 * Software licence creation data
 */
export interface SoftwareLicenceCreateData {
  name: string;
  product?: string;
  licencekey?: string;
  quantity?: number;
  expirydate?: string;
  client_id?: number;
  supplier_id?: number;
  cost?: number;
  notes?: string;
}

/**
 * Software licence update data
 */
export interface SoftwareLicenceUpdateData {
  name?: string;
  product?: string;
  licencekey?: string;
  quantity?: number;
  expirydate?: string;
  client_id?: number;
  supplier_id?: number;
  cost?: number;
  notes?: string;
}
