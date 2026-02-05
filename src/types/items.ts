/**
 * Item (Product/Service) types for HaloPSA
 */

import type { BaseEntity, BaseListParams } from './common.js';

/**
 * Item entity
 */
export interface Item extends BaseEntity {
  name: string;
  description?: string;
  type: 'product' | 'service' | 'bundle';
  unitprice?: number;
  cost?: number;
  taxable: boolean;
  inactive: boolean;
  sku?: string;
  category?: string;
  supplier_id?: number;
  supplier_name?: string;
}

/**
 * Item list parameters
 */
export interface ItemListParams extends BaseListParams {
  /** Filter by type */
  type?: 'product' | 'service' | 'bundle';
  /** Filter by category */
  category?: string;
  /** Filter by supplier */
  supplier_id?: number;
  /** Show inactive items */
  inactive?: boolean;
}

/**
 * Item list response
 */
export interface ItemListResponse {
  record_count: number;
  items: Item[];
}

/**
 * Item creation data
 */
export interface ItemCreateData {
  name: string;
  description?: string;
  type: 'product' | 'service' | 'bundle';
  unitprice?: number;
  cost?: number;
  taxable?: boolean;
  inactive?: boolean;
  sku?: string;
  category?: string;
  supplier_id?: number;
}

/**
 * Item update data
 */
export interface ItemUpdateData {
  name?: string;
  description?: string;
  type?: 'product' | 'service' | 'bundle';
  unitprice?: number;
  cost?: number;
  taxable?: boolean;
  inactive?: boolean;
  sku?: string;
  category?: string;
  supplier_id?: number;
}
