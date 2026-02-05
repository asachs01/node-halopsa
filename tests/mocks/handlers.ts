/**
 * MSW request handlers for mocking the HaloPSA API
 */

import { http, HttpResponse } from 'msw';
import * as fixtures from '../fixtures/index.js';

const BASE_URL = 'https://testcompany.halopsa.com';
const API_BASE = `${BASE_URL}/api`;

export const handlers = [
  // OAuth token endpoint
  http.post(`${BASE_URL}/auth/token`, async ({ request }) => {
    const body = await request.text();

    // Check for bad credentials
    if (body.includes('bad-client-id') || body.includes('bad-client-secret')) {
      return HttpResponse.json(
        { error: 'invalid_client', error_description: 'Bad credentials' },
        { status: 400 }
      );
    }

    return HttpResponse.json(fixtures.auth.tokenSuccess);
  }),

  // Tickets endpoints
  http.get(`${API_BASE}/Tickets`, ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('page_no') || '1';
    if (page === '2') {
      return HttpResponse.json(fixtures.tickets.listPage2);
    }
    return HttpResponse.json(fixtures.tickets.listPage1);
  }),

  http.get(`${API_BASE}/Tickets/:id`, ({ params }) => {
    const id = Number(params['id']);
    if (id === 999) {
      return HttpResponse.json({ tickets: [] });
    }
    return HttpResponse.json(fixtures.tickets.single);
  }),

  http.post(`${API_BASE}/Tickets`, () => {
    return HttpResponse.json(fixtures.tickets.created);
  }),

  http.delete(`${API_BASE}/Tickets/:id`, () => {
    return HttpResponse.json({});
  }),

  http.get(`${API_BASE}/Tickets/:id/Actions`, () => {
    return HttpResponse.json(fixtures.tickets.actions);
  }),

  http.get(`${API_BASE}/Tickets/:id/Attachments`, () => {
    return HttpResponse.json(fixtures.tickets.attachments);
  }),

  // Actions endpoints
  http.get(`${API_BASE}/Actions`, () => {
    return HttpResponse.json(fixtures.actions.list);
  }),

  http.get(`${API_BASE}/Actions/:id`, () => {
    return HttpResponse.json(fixtures.actions.single);
  }),

  http.post(`${API_BASE}/Actions`, () => {
    return HttpResponse.json(fixtures.actions.created);
  }),

  http.delete(`${API_BASE}/Actions/:id`, () => {
    return HttpResponse.json({});
  }),

  // Clients endpoints
  http.get(`${API_BASE}/Client`, () => {
    return HttpResponse.json(fixtures.clients.list);
  }),

  http.get(`${API_BASE}/Client/:id`, () => {
    return HttpResponse.json(fixtures.clients.single);
  }),

  http.post(`${API_BASE}/Client`, () => {
    return HttpResponse.json(fixtures.clients.created);
  }),

  http.delete(`${API_BASE}/Client/:id`, () => {
    return HttpResponse.json({});
  }),

  // Sites endpoints
  http.get(`${API_BASE}/Site`, () => {
    return HttpResponse.json(fixtures.sites.list);
  }),

  http.get(`${API_BASE}/Site/:id`, () => {
    return HttpResponse.json(fixtures.sites.single);
  }),

  http.post(`${API_BASE}/Site`, () => {
    return HttpResponse.json(fixtures.sites.created);
  }),

  http.delete(`${API_BASE}/Site/:id`, () => {
    return HttpResponse.json({});
  }),

  // Assets endpoints
  http.get(`${API_BASE}/Asset`, () => {
    return HttpResponse.json(fixtures.assets.list);
  }),

  http.get(`${API_BASE}/Asset/:id`, () => {
    return HttpResponse.json(fixtures.assets.single);
  }),

  http.post(`${API_BASE}/Asset`, () => {
    return HttpResponse.json(fixtures.assets.created);
  }),

  http.delete(`${API_BASE}/Asset/:id`, () => {
    return HttpResponse.json({});
  }),

  http.get(`${API_BASE}/AssetType`, () => {
    return HttpResponse.json(fixtures.assets.types);
  }),

  http.get(`${API_BASE}/AssetType/:id`, () => {
    return HttpResponse.json(fixtures.assets.singleType);
  }),

  // Contacts endpoints
  http.get(`${API_BASE}/Users`, () => {
    return HttpResponse.json(fixtures.contacts.list);
  }),

  http.get(`${API_BASE}/Users/:id`, () => {
    return HttpResponse.json(fixtures.contacts.single);
  }),

  http.post(`${API_BASE}/Users`, () => {
    return HttpResponse.json(fixtures.contacts.created);
  }),

  http.delete(`${API_BASE}/Users/:id`, () => {
    return HttpResponse.json({});
  }),

  // Items endpoints
  http.get(`${API_BASE}/Item`, () => {
    return HttpResponse.json(fixtures.items.list);
  }),

  http.get(`${API_BASE}/Item/:id`, () => {
    return HttpResponse.json(fixtures.items.single);
  }),

  http.post(`${API_BASE}/Item`, () => {
    return HttpResponse.json(fixtures.items.created);
  }),

  http.delete(`${API_BASE}/Item/:id`, () => {
    return HttpResponse.json({});
  }),

  // Agents endpoints
  http.get(`${API_BASE}/Agent`, () => {
    return HttpResponse.json(fixtures.agents.list);
  }),

  http.get(`${API_BASE}/Agent/:id`, () => {
    return HttpResponse.json(fixtures.agents.single);
  }),

  http.get(`${API_BASE}/Agent/me`, () => {
    return HttpResponse.json(fixtures.agents.me);
  }),

  http.post(`${API_BASE}/Agent`, () => {
    return HttpResponse.json(fixtures.agents.created);
  }),

  http.delete(`${API_BASE}/Agent/:id`, () => {
    return HttpResponse.json({});
  }),

  // Reference data endpoints
  http.get(`${API_BASE}/TicketType`, () => {
    return HttpResponse.json(fixtures.reference.ticketTypes);
  }),

  http.get(`${API_BASE}/TicketType/:id`, () => {
    return HttpResponse.json(fixtures.reference.singleTicketType);
  }),

  http.get(`${API_BASE}/Status`, () => {
    return HttpResponse.json(fixtures.reference.statuses);
  }),

  http.get(`${API_BASE}/Status/:id`, () => {
    return HttpResponse.json(fixtures.reference.singleStatus);
  }),

  http.get(`${API_BASE}/Priority`, () => {
    return HttpResponse.json(fixtures.reference.priorities);
  }),

  http.get(`${API_BASE}/Priority/:id`, () => {
    return HttpResponse.json(fixtures.reference.singlePriority);
  }),

  // Rate limit test endpoint
  http.get(`${API_BASE}/rate-limited`, () => {
    return HttpResponse.json(
      { error: 'rate_limit_exceeded' },
      { status: 429, headers: { 'Retry-After': '60' } }
    );
  }),

  // 401 test endpoint
  http.get(`${API_BASE}/unauthorized`, () => {
    return HttpResponse.json(
      { error: 'unauthorized' },
      { status: 401 }
    );
  }),

  // 403 test endpoint
  http.get(`${API_BASE}/forbidden`, () => {
    return HttpResponse.json(
      { error: 'forbidden', message: 'Access denied' },
      { status: 403 }
    );
  }),

  // 404 test endpoint
  http.get(`${API_BASE}/not-found`, () => {
    return HttpResponse.json(
      { error: 'not_found' },
      { status: 404 }
    );
  }),

  // 500 test endpoint
  http.get(`${API_BASE}/server-error`, () => {
    return HttpResponse.json(
      { error: 'internal_server_error' },
      { status: 500 }
    );
  }),

  // Validation error test endpoint
  http.post(`${API_BASE}/validation-error`, () => {
    return HttpResponse.json(
      {
        errors: [
          { field: 'summary', message: 'Summary is required' },
          { field: 'client_id', message: 'Client ID must be a positive number' },
        ],
      },
      { status: 400 }
    );
  }),
];
