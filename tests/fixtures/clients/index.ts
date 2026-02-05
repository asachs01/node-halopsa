/**
 * Clients fixtures
 */

export const list = {
  record_count: 3,
  clients: [
    {
      id: 1,
      name: 'Acme Corporation',
      inactive: false,
      website: 'https://acme.com',
      phonenumber: '+1 555-1234',
      email: 'contact@acme.com',
    },
    {
      id: 2,
      name: 'TechStart Inc',
      inactive: false,
      website: 'https://techstart.com',
      phonenumber: '+1 555-5678',
      email: 'info@techstart.com',
    },
    {
      id: 3,
      name: 'Old Client LLC',
      inactive: true,
      phonenumber: '+1 555-9999',
    },
  ],
};

export const single = {
  clients: [
    {
      id: 1,
      name: 'Acme Corporation',
      inactive: false,
      main_site_id: 1,
      website: 'https://acme.com',
      notes: 'Premium customer',
      phonenumber: '+1 555-1234',
      email: 'contact@acme.com',
      colour: '#3498db',
    },
  ],
};

export const created = {
  clients: [
    {
      id: 100,
      name: 'New Client Inc',
      inactive: false,
      website: 'https://newclient.com',
      phonenumber: '+1 555-0000',
    },
  ],
};
