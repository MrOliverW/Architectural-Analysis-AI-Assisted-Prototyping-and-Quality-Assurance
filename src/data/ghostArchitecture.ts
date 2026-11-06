export interface ArchitectureLayer {
  id: string;
  name: string;
  category: 'Frontend' | 'Core Backend' | 'Database & Storage' | 'API & Integration';
  techStack: string[];
  description: string;
  responsibilities: string[];
  qaConsiderations: string[];
  securityRisk: 'Low' | 'Medium' | 'High';
  testCoverage: number; // percentage
}

export interface QaMetric {
  id: string;
  testSuite: string;
  category: string;
  status: 'Passed' | 'Warning' | 'Failed';
  automated: boolean;
  notes: string;
}

export const GHOST_LAYERS: ArchitectureLayer[] = [
  {
    id: 'core-api',
    name: 'Ghost Core API & Server Engine',
    category: 'Core Backend',
    techStack: ['Node.js', 'Express', 'Ghost-CLI'],
    description: 'Central business logic layer managing routing, middleware authentication, transactional hooks, and execution pipelines.',
    responsibilities: [
      'Executes server-side middleware and authentication checks.',
      'Handles content publishing workflows and webhooks dispatch.',
      'Manages database transaction boundaries via ORM models.'
    ],
    qaConsiderations: [
      'Stress testing asynchronous request queues under peak load.',
      'Ensuring middleware session invalidation on logout.',
      'Unit testing database transaction rollback integrity.'
    ],
    securityRisk: 'High',
    testCoverage: 92
  },
  {
    id: 'admin-client',
    name: 'Admin Dashboard Client',
    category: 'Frontend',
    techStack: ['Ember.js', 'React', 'Tailwind CSS'],
    description: 'Single-page management application for content creators, settings management, and subscriber administration.',
    responsibilities: [
      'Rich text Koenig editor rendering and state synchronization.',
      'Role-based access control (RBAC) UI views.',
      'Real-time analytics and publication metrics visualizer.'
    ],
    qaConsiderations: [
      'Cross-browser compatibility for the Koenig editor state engine.',
      'E2E automated testing for post publication workflows via Playwright.',
      'Accessibility (WCAG 2.1 AA) compliance audit.'
    ],
    securityRisk: 'Medium',
    testCoverage: 88
  },
  {
    id: 'db-storage',
    name: 'Database & Data Access Layer',
    category: 'Database & Storage',
    techStack: ['MySQL', 'SQLite', 'Knex.js', 'Bookshelf.js'],
    description: 'Relational data persistence layer managing schemas, migrations, relations, and transactional integrity.',
    responsibilities: [
      'Executes schema migrations and seed operations.',
      'Abstracts SQL dialects across development (SQLite) and production (MySQL).',
      'Caches frequently accessed site settings.'
    ],
    qaConsiderations: [
      'Database migration rollback verification.',
      'Query optimization and indexing checks for high post volume.',
      'SQL injection defense verification on raw Knex queries.'
    ],
    securityRisk: 'High',
    testCoverage: 95
  },
  {
    id: 'content-api',
    name: 'Content & Admin APIs',
    category: 'API & Integration',
    techStack: ['REST', 'GraphQL', 'JWT', 'API Keys'],
    description: 'Decoupled API interface powering headless frontend consumption and third-party integrations.',
    responsibilities: [
      'Delivers read-only content to Jamstack frontends via Content API.',
      'Handles secure CRUD operations via authenticated Admin API.',
      'Validates request payloads against strict JSON schemas.'
    ],
    qaConsiderations: [
      'Rate-limiting verification for authentication endpoints.',
      'Schema validation testing on malformed API payloads.',
      'Token expiration and refreshment verification.'
    ],
    securityRisk: 'Medium',
    testCoverage: 90
  }
];

export const QA_METRICS: QaMetric[] = [
  { id: 'qa-1', testSuite: 'Authentication & Session Flow', category: 'Security QA', status: 'Passed', automated: true, notes: 'JWT token invalidation and password hashing verified.' },
  { id: 'qa-2', testSuite: 'Database Migration Integrity', category: 'Data QA', status: 'Passed', automated: true, notes: 'Schema rollback execution validated cleanly across MySQL 8.0.' },
  { id: 'qa-3', testSuite: 'Headless API Payload Validation', category: 'API QA', status: 'Passed', automated: true, notes: 'JSON schema checks caught invalid post payload structures.' },
  { id: 'qa-4', testSuite: 'Editor State Synchronization', category: 'Frontend QA', status: 'Warning', automated: false, notes: 'Intermittent cursor focus shift detected during rapid multi-user edits.' }
];