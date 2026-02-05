/**
 * Contact (User) types for HaloPSA
 */

import type { BaseEntity, BaseListParams, CustomField } from './common.js';

/**
 * Contact entity
 */
export interface Contact extends BaseEntity {
  name: string;
  emailaddress?: string;
  phonenumber?: string;
  mobilephone?: string;
  client_id: number;
  client_name?: string;
  site_id?: number;
  site_name?: string;
  inactive: boolean;
  isimportantcontact: boolean;
  isserviceaccount: boolean;
  notes?: string;
  customfields?: CustomField[];
}

/**
 * Contact list parameters
 */
export interface ContactListParams extends BaseListParams {
  /** Filter by client */
  client_id?: number;
  /** Filter by site */
  site_id?: number;
  /** Show inactive contacts */
  inactive?: boolean;
  /** Show only important contacts */
  isimportantcontact?: boolean;
}

/**
 * Contact list response
 */
export interface ContactListResponse {
  record_count: number;
  users: Contact[];
}

/**
 * Contact creation data
 */
export interface ContactCreateData {
  name: string;
  client_id: number;
  emailaddress?: string;
  phonenumber?: string;
  mobilephone?: string;
  site_id?: number;
  inactive?: boolean;
  isimportantcontact?: boolean;
  isserviceaccount?: boolean;
  notes?: string;
  customfields?: CustomField[];
}

/**
 * Contact update data
 */
export interface ContactUpdateData {
  name?: string;
  emailaddress?: string;
  phonenumber?: string;
  mobilephone?: string;
  site_id?: number;
  inactive?: boolean;
  isimportantcontact?: boolean;
  isserviceaccount?: boolean;
  notes?: string;
  customfields?: CustomField[];
}
