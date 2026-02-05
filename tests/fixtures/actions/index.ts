/**
 * Actions fixtures
 */

export const list = {
  record_count: 10,
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
      note: 'Found the root cause',
      outcome: 'Resolved',
      timetaken: 30,
      actiondate: '2026-02-01T12:00:00Z',
    },
  ],
};

export const single = {
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
      hiddenfromuser: false,
      actiondate: '2026-02-01T11:00:00Z',
      actiontype_id: 1,
      actiontype_name: 'Note',
    },
  ],
};

export const created = {
  actions: [
    {
      id: 100,
      ticket_id: 1,
      who: 'Tech Support',
      who_agentid: 1,
      who_type: 'agent',
      note: 'New action note',
      outcome: 'In Progress',
      timetaken: 10,
      actiondate: '2026-02-04T12:00:00Z',
    },
  ],
};
