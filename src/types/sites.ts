/**
 * Site types for HaloPSA
 */

import type { BaseEntity, BaseListParams, CustomField } from './common.js';

/**
 * Site entity
 */
export interface Site extends BaseEntity {
  name: string;
  client_id: number;
  client_name?: string;
  inactive: boolean;
  phonenumber?: string;
  addressline1?: string;
  addressline2?: string;
  addressline3?: string;
  addressline4?: string;
  postcode?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
  customfields?: CustomField[];
}

/**
 * Site list parameters
 */
export interface SiteListParams extends BaseListParams {
  /** Filter by client */
  client_id?: number;
  /** Show inactive sites */
  inactive?: boolean;
}

/**
 * Site list response
 */
export interface SiteListResponse {
  record_count: number;
  sites: Site[];
}

/**
 * Site creation data
 */
export interface SiteCreateData {
  name: string;
  client_id: number;
  inactive?: boolean;
  phonenumber?: string;
  addressline1?: string;
  addressline2?: string;
  addressline3?: string;
  addressline4?: string;
  postcode?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
  customfields?: CustomField[];
}

/**
 * Site update data
 */
export interface SiteUpdateData {
  name?: string;
  inactive?: boolean;
  phonenumber?: string;
  addressline1?: string;
  addressline2?: string;
  addressline3?: string;
  addressline4?: string;
  postcode?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
  customfields?: CustomField[];
}
