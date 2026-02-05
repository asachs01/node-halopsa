/**
 * Common types shared across resources
 */

/**
 * Custom field value
 */
export interface CustomField {
  id: number;
  name: string;
  label?: string;
  value: string | number | boolean | null;
  type: 'text' | 'number' | 'date' | 'checkbox' | 'dropdown' | 'multiline';
}

/**
 * Base list parameters for paginated endpoints
 */
export interface BaseListParams {
  /** Number of records per page (default: 50) */
  pageSize?: number;
  /** Page number (1-indexed, default: 1) */
  pageNo?: number;
  /** Include total record count */
  count?: boolean;
  /** Sort field */
  order?: string;
  /** Sort descending */
  orderdesc?: boolean;
  /** Full-text search */
  search?: string;
  /** Include full entity details */
  includedetails?: boolean;
}

/**
 * Base entity with common fields
 */
export interface BaseEntity {
  id: number;
}

/**
 * Response wrapper for list endpoints
 */
export interface ListResponse<T> {
  record_count: number;
  [key: string]: T[] | number | unknown;
}
