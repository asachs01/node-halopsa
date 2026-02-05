/**
 * Asset (Configuration Item) types for HaloPSA
 */

import type { BaseEntity, BaseListParams, CustomField } from './common.js';

/**
 * Asset entity
 */
export interface Asset extends BaseEntity {
  inventory_number?: string;
  assettype_id: number;
  assettype_name?: string;
  client_id: number;
  client_name?: string;
  site_id?: number;
  site_name?: string;
  user_id?: number;
  user_name?: string;
  key_field?: string;
  key_field2?: string;
  key_field3?: string;
  status_id?: number;
  status_name?: string;
  inactive: boolean;
  datepurchased?: string;
  warrantyexpires?: string;
  notes?: string;
  customfields?: CustomField[];
}

/**
 * Asset type entity
 */
export interface AssetType extends BaseEntity {
  name: string;
  description?: string;
  icon?: string;
  inactive: boolean;
}

/**
 * Asset list parameters
 */
export interface AssetListParams extends BaseListParams {
  /** Filter by client */
  client_id?: number;
  /** Filter by site */
  site_id?: number;
  /** Filter by user */
  user_id?: number;
  /** Filter by asset type */
  assettype_id?: number;
  /** Filter by status */
  status_id?: number;
  /** Show inactive assets */
  inactive?: boolean;
}

/**
 * Asset list response
 */
export interface AssetListResponse {
  record_count: number;
  assets: Asset[];
}

/**
 * Asset type list response
 */
export interface AssetTypeListResponse {
  record_count: number;
  asset_types: AssetType[];
}

/**
 * Asset creation data
 */
export interface AssetCreateData {
  assettype_id: number;
  client_id: number;
  site_id?: number;
  user_id?: number;
  inventory_number?: string;
  key_field?: string;
  key_field2?: string;
  key_field3?: string;
  status_id?: number;
  inactive?: boolean;
  datepurchased?: string;
  warrantyexpires?: string;
  notes?: string;
  customfields?: CustomField[];
}

/**
 * Asset update data
 */
export interface AssetUpdateData {
  assettype_id?: number;
  site_id?: number;
  user_id?: number;
  inventory_number?: string;
  key_field?: string;
  key_field2?: string;
  key_field3?: string;
  status_id?: number;
  inactive?: boolean;
  datepurchased?: string;
  warrantyexpires?: string;
  notes?: string;
  customfields?: CustomField[];
}
