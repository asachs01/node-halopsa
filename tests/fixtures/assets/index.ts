/**
 * Assets fixtures
 */

export const list = {
  record_count: 3,
  assets: [
    {
      id: 1,
      inventory_number: 'LAPTOP-001',
      assettype_id: 1,
      assettype_name: 'Laptop',
      client_id: 1,
      client_name: 'Acme Corporation',
      site_id: 1,
      site_name: 'Headquarters',
      key_field: 'Dell XPS 15',
      inactive: false,
    },
    {
      id: 2,
      inventory_number: 'SERVER-001',
      assettype_id: 2,
      assettype_name: 'Server',
      client_id: 1,
      client_name: 'Acme Corporation',
      site_id: 1,
      site_name: 'Headquarters',
      key_field: 'Dell PowerEdge R740',
      inactive: false,
    },
    {
      id: 3,
      inventory_number: 'PRINTER-001',
      assettype_id: 3,
      assettype_name: 'Printer',
      client_id: 2,
      client_name: 'TechStart Inc',
      site_id: 3,
      site_name: 'Remote Office',
      key_field: 'HP LaserJet Pro',
      inactive: false,
    },
  ],
};

export const single = {
  assets: [
    {
      id: 1,
      inventory_number: 'LAPTOP-001',
      assettype_id: 1,
      assettype_name: 'Laptop',
      client_id: 1,
      client_name: 'Acme Corporation',
      site_id: 1,
      site_name: 'Headquarters',
      user_id: 1,
      user_name: 'John Smith',
      key_field: 'Dell XPS 15',
      key_field2: 'Intel i7',
      key_field3: '16GB RAM',
      status_id: 1,
      status_name: 'Active',
      inactive: false,
      datepurchased: '2025-01-15',
      warrantyexpires: '2028-01-15',
      notes: 'Assigned to John Smith',
    },
  ],
};

export const created = {
  assets: [
    {
      id: 100,
      inventory_number: 'NEW-ASSET-001',
      assettype_id: 1,
      client_id: 1,
      key_field: 'New Test Asset',
      inactive: false,
    },
  ],
};

export const types = {
  record_count: 3,
  asset_types: [
    { id: 1, name: 'Laptop', description: 'Portable computer', inactive: false },
    { id: 2, name: 'Server', description: 'Server hardware', inactive: false },
    { id: 3, name: 'Printer', description: 'Printing device', inactive: false },
  ],
};

export const singleType = {
  asset_types: [
    { id: 1, name: 'Laptop', description: 'Portable computer', icon: 'laptop', inactive: false },
  ],
};
