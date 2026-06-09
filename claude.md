# Portfolio Memory (Token-Saving Context)

## Purpose
- Keep future sessions short by loading only high-signal context.
- Avoid re-discovering finished decisions unless user asks to revisit.

## Project Snapshot
- Stack: React + Vite + Tailwind + Framer Motion + Redux Toolkit.
- Theme: Minimal black/white aesthetic, clean recruiter-focused layout.
- Deploy target: GitHub Pages via `npm run deploy`.
- Core route: Single-page portfolio with section scroll navigation.

## Current UX Decisions (Confirmed)
- Sub-hero uses 3 distinct lines (not repetitive "first"):
	- "AI-Powered Solutions"
	- "Automation & Orchestration"
	- "Security By Design"
- Dance section is always visible as its own compact category (no show/hide toggle).
- About photo should be professional/neutral tone (no purple cast).

## Key Files To Check First
- `src/App.jsx`
- `src/components/subHeroSection/SubHeroMain.jsx`
- `src/components/danceSection/DanceJourneySection.jsx`
- `src/components/skillsSection/AllSkills.jsx`
- `src/components/skillsSection/AllSkillsSM.jsx`
- `src/components/aboutMeSection/AboutMeImage.jsx`

## Skills State
- Includes: HTML, CSS, JavaScript, TypeScript, ReactJS, Redux, NextJS, OpenAI, n8n, TailwindCSS.

## UI Components (shadcn-style, JSX-adapted)
- `src/components/ui/` — badge.jsx, button.jsx, card.jsx, radial-orbital-timeline.jsx
- `src/lib/utils.js` — `cn()` helper using clsx + tailwind-merge
- `MushroomOrbitTimeline` (experience section) uses `RadialOrbitalTimeline` from `src/components/ui/`
- Gradient colors use inline styles (Tailwind default palette is overridden in tailwind.config.js)

## Runbook
- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Deploy: `npm run deploy`

## Editing Rules For Future Sessions
- Keep edits minimal and targeted.
- Preserve existing visual language and monochrome style.
- Validate with `npm run build` after code changes.
- If user asks for concise/token-saving responses, provide:
	- short progress notes,
	- only changed-file summary,
	- optional "start new session with this summary" block.

## Quick Session Summary Template
Use this when context gets long:

1. Goal in one line.
2. What changed (files + 1-line each).
3. Validation status (`build`/`deploy`).
4. Open items (if any).

## Known Notes
- Large bundle warning from Vite is currently accepted unless user requests code-splitting work.
- Keep recruiter-facing copy professional and concise.
