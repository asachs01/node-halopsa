/**
 * Sites fixtures
 */

export const list = {
  record_count: 3,
  sites: [
    {
      id: 1,
      name: 'Headquarters',
      client_id: 1,
      client_name: 'Acme Corporation',
      inactive: false,
      addressline1: '123 Main St',
      postcode: '12345',
      country: 'USA',
    },
    {
      id: 2,
      name: 'Branch Office',
      client_id: 1,
      client_name: 'Acme Corporation',
      inactive: false,
      addressline1: '456 Oak Ave',
      postcode: '67890',
      country: 'USA',
    },
    {
      id: 3,
      name: 'Remote Office',
      client_id: 2,
      client_name: 'TechStart Inc',
      inactive: false,
      addressline1: '789 Tech Blvd',
      postcode: '11111',
      country: 'USA',
    },
  ],
};

export const single = {
  sites: [
    {
      id: 1,
      name: 'Headquarters',
      client_id: 1,
      client_name: 'Acme Corporation',
      inactive: false,
      phonenumber: '+1 555-1234',
      addressline1: '123 Main St',
      addressline2: 'Suite 100',
      postcode: '12345',
      country: 'USA',
      latitude: 40.7128,
      longitude: -74.006,
    },
  ],
};

export const created = {
  sites: [
    {
      id: 100,
      name: 'New Site',
      client_id: 1,
      inactive: false,
      addressline1: '999 New St',
      postcode: '99999',
    },
  ],
};
