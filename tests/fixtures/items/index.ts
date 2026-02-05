/**
 * Items fixtures
 */

export const list = {
  record_count: 3,
  items: [
    {
      id: 1,
      name: 'Hourly Support',
      description: 'Hourly technical support rate',
      type: 'service',
      unitprice: 150,
      taxable: true,
      inactive: false,
    },
    {
      id: 2,
      name: 'Microsoft 365 License',
      description: 'Monthly M365 Business Premium license',
      type: 'product',
      unitprice: 22,
      cost: 18,
      taxable: true,
      inactive: false,
      sku: 'M365-BP',
    },
    {
      id: 3,
      name: 'Hardware Bundle',
      description: 'Standard workstation bundle',
      type: 'bundle',
      unitprice: 1500,
      taxable: true,
      inactive: false,
    },
  ],
};

export const single = {
  items: [
    {
      id: 1,
      name: 'Hourly Support',
      description: 'Hourly technical support rate',
      type: 'service',
      unitprice: 150,
      taxable: true,
      inactive: false,
      category: 'Services',
    },
  ],
};

export const created = {
  items: [
    {
      id: 100,
      name: 'New Service Item',
      type: 'service',
      unitprice: 100,
      taxable: true,
      inactive: false,
    },
  ],
};
