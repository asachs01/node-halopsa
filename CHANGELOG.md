## [1.0.2](https://github.com/wyre-technology/node-halopsa/compare/v1.0.1...v1.0.2) (2026-05-06)


### Bug Fixes

* **tickets:** handle bare object response and enable pagination ([#2](https://github.com/wyre-technology/node-halopsa/issues/2)) ([c822233](https://github.com/wyre-technology/node-halopsa/commit/c82223398cf3de8a848dd65a2631b9384f574cbe))

## [1.0.1](https://github.com/wyre-technology/node-halopsa/compare/v1.0.0...v1.0.1) (2026-02-18)


### Bug Fixes

* require Node 22+ (semantic-release@25 compatibility) ([3066bd3](https://github.com/wyre-technology/node-halopsa/commit/3066bd32ddaea07a9cf253745f145d047cb54fe6))
* require Node 22+ (semantic-release@25 compatibility) ([eb9dcc6](https://github.com/wyre-technology/node-halopsa/commit/eb9dcc610a11a56af46f906d1fe88c9304778ee3))
* trigger initial npm package publish ([e82601c](https://github.com/wyre-technology/node-halopsa/commit/e82601c37fd441587d5ab0638f8c090a8e09d268))

# 1.0.0 (2026-02-05)


### Bug Fixes

* Add semantic-release configuration for GitHub Packages publishing ([19d242a](https://github.com/asachs01/node-halopsa/commit/19d242a023e501d62d4e1ea45e23d7aa714c7449))


### Features

* Initial implementation of node-halopsa TypeScript library ([f16341d](https://github.com/asachs01/node-halopsa/commit/f16341dfd19dff3dc3f316d4853ac99cef5e6338))

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2026-02-04

### Added

- Initial release
- OAuth 2.0 Client Credentials authentication with automatic token refresh
- Multi-tenant URL support (tenant subdomains)
- Rate limiting with proactive throttling (500 req/3min rolling window)
- Automatic pagination with async iterators
- Complete error handling with typed error classes
- Full TypeScript type definitions

### Resources

- Tickets (CRUD, actions, attachments)
- Actions (CRUD)
- Clients/Companies (CRUD)
- Sites (CRUD)
- Assets/Configuration Items (CRUD)
- Asset Types (list, get)
- Contacts/Users (CRUD)
- Items/Products/Services (CRUD)
- Contracts (CRUD)
- Invoices (CRUD, send)
- Quotes (CRUD, send, convert to invoice)
- Projects (CRUD, tasks)
- Appointments (CRUD)
- Opportunities/Sales (CRUD)
- Suppliers (CRUD)
- Agents/Technicians (CRUD, me)
- Teams (CRUD)
- Software Licences (CRUD)
- Knowledge Base (CRUD)
- Recurring Invoices (CRUD)
- Reports (list, get, run)
- Reference Data (ticket types, statuses, priorities, categories, SLAs, custom fields, user roles)

[unreleased]: https://github.com/asachs01/node-halopsa/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/asachs01/node-halopsa/releases/tag/v0.1.0
