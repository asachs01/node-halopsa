/**
 * Pagination utilities for the HaloPSA API
 *
 * HaloPSA uses offset-based pagination with page_size and page_no parameters.
 * Responses include record_count for calculating total pages.
 */

import type { HttpClient } from './http.js';

/**
 * Pagination parameters
 */
export interface PaginationParams {
  /** Number of records per page (default: 50) */
  pageSize?: number;
  /** Page number (1-indexed, default: 1) */
  pageNo?: number;
  /** Include total record count (default: true) */
  count?: boolean;
}

/**
 * Paginated response structure from HaloPSA
 */
export interface PaginatedResponse<T> {
  /** Total number of records */
  record_count: number;
  /** The data array (key varies by resource) */
  [key: string]: T[] | number | unknown;
}

/**
 * Async iterable wrapper for paginated results
 */
export class PaginatedIterable<T> implements AsyncIterable<T> {
  private readonly httpClient: HttpClient;
  private readonly path: string;
  private readonly itemsKey: string;
  private readonly params: Record<string, string | number | boolean | undefined>;
  private readonly pageSize: number;

  constructor(
    httpClient: HttpClient,
    path: string,
    itemsKey: string,
    params: Record<string, string | number | boolean | undefined> = {},
    pageSize: number = 50
  ) {
    this.httpClient = httpClient;
    this.path = path;
    this.itemsKey = itemsKey;
    this.params = params;
    this.pageSize = pageSize;
  }

  async *[Symbol.asyncIterator](): AsyncIterator<T> {
    let pageNo = 1;
    let totalRecords: number | null = null;
    let fetchedRecords = 0;

    while (true) {
      // Fetch the current page
      const response = await this.httpClient.request<PaginatedResponse<T>>(this.path, {
        params: {
          ...this.params,
          page_size: this.pageSize,
          page_no: pageNo,
          count: true,
        },
      });

      // Get total record count on first page
      if (totalRecords === null) {
        totalRecords = response.record_count ?? 0;
      }

      // Get items from the response
      const items = response[this.itemsKey] as T[] | undefined;
      if (!items || items.length === 0) {
        break;
      }

      // Yield each item
      for (const item of items) {
        yield item;
        fetchedRecords++;
      }

      // Check if we've fetched all records
      if (fetchedRecords >= totalRecords) {
        break;
      }

      // Move to next page
      pageNo++;
    }
  }

  /**
   * Collect all items into an array
   */
  async toArray(): Promise<T[]> {
    const items: T[] = [];
    for await (const item of this) {
      items.push(item);
    }
    return items;
  }
}

/**
 * Build pagination query parameters
 */
export function buildPaginationParams(params?: PaginationParams): Record<string, number | boolean | undefined> {
  if (!params) {
    return {};
  }
  return {
    page_size: params.pageSize,
    page_no: params.pageNo,
    count: params.count,
  };
}

/**
 * Create a paginated iterable for a resource
 */
export function createPaginatedIterable<T>(
  httpClient: HttpClient,
  path: string,
  itemsKey: string,
  params?: Record<string, string | number | boolean | undefined>,
  pageSize?: number
): PaginatedIterable<T> {
  return new PaginatedIterable<T>(httpClient, path, itemsKey, params, pageSize);
}
