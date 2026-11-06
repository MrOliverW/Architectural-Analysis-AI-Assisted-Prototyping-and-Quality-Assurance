1. Analyze a real-world application (open-source codebase or published case study) to identify its architectural style and key components.
*Live Website / Deployment URL: (e.g., Vercel, Netlify, Render, GitHub Pages, Fly.io, or AWS/Cloud Run—if applicable to your project type).

1. Use an AI tool (ChatGPT, Claude, Gemini, GitHub Copilot) to generate an initial architectural breakdown and scaffold a working companion prototype or interactive architectural visualizer/dashboard.
2. Verify, customize, and test the application using a rigorous QA checklist.
3. Deploy and submit your source code, live URL, GitHub repository with full AI prompts, and a video walkthrough demonstrating functionality and testing.


Step 1: Select & Analyze an Existing System
Pick a prominent open-source system (e.g., Mastodon, Ghost, Supabase, Discourse, Mattermost) or a published case study architecture (e.g., Netflix playback engine, Uber dispatch, Spotify audio pipeline).
- Identify its primary architectural style (e.g., modular monolith, event-driven microservices, serverless, layered/tier-based).
- Map its core components (compute engines, databases, queues/brokers, caches, reverse proxies).
Step 2: Leverage AI for Initial Draft & Scaffolding
- Use an LLM to generate an initial breakdown of the system and scaffold a lightweight companion application (e.g., an architectural dashboard, an API client interfacing with the open-source tool, or a functional PoC recreating one subsystem like authentication or queue processing).
- Fact-check the AI: Verify the AI's architectural breakdown against official documentation or source code. Document any hallucinations, outdated library versions, or inaccurate assumptions.
- Customize: Refactor and tailor the generated code to your specific design, styling, and functionality needs.
Step 3: Web Project Testing & Quality Assurance (QA) Checklist
Before recording your submission, run your application through this QA framework and verify each category:
1. [ ] Functional Testing:
- 
  - Core user flows operate without errors (e.g., forms submit, data displays, navigation routes work).
  - Edge cases (empty inputs, long strings, unexpected clicks) are handled gracefully.
- [ ] 2. UI & Responsive Design:
- 
  - Layout renders cleanly on desktop (1920x1080) and mobile/tablet viewport sizes (using browser DevTools).
  - No visual clipping, overlapping text, or broken layout grids.
- [ ] 3. Cross-Browser & Console Health:
- 
  - The application runs cleanly in at least two engines (Chromium-based and Firefox/Safari).
  - The browser developer console is clean (zero uncaught JavaScript errors, zero broken asset 404s).
- [ ] 4. Accessibility & Performance:
- 
  - Form fields have accessible labels and sensible tab-order navigation.
  - Pages load promptly without blocking operations.


  # AI Prompt Log - Ghost CMS Architectural Visualizer

## 1. Project Scaffolding & Setup
- **Prompt:** Configured Vite + React + TypeScript + Tailwind CSS v4 environment.
- **Tooling Used:** Gemini AI, Vite CLI, npm package manager.

## 2. Architecture & Data Modeling
- **Prompt:** Defined TypeScript data models for Ghost CMS system layers (`ghostArchitecture.ts`), including frontend, core backend, data persistence, and API schemas.

## 3. Component Architecture & UI
- **Prompt:** Generated modular React components (`Header`, `ArchitectureCard`, `DetailModal`, `QaDashboard`) with interactive tab switching and modal inspector.