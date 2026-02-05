/**
 * Main HaloPSA Client
 */

import type { HaloPsaConfig, ResolvedConfig } from './config.js';
import { resolveConfig } from './config.js';
import { AuthManager } from './auth.js';
import { HttpClient } from './http.js';
import { RateLimiter } from './rate-limiter.js';
import { TicketsResource } from './resources/tickets.js';
import { ClientsResource } from './resources/clients.js';
import { SitesResource } from './resources/sites.js';
import { AssetsResource, AssetTypesResource } from './resources/assets.js';
import { ContactsResource } from './resources/contacts.js';
import { ItemsResource } from './resources/items.js';
import { ContractsResource } from './resources/contracts.js';
import { InvoicesResource } from './resources/invoices.js';
import { QuotesResource } from './resources/quotes.js';
import { ProjectsResource } from './resources/projects.js';
import { ActionsResource } from './resources/actions.js';
import { AppointmentsResource } from './resources/appointments.js';
import { OpportunitiesResource } from './resources/opportunities.js';
import { SuppliersResource } from './resources/suppliers.js';
import { AgentsResource } from './resources/agents.js';
import { TeamsResource } from './resources/teams.js';
import {
  TicketTypesResource,
  StatusesResource,
  PrioritiesResource,
  CategoriesResource,
  SLAsResource,
  CustomFieldsResource,
  UserRolesResource,
  KnowledgeBaseResource,
  RecurringInvoicesResource,
  ReportsResource,
  SoftwareLicencesResource,
} from './resources/reference.js';

/**
 * HaloPSA API Client
 *
 * @example
 * ```typescript
 * const client = new HaloPsaClient({
 *   clientId: process.env.HALOPSA_CLIENT_ID!,
 *   clientSecret: process.env.HALOPSA_CLIENT_SECRET!,
 *   tenant: 'yourcompany',
 * });
 *
 * // List tickets
 * const tickets = await client.tickets.list({ open_only: true });
 *
 * // Get a specific ticket
 * const ticket = await client.tickets.get(123);
 *
 * // Create a new ticket
 * const newTicket = await client.tickets.create({
 *   summary: 'Network issue',
 *   client_id: 1,
 *   tickettype_id: 1,
 * });
 * ```
 */
export class HaloPsaClient {
  private readonly config: ResolvedConfig;
  private readonly authManager: AuthManager;
  private readonly rateLimiter: RateLimiter;
  private readonly httpClient: HttpClient;

  /** Ticket operations */
  readonly tickets: TicketsResource;
  /** Client (company) operations */
  readonly clients: ClientsResource;
  /** Site operations */
  readonly sites: SitesResource;
  /** Asset (configuration item) operations */
  readonly assets: AssetsResource;
  /** Asset type operations */
  readonly assetTypes: AssetTypesResource;
  /** Contact (user) operations */
  readonly contacts: ContactsResource;
  /** Item (product/service) operations */
  readonly items: ItemsResource;
  /** Contract operations */
  readonly contracts: ContractsResource;
  /** Invoice operations */
  readonly invoices: InvoicesResource;
  /** Quote operations */
  readonly quotes: QuotesResource;
  /** Project operations */
  readonly projects: ProjectsResource;
  /** Action (ticket activity) operations */
  readonly actions: ActionsResource;
  /** Appointment operations */
  readonly appointments: AppointmentsResource;
  /** Opportunity (sales) operations */
  readonly opportunities: OpportunitiesResource;
  /** Supplier operations */
  readonly suppliers: SuppliersResource;
  /** Agent (technician) operations */
  readonly agents: AgentsResource;
  /** Team operations */
  readonly teams: TeamsResource;
  /** Ticket type operations */
  readonly ticketTypes: TicketTypesResource;
  /** Status operations */
  readonly statuses: StatusesResource;
  /** Priority operations */
  readonly priorities: PrioritiesResource;
  /** Category operations */
  readonly categories: CategoriesResource;
  /** SLA operations */
  readonly slas: SLAsResource;
  /** Custom field operations */
  readonly customFields: CustomFieldsResource;
  /** User role operations */
  readonly userRoles: UserRolesResource;
  /** Knowledge base operations */
  readonly knowledgeBase: KnowledgeBaseResource;
  /** Recurring invoice operations */
  readonly recurringInvoices: RecurringInvoicesResource;
  /** Report operations */
  readonly reports: ReportsResource;
  /** Software licence operations */
  readonly softwareLicences: SoftwareLicencesResource;

  constructor(config: HaloPsaConfig) {
    this.config = resolveConfig(config);
    this.authManager = new AuthManager(this.config);
    this.rateLimiter = new RateLimiter(this.config.rateLimit);
    this.httpClient = new HttpClient(this.config, this.authManager, this.rateLimiter);

    // Initialize resources
    this.tickets = new TicketsResource(this.httpClient);
    this.clients = new ClientsResource(this.httpClient);
    this.sites = new SitesResource(this.httpClient);
    this.assets = new AssetsResource(this.httpClient);
    this.assetTypes = new AssetTypesResource(this.httpClient);
    this.contacts = new ContactsResource(this.httpClient);
    this.items = new ItemsResource(this.httpClient);
    this.contracts = new ContractsResource(this.httpClient);
    this.invoices = new InvoicesResource(this.httpClient);
    this.quotes = new QuotesResource(this.httpClient);
    this.projects = new ProjectsResource(this.httpClient);
    this.actions = new ActionsResource(this.httpClient);
    this.appointments = new AppointmentsResource(this.httpClient);
    this.opportunities = new OpportunitiesResource(this.httpClient);
    this.suppliers = new SuppliersResource(this.httpClient);
    this.agents = new AgentsResource(this.httpClient);
    this.teams = new TeamsResource(this.httpClient);
    this.ticketTypes = new TicketTypesResource(this.httpClient);
    this.statuses = new StatusesResource(this.httpClient);
    this.priorities = new PrioritiesResource(this.httpClient);
    this.categories = new CategoriesResource(this.httpClient);
    this.slas = new SLAsResource(this.httpClient);
    this.customFields = new CustomFieldsResource(this.httpClient);
    this.userRoles = new UserRolesResource(this.httpClient);
    this.knowledgeBase = new KnowledgeBaseResource(this.httpClient);
    this.recurringInvoices = new RecurringInvoicesResource(this.httpClient);
    this.reports = new ReportsResource(this.httpClient);
    this.softwareLicences = new SoftwareLicencesResource(this.httpClient);
  }

  /**
   * Get the current configuration
   */
  getConfig(): Readonly<ResolvedConfig> {
    return this.config;
  }

  /**
   * Invalidate the current auth token, forcing a new token to be acquired
   * on the next request
   */
  invalidateToken(): void {
    this.authManager.invalidateToken();
  }

  /**
   * Get the current rate limit status
   */
  getRateLimitStatus(): { remaining: number; rate: number } {
    return {
      remaining: this.rateLimiter.getRemainingRequests(),
      rate: this.rateLimiter.getCurrentRate(),
    };
  }
}
