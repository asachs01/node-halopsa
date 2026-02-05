/**
 * Agents fixtures
 */

export const list = {
  record_count: 3,
  agents: [
    {
      id: 1,
      name: 'Tech Support',
      email: 'tech@company.com',
      phonenumber: '+1 555-0001',
      team_id: 1,
      team_name: 'Support Team',
      inactive: false,
      isadmin: false,
    },
    {
      id: 2,
      name: 'Admin User',
      email: 'admin@company.com',
      team_id: 1,
      team_name: 'Support Team',
      inactive: false,
      isadmin: true,
    },
    {
      id: 3,
      name: 'Inactive Agent',
      email: 'inactive@company.com',
      inactive: true,
      isadmin: false,
    },
  ],
};

export const single = {
  agents: [
    {
      id: 1,
      name: 'Tech Support',
      email: 'tech@company.com',
      phonenumber: '+1 555-0001',
      mobilephone: '+1 555-0002',
      jobtitle: 'Support Technician',
      team_id: 1,
      team_name: 'Support Team',
      inactive: false,
      isadmin: false,
      permissions: ['tickets.view', 'tickets.create', 'tickets.edit'],
    },
  ],
};

export const me = {
  agents: [
    {
      id: 1,
      name: 'Tech Support',
      email: 'tech@company.com',
      team_id: 1,
      team_name: 'Support Team',
      inactive: false,
      isadmin: false,
      permissions: ['tickets.view', 'tickets.create', 'tickets.edit'],
    },
  ],
};

export const created = {
  agents: [
    {
      id: 100,
      name: 'New Agent',
      email: 'new.agent@company.com',
      inactive: false,
      isadmin: false,
    },
  ],
};
