/**
 * Contacts fixtures
 */

export const list = {
  record_count: 3,
  users: [
    {
      id: 1,
      name: 'John Smith',
      emailaddress: 'john.smith@acme.com',
      phonenumber: '+1 555-1111',
      client_id: 1,
      client_name: 'Acme Corporation',
      site_id: 1,
      site_name: 'Headquarters',
      inactive: false,
      isimportantcontact: true,
      isserviceaccount: false,
    },
    {
      id: 2,
      name: 'Jane Doe',
      emailaddress: 'jane.doe@acme.com',
      phonenumber: '+1 555-2222',
      client_id: 1,
      client_name: 'Acme Corporation',
      site_id: 1,
      site_name: 'Headquarters',
      inactive: false,
      isimportantcontact: false,
      isserviceaccount: false,
    },
    {
      id: 3,
      name: 'Bob Wilson',
      emailaddress: 'bob.wilson@techstart.com',
      client_id: 2,
      client_name: 'TechStart Inc',
      inactive: false,
      isimportantcontact: true,
      isserviceaccount: false,
    },
  ],
};

export const single = {
  users: [
    {
      id: 1,
      name: 'John Smith',
      emailaddress: 'john.smith@acme.com',
      phonenumber: '+1 555-1111',
      mobilephone: '+1 555-1112',
      client_id: 1,
      client_name: 'Acme Corporation',
      site_id: 1,
      site_name: 'Headquarters',
      inactive: false,
      isimportantcontact: true,
      isserviceaccount: false,
      notes: 'Primary IT contact',
    },
  ],
};

export const created = {
  users: [
    {
      id: 100,
      name: 'New Contact',
      emailaddress: 'new.contact@test.com',
      client_id: 1,
      inactive: false,
      isimportantcontact: false,
      isserviceaccount: false,
    },
  ],
};
