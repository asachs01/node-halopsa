/**
 * Reference data resource operations
 */

import type { HttpClient } from '../http.js';
import type {
  TicketType,
  Status,
  Priority,
  Category,
  SLA,
  CustomFieldDefinition,
  UserRole,
  KBArticle,
  RecurringInvoice,
  Report,
  SoftwareLicence,
  ReferenceListParams,
  TicketTypeListResponse,
  StatusListResponse,
  PriorityListResponse,
  CategoryListResponse,
  SLAListResponse,
  CustomFieldListResponse,
  UserRoleListResponse,
  KBArticleListParams,
  KBArticleListResponse,
  KBArticleCreateData,
  KBArticleUpdateData,
  RecurringInvoiceListParams,
  RecurringInvoiceListResponse,
  RecurringInvoiceCreateData,
  RecurringInvoiceUpdateData,
  ReportListResponse,
  ReportRunParams,
  ReportRunResult,
  SoftwareLicenceListParams,
  SoftwareLicenceListResponse,
  SoftwareLicenceCreateData,
  SoftwareLicenceUpdateData,
} from '../types/reference.js';

/**
 * Convert params to request params format
 */
function toRequestParams<T extends object>(params?: T): Record<string, string | number | boolean | undefined> | undefined {
  if (!params) return undefined;
  const result: Record<string, string | number | boolean | undefined> = {};
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) {
      const apiKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
      result[apiKey] = value as string | number | boolean;
    }
  }
  return result;
}

/**
 * Ticket types resource
 */
export class TicketTypesResource {
  constructor(private readonly httpClient: HttpClient) {}

  async list(params?: ReferenceListParams): Promise<TicketTypeListResponse> {
    return this.httpClient.request<TicketTypeListResponse>('/TicketType', { params: toRequestParams(params) });
  }

  async get(id: number): Promise<TicketType> {
    const response = await this.httpClient.request<{ ticket_types: TicketType[] }>(`/TicketType/${id}`);
    const ticketType = response.ticket_types[0];
    if (!ticketType) throw new Error(`Ticket type ${id} not found`);
    return ticketType;
  }
}

/**
 * Statuses resource
 */
export class StatusesResource {
  constructor(private readonly httpClient: HttpClient) {}

  async list(params?: ReferenceListParams): Promise<StatusListResponse> {
    return this.httpClient.request<StatusListResponse>('/Status', { params: toRequestParams(params) });
  }

  async get(id: number): Promise<Status> {
    const response = await this.httpClient.request<{ statuses: Status[] }>(`/Status/${id}`);
    const status = response.statuses[0];
    if (!status) throw new Error(`Status ${id} not found`);
    return status;
  }
}

/**
 * Priorities resource
 */
export class PrioritiesResource {
  constructor(private readonly httpClient: HttpClient) {}

  async list(params?: ReferenceListParams): Promise<PriorityListResponse> {
    return this.httpClient.request<PriorityListResponse>('/Priority', { params: toRequestParams(params) });
  }

  async get(id: number): Promise<Priority> {
    const response = await this.httpClient.request<{ priorities: Priority[] }>(`/Priority/${id}`);
    const priority = response.priorities[0];
    if (!priority) throw new Error(`Priority ${id} not found`);
    return priority;
  }
}

/**
 * Categories resource
 */
export class CategoriesResource {
  constructor(private readonly httpClient: HttpClient) {}

  async list(params?: ReferenceListParams): Promise<CategoryListResponse> {
    return this.httpClient.request<CategoryListResponse>('/Category', { params: toRequestParams(params) });
  }

  async get(id: number): Promise<Category> {
    const response = await this.httpClient.request<{ categories: Category[] }>(`/Category/${id}`);
    const category = response.categories[0];
    if (!category) throw new Error(`Category ${id} not found`);
    return category;
  }
}

/**
 * SLAs resource
 */
export class SLAsResource {
  constructor(private readonly httpClient: HttpClient) {}

  async list(params?: ReferenceListParams): Promise<SLAListResponse> {
    return this.httpClient.request<SLAListResponse>('/SLA', { params: toRequestParams(params) });
  }

  async get(id: number): Promise<SLA> {
    const response = await this.httpClient.request<{ slas: SLA[] }>(`/SLA/${id}`);
    const sla = response.slas[0];
    if (!sla) throw new Error(`SLA ${id} not found`);
    return sla;
  }
}

/**
 * Custom fields resource
 */
export class CustomFieldsResource {
  constructor(private readonly httpClient: HttpClient) {}

  async list(params?: ReferenceListParams): Promise<CustomFieldListResponse> {
    return this.httpClient.request<CustomFieldListResponse>('/FieldInfo', { params: toRequestParams(params) });
  }

  async get(id: number): Promise<CustomFieldDefinition> {
    const response = await this.httpClient.request<{ fields: CustomFieldDefinition[] }>(`/FieldInfo/${id}`);
    const field = response.fields[0];
    if (!field) throw new Error(`Custom field ${id} not found`);
    return field;
  }
}

/**
 * User roles resource
 */
export class UserRolesResource {
  constructor(private readonly httpClient: HttpClient) {}

  async list(params?: ReferenceListParams): Promise<UserRoleListResponse> {
    return this.httpClient.request<UserRoleListResponse>('/Role', { params: toRequestParams(params) });
  }

  async get(id: number): Promise<UserRole> {
    const response = await this.httpClient.request<{ roles: UserRole[] }>(`/Role/${id}`);
    const role = response.roles[0];
    if (!role) throw new Error(`User role ${id} not found`);
    return role;
  }
}

/**
 * Knowledge base resource
 */
export class KnowledgeBaseResource {
  constructor(private readonly httpClient: HttpClient) {}

  async list(params?: KBArticleListParams): Promise<KBArticleListResponse> {
    return this.httpClient.request<KBArticleListResponse>('/KBArticle', { params: toRequestParams(params) });
  }

  async get(id: number): Promise<KBArticle> {
    const response = await this.httpClient.request<{ articles: KBArticle[] }>(`/KBArticle/${id}`);
    const article = response.articles[0];
    if (!article) throw new Error(`KB article ${id} not found`);
    return article;
  }

  async create(data: KBArticleCreateData): Promise<KBArticle> {
    const response = await this.httpClient.request<{ articles: KBArticle[] }>('/KBArticle', {
      method: 'POST',
      body: [data],
    });
    const article = response.articles[0];
    if (!article) throw new Error('Failed to create KB article');
    return article;
  }

  async update(id: number, data: KBArticleUpdateData): Promise<KBArticle> {
    const response = await this.httpClient.request<{ articles: KBArticle[] }>('/KBArticle', {
      method: 'POST',
      body: [{ id, ...data }],
    });
    const article = response.articles[0];
    if (!article) throw new Error('Failed to update KB article');
    return article;
  }

  async delete(id: number): Promise<void> {
    await this.httpClient.request<void>(`/KBArticle/${id}`, { method: 'DELETE' });
  }
}

/**
 * Recurring invoices resource
 */
export class RecurringInvoicesResource {
  constructor(private readonly httpClient: HttpClient) {}

  async list(params?: RecurringInvoiceListParams): Promise<RecurringInvoiceListResponse> {
    return this.httpClient.request<RecurringInvoiceListResponse>('/RecurringInvoice', { params: toRequestParams(params) });
  }

  async get(id: number): Promise<RecurringInvoice> {
    const response = await this.httpClient.request<{ recurring_invoices: RecurringInvoice[] }>(`/RecurringInvoice/${id}`);
    const invoice = response.recurring_invoices[0];
    if (!invoice) throw new Error(`Recurring invoice ${id} not found`);
    return invoice;
  }

  async create(data: RecurringInvoiceCreateData): Promise<RecurringInvoice> {
    const response = await this.httpClient.request<{ recurring_invoices: RecurringInvoice[] }>('/RecurringInvoice', {
      method: 'POST',
      body: [data],
    });
    const invoice = response.recurring_invoices[0];
    if (!invoice) throw new Error('Failed to create recurring invoice');
    return invoice;
  }

  async update(id: number, data: RecurringInvoiceUpdateData): Promise<RecurringInvoice> {
    const response = await this.httpClient.request<{ recurring_invoices: RecurringInvoice[] }>('/RecurringInvoice', {
      method: 'POST',
      body: [{ id, ...data }],
    });
    const invoice = response.recurring_invoices[0];
    if (!invoice) throw new Error('Failed to update recurring invoice');
    return invoice;
  }

  async delete(id: number): Promise<void> {
    await this.httpClient.request<void>(`/RecurringInvoice/${id}`, { method: 'DELETE' });
  }
}

/**
 * Reports resource
 */
export class ReportsResource {
  constructor(private readonly httpClient: HttpClient) {}

  async list(params?: ReferenceListParams): Promise<ReportListResponse> {
    return this.httpClient.request<ReportListResponse>('/Report', { params: toRequestParams(params) });
  }

  async get(id: number): Promise<Report> {
    const response = await this.httpClient.request<{ reports: Report[] }>(`/Report/${id}`);
    const report = response.reports[0];
    if (!report) throw new Error(`Report ${id} not found`);
    return report;
  }

  async run(id: number, params?: ReportRunParams): Promise<ReportRunResult> {
    return this.httpClient.request<ReportRunResult>(`/Report/${id}/Run`, {
      method: 'POST',
      body: params,
    });
  }
}

/**
 * Software licences resource
 */
export class SoftwareLicencesResource {
  constructor(private readonly httpClient: HttpClient) {}

  async list(params?: SoftwareLicenceListParams): Promise<SoftwareLicenceListResponse> {
    return this.httpClient.request<SoftwareLicenceListResponse>('/SoftwareLicence', { params: toRequestParams(params) });
  }

  async get(id: number): Promise<SoftwareLicence> {
    const response = await this.httpClient.request<{ software_licences: SoftwareLicence[] }>(`/SoftwareLicence/${id}`);
    const licence = response.software_licences[0];
    if (!licence) throw new Error(`Software licence ${id} not found`);
    return licence;
  }

  async create(data: SoftwareLicenceCreateData): Promise<SoftwareLicence> {
    const response = await this.httpClient.request<{ software_licences: SoftwareLicence[] }>('/SoftwareLicence', {
      method: 'POST',
      body: [data],
    });
    const licence = response.software_licences[0];
    if (!licence) throw new Error('Failed to create software licence');
    return licence;
  }

  async update(id: number, data: SoftwareLicenceUpdateData): Promise<SoftwareLicence> {
    const response = await this.httpClient.request<{ software_licences: SoftwareLicence[] }>('/SoftwareLicence', {
      method: 'POST',
      body: [{ id, ...data }],
    });
    const licence = response.software_licences[0];
    if (!licence) throw new Error('Failed to update software licence');
    return licence;
  }

  async delete(id: number): Promise<void> {
    await this.httpClient.request<void>(`/SoftwareLicence/${id}`, { method: 'DELETE' });
  }
}
