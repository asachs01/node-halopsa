/**
 * Quote types for HaloPSA
 */

import type { BaseEntity, BaseListParams } from './common.js';

/**
 * Quote line item
 */
export interface QuoteLineItem {
  id?: number;
  item_id: number;
  item_name?: string;
  description?: string;
  quantity: number;
  unitprice: number;
  total?: number;
  taxable?: boolean;
}

/**
 * Quote entity
 */
export interface Quote extends BaseEntity {
  quotenumber: string;
  client_id: number;
  client_name?: string;
  site_id?: number;
  site_name?: string;
  quotedate: string;
  validuntil?: string;
  status: string;
  subtotal?: number;
  tax?: number;
  total?: number;
  sent: boolean;
  accepted: boolean;
  accepteddate?: string;
  notes?: string;
  lines?: QuoteLineItem[];
}

/**
 * Quote list parameters
 */
export interface QuoteListParams extends BaseListParams {
  /** Filter by client */
  client_id?: number;
  /** Filter by status */
  status?: string;
  /** Filter by sent status */
  sent?: boolean;
  /** Filter by accepted status */
  accepted?: boolean;
}

/**
 * Quote list response
 */
export interface QuoteListResponse {
  record_count: number;
  quotations: Quote[];
}

/**
 * Quote creation data
 */
export interface QuoteCreateData {
  client_id: number;
  site_id?: number;
  quotedate: string;
  validuntil?: string;
  status?: string;
  notes?: string;
  lines?: QuoteLineItem[];
}

/**
 * Quote update data
 */
export interface QuoteUpdateData {
  site_id?: number;
  quotedate?: string;
  validuntil?: string;
  status?: string;
  notes?: string;
  lines?: QuoteLineItem[];
}

/**
 * Quote to invoice conversion response
 */
export interface QuoteConvertResponse {
  invoice_id: number;
  message?: string;
}
