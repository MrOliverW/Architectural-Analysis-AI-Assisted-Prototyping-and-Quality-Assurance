Student: Oliver Warlick

Instructions:

Objective & Overview
In software engineering, architects do not simply analyze system design on a whiteboard; they validate their ideas by spinning up proofs-of-concept (PoCs), probing open-source repositories, and running automated or systematic QA suites to confirm that functional and non-functional requirements are met.

In this assignment, you will:

Analyze a real-world application (open-source codebase or published case study) to identify its architectural style and key components.
Use an AI tool (ChatGPT, Claude, Gemini, GitHub Copilot) to generate an initial architectural breakdown and scaffold a working companion prototype or interactive architectural visualizer/dashboard.
Verify, customize, and test the application using a rigorous QA checklist.
Deploy and submit your source code, live URL, GitHub repository with full AI prompts, and a video walkthrough demonstrating functionality and testing.
Assignment Deliverables
Submit the following four items in the LMS submission text box:

Live Website / Deployment URL: (e.g., Vercel, Netlify, Render, GitHub Pages, Fly.io, or AWS/Cloud Run—if applicable to your project type).
GitHub Repository URL: Public repository containing your code and a complete README.md.
README.md Documentation:
Project Description: Overview of the application analyzed and the prototype built.
Setup & Run Instructions: Clear steps to clone, configure environment variables, and run locally.
AI Disclosure & Prompt Appendix: The exact AI tools used, sample prompts submitted, initial output generated, and a summary of what you verified, corrected, or customized.
Video Demonstration Link: A 5-to-7 minute video (YouTube unlisted/public, Loom, or Panopto) containing:
Architectural Overview: Slides/diagrams explaining the target application’s architectural style, components, and your AI verification audit.
Functionality Walkthrough: A screen recording of the live prototype in action.
QA & Test Case Verification: A live walkthrough of the Web Project Testing & Quality Assurance Guide checklist.
Step-by-Step Instructions
Step 1: Select & Analyze an Existing System
Pick a prominent open-source system (e.g., Mastodon, Ghost, Supabase, Discourse, Mattermost) or a published case study architecture (e.g., Netflix playback engine, Uber dispatch, Spotify audio pipeline).

Identify its primary architectural style (e.g., modular monolith, event-driven microservices, serverless, layered/tier-based).
Map its core components (compute engines, databases, queues/brokers, caches, reverse proxies).
Step 2: Leverage AI for Initial Draft & Scaffolding
Use an LLM to generate an initial breakdown of the system and scaffold a lightweight companion application (e.g., an architectural dashboard, an API client interfacing with the open-source tool, or a functional PoC recreating one subsystem like authentication or queue processing).
Fact-check the AI: Verify the AI's architectural breakdown against official documentation or source code. Document any hallucinations, outdated library versions, or inaccurate assumptions.
Customize: Refactor and tailor the generated code to your specific design, styling, and functionality needs.
Step 3: Web Project Testing & Quality Assurance (QA) Checklist
Before recording your submission, run your application through this QA framework and verify each category:

[ ] 1. Functional Testing:
Core user flows operate without errors (e.g., forms submit, data displays, navigation routes work).
Edge cases (empty inputs, long strings, unexpected clicks) are handled gracefully.
[ ] 2. UI & Responsive Design:
Layout renders cleanly on desktop (1920x1080) and mobile/tablet viewport sizes (using browser DevTools).
No visual clipping, overlapping text, or broken layout grids.
[ ] 3. Cross-Browser & Console Health:
The application runs cleanly in at least two engines (Chromium-based and Firefox/Safari).
The browser developer console is clean (zero uncaught JavaScript errors, zero broken asset 404s).
[ ] 4. Accessibility & Performance:
Form fields have accessible labels and sensible tab-order navigation.
Pages load promptly without blocking operations.