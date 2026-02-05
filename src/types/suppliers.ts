/**
 * Supplier types for HaloPSA
 */

import type { BaseEntity, BaseListParams } from './common.js';

/**
 * Supplier entity
 */
export interface Supplier extends BaseEntity {
  name: string;
  inactive: boolean;
  website?: string;
  phonenumber?: string;
  email?: string;
  addressline1?: string;
  addressline2?: string;
  addressline3?: string;
  postcode?: string;
  country?: string;
  notes?: string;
}

/**
 * Supplier list parameters
 */
export interface SupplierListParams extends BaseListParams {
  /** Show inactive suppliers */
  inactive?: boolean;
}

/**
 * Supplier list response
 */
export interface SupplierListResponse {
  record_count: number;
  suppliers: Supplier[];
}

/**
 * Supplier creation data
 */
export interface SupplierCreateData {
  name: string;
  inactive?: boolean;
  website?: string;
  phonenumber?: string;
  email?: string;
  addressline1?: string;
  addressline2?: string;
  addressline3?: string;
  postcode?: string;
  country?: string;
  notes?: string;
}

/**
 * Supplier update data
 */
export interface SupplierUpdateData {
  name?: string;
  inactive?: boolean;
  website?: string;
  phonenumber?: string;
  email?: string;
  addressline1?: string;
  addressline2?: string;
  addressline3?: string;
  postcode?: string;
  country?: string;
  notes?: string;
}
