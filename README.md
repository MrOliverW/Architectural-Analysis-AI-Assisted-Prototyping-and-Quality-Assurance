# Ghost CMS Architecture Visualizer & Interactive Subsystem Simulator

An interactive architectural analysis dashboard and event-driven prototype exploring **Ghost CMS**, a production-grade open-source publishing platform built as a **Modular Monolith**.

---

## 🔗 Submission Links

* **Live Deployment:** [https://ghost-arch-visualizer.pages.dev](https://ghost-arch-visualizer.pages.dev) *(Replace with your actual Cloudflare Pages URL)*
* **GitHub Repository:** [https://github.com/YOUR_USERNAME/ghost-architecture-visualizer](https://github.com/YOUR_USERNAME/ghost-architecture-visualizer)
* **Video Walkthrough:** [https://youtu.be/YOUR_VIDEO_ID](https://youtu.be/YOUR_VIDEO_ID) *(Replace with your Loom or YouTube unlisted video link)*

---

## 🏗️ System Architecture Breakdown

Ghost uses a **Modular Monolith** pattern—combining the clean domain boundary isolation of microservices with the single-deployment simplicity and low latency of a monolith.

### Core Architectural Layers & Components

1. **Reverse Proxy & Edge Processing (Nginx):** Handles SSL termination, static asset caching, rate limiting, and forwards dynamic requests to Node.js.
2. **Core Server (Node.js Express Application):**
   * **Admin & Content APIs:** RESTful JSON endpoints exposing CRUD operations for posts, members, and settings.
   * **Themes & Rendering Engine:** Server-side rendering layer utilizing Express and Handlebars.
   * **Domain Services:** Encapsulated business domains (`PostService`, `MemberService`, `NewsletterService`).
3. **Data Access & ORM (Knex.js & Bookshelf.js):** Provides a clean data-mapping interface supporting schema migrations, connection pooling, and multi-database support.
4. **Data & Caching Layer:**
   * **MySQL 8.0:** Primary relational storage engine for post records, user roles, structured metadata, and transaction integrity.
   * **Redis / Memory Cache:** Caches session tokens, rate limits, and hot query objects to minimize database read overhead.
5. **Asynchronous Event Engine (`EventEmitter` Bus):** decoupled publish-subscribe bus that handles non-blocking background workflows (webhooks, email dispatches, search indexing, and cache invalidation).

### Data & Request Flow