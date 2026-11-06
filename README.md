 # Ghost CMS Architectural Visualizer & Quality Assurance Audit

An interactive companion visualizer and quality assurance audit dashboard built to analyze the architectural patterns, component boundaries, and testing frameworks of **Ghost CMS**.

- **Live Deployment:** [https://ghost-architectural-visualizer.pages.dev](https://ghost-architectural-visualizer.pages.dev)
- **Video Demonstration:** https://youtu.be/1dG49GPg-Lc

---

## 1. Architectural Overview & System Breakdown

Ghost CMS is designed primarily as a **Modular Monolith with a Decoupled Headless API Tier**. It combines high developer velocity and single-deploy simplicity while maintaining clean boundary isolation between content management, persistent storage, and public content delivery.

### Primary Architecture Layers
1. **Core API & Server Engine (Node.js / Express)**
   - Manages routing, middleware authentication, webhooks execution, and transactional lifecycle hooks.
2. **Admin Dashboard Client (Ember.js / React)**
   - Single-page management client hosting the Koenig rich text editor, publishing workflows, and role-based access controls (RBAC).
3. **Data Access & Persistence Layer (Knex.js / Bookshelf.js)**
   - Abstracted ORM/Query Builder pattern bridging environment-specific storage (SQLite for local development, MySQL 8.0 for production scale).
4. **Content & Admin APIs (REST / GraphQL)**
   - High-performance, read-only content delivery endpoints for Jamstack frontends alongside authenticated administrative write APIs.

---

## 2. AI Collaboration & Verification Audit

This companion visualizer was scaffolded using generative AI (Gemini) to quickly establish data models and modular UI components. During technical fact-checking and code audit, several build-system and structural corrections were required to meet production standards:

* **TypeScript `verbatimModuleSyntax` Compliance:**  
  * *AI Output:* Generated standard value imports for interface types (e.g., `import { ArchitectureLayer } from './data/ghostArchitecture'`).  
  * *Correction:* Under strict TypeScript build flags, this threw `ts(1484)` compiler errors. Refactored all type references to explicit type-only imports (`import type { ArchitectureLayer }`).
* **Tailwind CSS v4 Integration:**  
  * *AI Output:* Suggested legacy PostCSS initialization (`npx tailwindcss init -p`).  
  * *Correction:* Migrated configuration to the official Vite v4 plugin (`@tailwindcss/vite` in `vite.config.ts`) and configured global imports using `@import "tailwindcss";` in `src/index.css`.
* **JSX Transform Cleanliness:**  
  * *AI Output:* Included default `import React from 'react'` statements across components.  
  * *Correction:* Removed unused `React` imports to resolve TS6133 warnings under modern React JSX transforms.

---

## 3. Web Project Testing & Quality Assurance (QA) Framework

The companion visualizer was audited against the four primary categories of the Web Project QA Framework:

### 1. Functional Testing
- **State Management:** Seamless tab switching between the *System Architecture* inspection grid and the *QA & Testing Matrix*.
- **Modal Lifecycle:** Deep-dive subsystem modals open cleanly on card selection and close via background backdrop clicks, key presses, or modal control triggers without losing application focus.

### 2. UI & Responsive Design
- **Grid Reflow:** Evaluated across Desktop (1920x1080), Tablet (768px), and Mobile (390px) viewports via browser DevTools.
- **Layout Integrity:** Visual grid dynamically collapses from a 2-column layout to a stacked 1-column mobile interface with zero horizontal scrolling, clipping, or text overlap.

### 3. Cross-Browser & Console Health
- **Engine Verification:** Audited and verified across Chromium-based browsers (Brave, Chrome, Edge) and Firefox.
- **Console Audit:** Developer Tools console exhibits **zero uncaught JavaScript runtime errors**, zero warnings, and **zero 404 network failures**.

### 4. Accessibility & Performance
- **DOM Accessibility:** Keyboard navigation (`Tab` / `Shift+Tab`) provides visible focus indicators across all interactive card and header controls.
- **Edge Deployment:** Production assets compile to a lightweight static bundle (~260 KB) served globally via Cloudflare Pages edge network for fast load times.

---

## 4. Local Development & Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation
```bash
# Clone the repository
git clone [https://github.com/YOUR_GITHUB_USERNAME/Architectural-Analysis-AI-Assisted-Prototyping-and-Quality-Assurance.git](https://github.com/YOUR_GITHUB_USERNAME/Architectural-Analysis-AI-Assisted-Prototyping-and-Quality-Assurance.git)

# Navigate to project directory
cd Architectural-Analysis-AI-Assisted-Prototyping-and-Quality-Assurance

# Install dependencies
npm install

# Start local development server
npm run dev