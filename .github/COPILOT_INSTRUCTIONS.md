# Copilot Instruction — TypeScript 5 / ES2022 (project-specific)

Purpose
- Provide succinct, actionable guidance for GitHub Copilot to generate code consistent with this repository: a CRA-based React component/block library using Tailwind/PostCSS and Node tooling.

Core Intent
- Preserve existing architecture and coding conventions. Prefer clear, maintainable code over clever one-liners. Keep modules single-purpose and composable.

Language & Target
- Target TypeScript 5.x and emit ES2022 output. Use modern JS features where supported by the build pipeline.
- Use ES modules (import/export). Do not emit CommonJS (`require`/`module.exports`).

Project Conventions
- File names: kebab-case for modules; PascalCase for React components (files may be `MyComponent.tsx`).
- Place tests alongside implementation when helpful (`component.test.tsx`).
- Reuse shared utilities in `src/` before adding new helpers.

Types & Safety
- Avoid `any`. Use `unknown` + narrowing or explicit types. Prefer discriminated unions for variant/state shapes.
- Export small, focused interfaces; centralize shared types in `src/types` when reused.

Styling
- Tailwind is compiled via PostCSS. Generated classes should be used in JSX; avoid embedding large style blocks inline unless scoped to small components.
- Global CSS lives in `src/index.css` and includes Tailwind directives.

Build & Tooling
- The repo uses CRACO to extend CRA. Respect CRA lifecycles (scripts in `package.json`) and avoid requiring ejecting.
- Scripts may set `NODE_OPTIONS=--openssl-legacy-provider` for older tool compatibility; prefer fixing tool versions instead of permanently relying on this flag.

Async & Errors
- Use `async/await` with try/catch. Surface user-visible errors via the repo's UI notification pattern and log internal errors to the shared logger.

Testing
- Add/update unit tests for new features. Use the repo's test runner and match naming conventions.

Security
- Sanitize external input and never hardcode secrets. Use parameterized queries and vetted crypto libraries.

Compatibility Notes
- When suggesting dependency upgrades, include a compatibility assessment for CRA/react-scripts, webpack plugins, and AJV/schema-utils (these frequently cause runtime issues).

Doc & Comments
- Add brief JSDoc to exported APIs and include examples for public components. Comments should explain intent, not restate code.

When Uncertain
- If a change might be breaking (build tooling, major React upgrade), propose the minimal, reversible change and add a short migration/test plan.

Apply To
- Files: `src/**/*.ts`, `src/**/*.tsx`, `craco.config.js`, `postcss.config.js`, `tailwind.config.js`.

---
Description: Project-specific Copilot guidance for TypeScript 5 / ES2022 output.
