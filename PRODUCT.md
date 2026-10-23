# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Mainly freelance clients: individuals and small businesses who need one developer to take a web or mobile project from requirements to a deployed server. They come to judge whether Alvin can be trusted with the whole job, then decide whether to get in touch.

Recruiters and hiring teams also visit, but the site is not tuned for them.

## Product Purpose

A personal portfolio for Alvin Ade, a full-stack developer based in Malang, Indonesia. The site works when a visitor gets in touch by email, GitLab or LinkedIn. Showing skills, career history and projects is there to make that contact happen.

## Positioning

One developer who covers every role in a project: requirements analysis, system design, UI/UX, task planning, coding and server deployment. He has done this freelance since 2020 alongside agency work at Arkatama Multi Solusindo, and has mentored juniors there.

## Operating Context

- Bilingual: every piece of copy exists in English and Indonesian (`src/lib/translations.ts`, `CareerTimeline.tsx`), switched with a language toggle.
- Light, dark and system themes.
- Contact channels: email (alvinade998@gmail.com), GitLab (@alvinade98) and LinkedIn.
- Includes a small memory game ("Memory Protocol") as a playful extra.

## Capabilities and Constraints

- Stack: Next.js 16 (App Router), React 19, Tailwind CSS 4. Built as `output: "standalone"` and deployed with Docker.
- The content is static: projects live in `src/lib/data.ts` and the career history in `CareerTimeline.tsx`.
- Skills shown: JavaScript, React Native, Next.js, React, Laravel, Node.js, Bun, CodeIgniter, Python, PHP, MySQL, PostgreSQL, Redis, SQLite, Supabase, Firebase, MongoDB, Docker, Nginx, CI/CD, n8n.

## Evidence on Hand

- Career history from 2017 onward: work entries and education, including a Bachelor of Computer Science with a 3.78 GPA.
- Ten project entries in `src/lib/data.ts`.
- Profile photo at `public/profile.jpg`.
- **Not available:** the project images are stock Unsplash placeholders, not real screenshots. Do not present them as the real product, and do not invent new screenshots, client names, testimonials or metrics.

## Product Principles

1. Every section should help a visitor decide to make contact; keep the contact channels easy to reach.
2. Show end-to-end ownership with concrete evidence (roles, stack, deployment), not adjectives.
3. Treat English and Indonesian as equals. New copy needs both versions.
4. Personality is welcome, but it must not slow down a visitor who wants to read and get in touch.
