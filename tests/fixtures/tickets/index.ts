/**
 * Tickets fixtures
 */

export const listPage1 = {
  record_count: 75,
  tickets: [
    {
      id: 1,
      summary: 'Network connectivity issue',
      details: 'User cannot access shared drives',
      client_id: 1,
      client_name: 'Acme Corp',
      tickettype_id: 1,
      tickettype_name: 'Incident',
      status_id: 1,
      status_name: 'New',
      priority_id: 2,
      priority_name: 'Medium',
      dateoccurred: '2026-02-01T10:00:00Z',
      datecreated: '2026-02-01T10:00:00Z',
    },
    {
      id: 2,
      summary: 'Email not syncing',
      details: 'Outlook not syncing on mobile device',
      client_id: 1,
      client_name: 'Acme Corp',
      tickettype_id: 1,
      tickettype_name: 'Incident',
      status_id: 2,
      status_name: 'In Progress',
      priority_id: 1,
      priority_name: 'High',
      dateoccurred: '2026-02-02T09:00:00Z',
      datecreated: '2026-02-02T09:00:00Z',
    },
  ],
};

export const listPage2 = {
  record_count: 75,
  tickets: [
    {
      id: 3,
      summary: 'Printer not working',
      details: 'Office printer showing offline',
      client_id: 2,
      client_name: 'TechStart Inc',
      tickettype_id: 1,
      tickettype_name: 'Incident',
      status_id: 1,
      status_name: 'New',
      priority_id: 3,
      priority_name: 'Low',
      dateoccurred: '2026-02-03T14:00:00Z',
      datecreated: '2026-02-03T14:00:00Z',
    },
  ],
};

export const single = {
  tickets: [
    {
      id: 1,
      summary: 'Network connectivity issue',
      details: 'User cannot access shared drives',
      client_id: 1,
      client_name: 'Acme Corp',
      site_id: 1,
      site_name: 'Headquarters',
      user_id: 1,
      user_name: 'John Smith',
      agent_id: 1,
      agent_name: 'Tech Support',
      tickettype_id: 1,
      tickettype_name: 'Incident',
      status_id: 1,
      status_name: 'New',
      priority_id: 2,
      priority_name: 'Medium',
      category_1: 'Network',
      dateoccurred: '2026-02-01T10:00:00Z',
      datecreated: '2026-02-01T10:00:00Z',
    },
  ],
};

export const created = {
  tickets: [
    {
      id: 100,
      summary: 'New test ticket',
      details: 'Test ticket details',
      client_id: 1,
      tickettype_id: 1,
      status_id: 1,
      priority_id: 2,
      dateoccurred: '2026-02-04T12:00:00Z',
      datecreated: '2026-02-04T12:00:00Z',
    },
  ],
};

export const actions = {
  record_count: 2,
  actions: [
    {
      id: 1,
      ticket_id: 1,
      who: 'Tech Support',
      who_agentid: 1,
      who_type: 'agent',
      note: 'Investigating the issue',
      outcome: 'In Progress',
      timetaken: 15,
      actiondate: '2026-02-01T11:00:00Z',
    },
    {
      id: 2,
      ticket_id: 1,
      who: 'Tech Support',
      who_agentid: 1,
      who_type: 'agent',
      note: 'Found the root cause - DNS misconfiguration',
      outcome: 'Resolved',
      timetaken: 30,
      actiondate: '2026-02-01T12:00:00Z',
    },
  ],
};

export const attachments = {
  record_count: 1,
  attachments: [
    {
      id: 1,
      ticket_id: 1,
      filename: 'screenshot.png',
      contenttype: 'image/png',
      filesize: 102400,
      datecreated: '2026-02-01T10:30:00Z',
    },
  ],
};
