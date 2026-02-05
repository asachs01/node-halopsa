/**
 * Reference data fixtures
 */

export const ticketTypes = {
  record_count: 3,
  ticket_types: [
    { id: 1, name: 'Incident', description: 'Unplanned interruption', inactive: false },
    { id: 2, name: 'Service Request', description: 'Standard service request', inactive: false },
    { id: 3, name: 'Problem', description: 'Root cause of incidents', inactive: false },
  ],
};

export const singleTicketType = {
  ticket_types: [
    { id: 1, name: 'Incident', description: 'Unplanned interruption', inactive: false },
  ],
};

export const statuses = {
  record_count: 4,
  statuses: [
    { id: 1, name: 'New', colour: '#3498db', isopen: true, isdefault: true, sortorder: 1 },
    { id: 2, name: 'In Progress', colour: '#f39c12', isopen: true, isdefault: false, sortorder: 2 },
    { id: 3, name: 'Waiting', colour: '#9b59b6', isopen: true, isdefault: false, sortorder: 3 },
    { id: 4, name: 'Closed', colour: '#27ae60', isopen: false, isdefault: false, sortorder: 4 },
  ],
};

export const singleStatus = {
  statuses: [
    { id: 1, name: 'New', colour: '#3498db', isopen: true, isdefault: true, sortorder: 1 },
  ],
};

export const priorities = {
  record_count: 4,
  priorities: [
    { id: 1, name: 'Critical', colour: '#e74c3c', sortorder: 1 },
    { id: 2, name: 'High', colour: '#e67e22', sortorder: 2 },
    { id: 3, name: 'Medium', colour: '#f1c40f', sortorder: 3 },
    { id: 4, name: 'Low', colour: '#27ae60', sortorder: 4 },
  ],
};

export const singlePriority = {
  priorities: [
    { id: 1, name: 'Critical', colour: '#e74c3c', sla_id: 1, sortorder: 1 },
  ],
};
