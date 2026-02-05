/**
 * Invoice types for HaloPSA
 */

import type { BaseEntity, BaseListParams } from './common.js';

/**
 * Invoice line item
 */
export interface InvoiceLineItem {
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
 * Invoice entity
 */
export interface Invoice extends BaseEntity {
  invoicenumber: string;
  client_id: number;
  client_name?: string;
  site_id?: number;
  site_name?: string;
  invoicedate: string;
  duedate?: string;
  status: string;
  subtotal?: number;
  tax?: number;
  total?: number;
  sent: boolean;
  paid: boolean;
  paiddate?: string;
  notes?: string;
  lines?: InvoiceLineItem[];
}

/**
 * Invoice list parameters
 */
export interface InvoiceListParams extends BaseListParams {
  /** Filter by client */
  client_id?: number;
  /** Filter by status */
  status?: string;
  /** Filter by invoice date start */
  invoice_date_start?: string;
  /** Filter by invoice date end */
  invoice_date_end?: string;
  /** Filter by sent status */
  sent?: boolean;
  /** Filter by paid status */
  paid?: boolean;
}

/**
 * Invoice list response
 */
export interface InvoiceListResponse {
  record_count: number;
  invoices: Invoice[];
}

/**
 * Invoice creation data
 */
export interface InvoiceCreateData {
  client_id: number;
  site_id?: number;
  invoicedate: string;
  duedate?: string;
  status?: string;
  notes?: string;
  lines?: InvoiceLineItem[];
}

/**
 * Invoice update data
 */
export interface InvoiceUpdateData {
  site_id?: number;
  invoicedate?: string;
  duedate?: string;
  status?: string;
  notes?: string;
  lines?: InvoiceLineItem[];
}
