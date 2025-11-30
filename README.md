# Career Fair

A modern React + Vite single-page application that simulates a campus Career Fair. It provides separate student and admin experiences, dynamic company booths with videos and job listings, a chat interface, resume upload, dark/light themes, and a fully custom CSS design system (no Tailwind).

## Tech Stack

- React 19 (functional components + hooks)
- Vite 7 (dev server + build)
- React Router DOM (role-based routing + protected routes)
- Custom CSS (semantic utility classes, theming via CSS variables)
- LocalStorage (persistence for companies and resume)

## Key Features

- Role-based login and navigation (Student/Admin)
- Dark mode with toggle and persisted preference
- Companies management (Admin add/edit/delete; Student consumes live list)
- Dynamic booth pages for multiple companies with hero videos and curated job listings
- Student resume upload (PDF) with preview link
- Chat UI with message sending and auto-scroll
- Polished UI: hero sections, stat cards, elevated cards and lists

## Project Structure

```
career-fair/
├─ index.html
├─ package.json
├─ vite.config.js
├─ public/
├─ src/
│  ├─ App.jsx
│  ├─ index.css
│  ├─ main.jsx
│  ├─ assets/
│  │  ├─ logos/ (company logos)
│  │  ├─ videos/ (booth hero videos)
│  │  └─ styles/ (SCSS & compiled CSS for globals/variables)
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Button.jsx
│  │  ├─ CompanyCard.jsx
│  │  └─ ChatBubble.jsx
│  ├─ contexts/
│  │  └─ CompaniesContext.jsx
│  ├─ pages/
│  │  ├─ Login.jsx
│  │  ├─ admin/
│  │  │  ├─ AdminDashboard.jsx
│  │  │  ├─ AdminCompanies.jsx
│  │  │  └─ AdminSchedule.jsx (optional)
│  │  ├─ student/
│  │  │  ├─ StudentDashboard.jsx
│  │  │  ├─ StudentCompanies.jsx
│  │  │  └─ StudentChat.jsx
│  │  └─ booths/
│  │     ├─ CompanyBooth.jsx (slug router)
│  │     ├─ GoogleBooth.jsx
│  │     ├─ AmazonBooth.jsx
│  │     ├─ InfosysBooth.jsx
│  │     ├─ TCSBooth.jsx
│  │     ├─ MicrosoftBooth.jsx
│  │     ├─ MetaBooth.jsx
│  │     ├─ AppleBooth.jsx
│  │     └─ NetflixBooth.jsx
```

## Routing Overview

- Public:
	- `/` → Login (select Student/Admin)
- Student:
	- `/student/dashboard` → Overview + resume upload + upcoming events
	- `/student/companies` → Live companies list (from context)
	- `/student/chat` → Chat interface
	- `/student/companies/:slug` → Booth page for selected company
- Admin:
	- `/admin/dashboard` → Overview + quick actions + stats
	- `/admin/companies` → Manage companies (CRUD)
	- `/admin/schedule` → Example schedule page (optional)
- Shared booth route:
	- `/companies/:slug` → Booth page (Google, Amazon, Infosys, TCS, Microsoft, Meta, Apple, Netflix)

## State & Persistence

- Theme: stored in `localStorage` and applied via `data-theme` with CSS variables.
- Companies: managed in `CompaniesContext` (add/edit/delete), persisted in `localStorage` under `cf-companies`.
	- Uses a default companies list and merges with stored entries by `name` on load.
	- Hydrates logos using imported assets to avoid broken paths.
- Resume: stored in `localStorage` under `cf-resume` with `{ name, url }`; URL generated via `URL.createObjectURL`.
- Chat: local component state with auto-scroll; can be extended to persist or segment by company.

## Styling System

- `src/index.css` contains semantic classes and theme tokens:
	- Colors: `--primary`, `--text`, `--muted`, `--bg`, `--surface`, `--border-color`, etc.
	- Layout: `.container`, `.page`, `.page-main`
	- Components: `.navbar`, `.btn` variants, `.card`, `.grid-*`, `.title-*`, `.form-field`, `.chat-row`, `.bubble`, `.section`, `.section-muted`
	- Dashboards: `.dashboard-hero`, `.stats`, `.stat-card`, `.list-muted .item`
	- Login polish: `.login-bg`, `.glass`, `.tabs`, `.tab`
	- Footer: `.site-footer`

## Booth Pages

Each booth page includes:
- A hero video imported via Vite from `src/assets/videos/*`
- A brief company description
- A curated list of 12+ job offers with title, location, type, and experience

Available booths:
- Google, Amazon, Infosys, TCS, Microsoft, Meta, Apple, Netflix

## Assets

- Logos: `src/assets/logos/`
	- Examples: `google.png`, `amazon.png`, `infosys.png`, `microsoft.png.png`, `netflix.png.png`
	- Note: if double `.png` extensions are unintentional, rename to single `.png` and update imports.
- Videos: `src/assets/videos/`
	- Examples: `videoplayback.mp4` (Google), `amazonvid.mp4`, `infosysvid.mp4`, `microsoftvid.mp4`, `netflixvid.mp4`

## Getting Started

Install dependencies and start the dev server:

```powershell
npm install
npm run dev
```

Build and preview production:

```powershell
npm run build
npm run preview
```

## Login & Roles

- On the Login page, choose a role (Student or Admin).
- Enter any email/password to proceed (demo app).
- A lightweight human check (“I’m not a robot”) must be ticked before login.

## Companies Management (Admin)

- Add a company with name, description, status, and booths count.
- Edit or delete companies from the table.
- Student companies list updates immediately due to shared context.

## Student Experience

- Dashboard with hero overview, stat cards, upcoming events list, and resume manager.
- Companies page with logo, status, and quick “See More” routing to booths.
- Chat page with send functionality and auto-scroll.

## Theming (Light/Dark)

- Toggle theme from the Navbar.
- `data-theme="dark"` switches to dark tokens and styles.
- Preference is persisted across sessions.

## Notes & Caveats

- The context file shows a Vite fast-refresh warning when exporting helpers alongside a component. This is safe but can be refactored by moving non-component exports to a separate file if desired.
- If logos don’t appear, ensure assets exist and imports match filenames. Consider standardizing extensions.
- Videos must be compatible with the browser; autoplay uses `muted` + `playsInline`.

## Extending the App

- Add real authentication and backend API for companies, jobs, and chat.
- Implement application modals/forms for jobs (“Apply” button).
- Add search/filter for companies and job lists.
- Persist chat per company, and add mock bot responses.
- Normalize logo names and add remaining company assets.

## Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run preview` — preview build
- `npm run lint` — run ESLint

## License

This project is provided as-is for demonstration purposes.
