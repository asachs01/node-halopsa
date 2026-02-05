/**
 * Type exports for HaloPSA
 */

export * from './common.js';
export * from './tickets.js';
export * from './clients.js';
export * from './sites.js';
export * from './assets.js';
export * from './contacts.js';
export * from './items.js';
export * from './contracts.js';
export * from './invoices.js';
export * from './quotes.js';
export * from './projects.js';
// Note: actions.js types are exported from tickets.js to avoid conflicts
export * from './appointments.js';
export * from './opportunities.js';
export * from './suppliers.js';
export * from './agents.js';
export * from './teams.js';
export * from './reference.js';

// Re-export Action types from actions.js with distinct names
export type {
  Action,
  ActionListParams as StandaloneActionListParams,
  ActionListResponse as StandaloneActionListResponse,
  ActionCreateData as StandaloneActionCreateData,
  ActionUpdateData,
} from './actions.js';
