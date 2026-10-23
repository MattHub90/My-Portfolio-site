# Build My Personal Portfolio Website

You are building a professional personal portfolio website for me. Read this whole brief before writing any code, then work through the build in stages and check each stage before moving on.

The files that come with this prompt are in the same folder:
- `profile.jpg` — my profile photo → copy to `/public/images/profile.jpg`
- `Mathias-Njala-CV.pdf` — my CV → copy to `/public/cv/Mathias-Njala-CV.pdf`

## About me

- **Name:** Njala Mathias Ndi (display as "Njala Mathias")
- **Location:** Bamenda, Cameroon — available for remote work worldwide
- **Tagline:** "You Think. I Create. Let's Build."
- **Rotating title line:** Software Engineer · Web & App Developer · AI Evaluator · Graphic Designer · Digital Consultant
- **Positioning:** Freelancer working on a project basis. I build websites and apps that solve everyday problems, evaluate and test AI systems, and design presentations and brand materials.
- **Status badge in the hero:** "Available for projects" (with a small pulsing dot)

### About text (use as the base, polish lightly)

Software engineer (B.Tech) with a second degree in Philosophy, combining technical discipline with training in logic, argumentation and precise writing. Teaching Computer Science taught me to explain technical ideas clearly and to trace exactly where reasoning breaks down. I build web and mobile apps, work daily with AI tools (Claude, ChatGPT, Gemini, Perplexity) for research and prompt engineering, and am training in AI red teaming. I also run Vision Tech, a presentation and design service, and founded Vision Tech Ventures (VTV) — "Technology. Innovation. Growth" — a tech brand building solutions to common daily problems.

### Education (timeline)

- **Bachelor of Technology, Software Engineering** — National Polytechnic University Institute, Bamenda — 2024
- **Higher National Diploma, Software Engineering** — Kelden Bilingual Higher Institute of Professional Studies, Bamenda — 2023
- **Bachelor's Degree, Philosophy** — Catholic University of Cameroon, Bamenda — 2021

### Experience (timeline, most recent first)

- **Founder — Vision Tech Ventures (VTV)** — 2025–Present. Building VTV Payments (payment orchestration platform), a delivery-agent app for VIVA Errand Services, and a House Agent real-estate app.
- **Web Designer & Developer — Our Lady of Fatima Parish, Bamenda** — 2026. Designed and built the parish's official website (HTML, CSS, WordPress) for news, events and community engagement; responsive and tested across devices.
- **Computer Science Teacher — Saint Joseph College Mankon, Bamenda** — 2021–Present. Taught programming and computing fundamentals; wrote clear, unambiguous tests and marking schemes.
- **Graphic Designer — Independent clients, incl. VIVA Errand Services** — 2020–Present. Brand packages, business cards, event programmes, flyers and newsletters.
- **Vision Tech — Presentation Design Service** — pitch decks, thesis defense presentations and corporate presentations.

### Certifications (show as cards with issuer, year and a status badge)

- AI Red Teaming 101 — Microsoft AI Red Team — In progress (2026)
- Artificial Intelligence Career Essentials — ALX Africa — 2024
- Professional Foundations & Virtual Assistant Program — ALX Africa — 2024
- AWS Cloud Computing Program — ALX Africa — In progress

Each certification object should have an optional `credentialUrl` field; show a "View credential" link only when it is filled in.

### Languages

English (Excellent) · French (Fair)

## Links and contact

- Email: mathiasnjala@gmail.com
- Phone / WhatsApp: +237 678 488 510 (WhatsApp link: `https://wa.me/237678488510`)
- LinkedIn: https://www.linkedin.com/in/njala-mathias-ndi
- GitHub: https://github.com/MattHub90

## Tech stack

- **Next.js** (latest stable, App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** for animations
- **lucide-react** for icons
- Deployed on **Vercel** from a GitHub repository

Keep dependencies minimal. No database, no CMS, no paid services.

## Design direction

- **Dark, professional, animated theme**, consistent with my existing flyer and VTV brand.
- Base: deep navy / near-black background (e.g. `#0A0E1F`), slightly lighter navy surfaces for cards (e.g. `#11162B`).
- **Gold / amber** (e.g. `#C9934F` to `#E0B062`) as the signature accent: my surname in the hero, section headings, thin top borders on cards, the "Hire Me" button.
- **Sky blue** (e.g. `#38BDF8`) as the secondary accent for links, tech tags and hover glows.
- White and light grey for text. All text must meet WCAG AA contrast.
- Typography: an elegant serif for my name and large headings (e.g. Playfair Display or Fraunces), a clean sans-serif for everything else (e.g. Inter), loaded with `next/font`.
- Hero layout (desktop): photo on the left inside a rounded frame with a thin gold border and soft glow; name, rotating title, tagline and buttons on the right. On mobile, stack photo above the text.
- Plenty of spacing, clear hierarchy, rounded cards with subtle borders.
- **Animations should feel smooth and premium, never distracting:** fade/slide-in on scroll, hover lifts on cards, a soft moving gold/blue glow behind the hero, a typing or rotating effect for the title line, an animated timeline line that draws as you scroll. Respect `prefers-reduced-motion`.
- Fully responsive, mobile first (many visitors will open the link from LinkedIn or WhatsApp on a phone).

## Site structure (single page with smooth-scrolling sections, plus project detail pages)

1. **Navbar** — sticky, my name on the left, links (About, Services, Projects, Experience, Certifications, Contact), and a gold "Hire Me" button. Collapses into a mobile menu.
2. **Hero** — photo, availability badge, name, rotating title, tagline, short value statement, buttons "View Projects" and "Download CV", plus LinkedIn, GitHub, WhatsApp and email icons. Small credential chips under the buttons: "B-Tech Software Engineering", "AI Career Essentials — ALX", "Certified Virtual Assistant — ALX".
3. **About** — the about text above, plus quick stats (e.g. "5+ years designing", "Teaching since 2021", "5 apps in progress").
4. **Services** — cards, each with an icon, short label and one-line description:
   - Web & App Development — websites and mobile-friendly apps
   - AI Evaluation & Research — model testing, red teaming, prompt engineering, fact-checking
   - Presentation Design — thesis defense, pitch and corporate decks (Vision Tech)
   - Graphic Design — flyers, posters, brand packages, business cards
   - Virtual Assistance — email, tasks and documents
   - Document Editing — formatting and proofreading
   - Tech Support — phones, laptops and PCs
   - PC Tutoring — digital skills training
   - Tech Procurement — help choosing and buying computers and devices
   - Imports from China — phones, fashion and more
5. **Projects** — grid with filter tabs (All, Web, App, Design). Each card: image, title, short description, tech tags, status badge ("Live", "In Progress", "Coming Soon"), Live Demo and GitHub buttons (hidden when the link is empty). Clicking a card opens its detail page.
6. **Skills** — grouped tags with icons, no percentage bars:
   - Web & App Dev: HTML, CSS, JavaScript, TypeScript, Next.js, Tailwind CSS, WordPress, Git/GitHub
   - Programming: Python, C, C++
   - AI & Evaluation: Prompt engineering, AI red teaming, OWASP Top 10 for LLMs, MITRE ATLAS, data annotation & quality review
   - AI Tools: Claude, ChatGPT, Gemini, Perplexity, Lovable, Emergent
   - Research & QA: Fact-checking, source verification, software testing & debugging
   - Design & Office: Graphic design, presentation design, Microsoft Office, Google Workspace
7. **Experience & Education** — two-column (desktop) or stacked (mobile) animated vertical timeline.
8. **Certifications** — card grid as described above.
9. **Contact** — "Have a project in mind? Let's work together." with "Book a free 15-minute consultation" as a subheading. Email (mailto) and WhatsApp buttons, LinkedIn and GitHub links, and a simple form that opens the visitor's email client with the message pre-filled (no backend).
10. **Footer** — "Njala Mathias · You Think. I Create. Let's Build. · Cameroon", auto-updating year, social links, "Built with Next.js & deployed on Vercel".

**Project detail page** (`/projects/[slug]`): hero image, overview, problem it solves, my role, features, tech stack, screenshot gallery, links and "what I learned". Generated statically from the data file.

## Projects to include (initial content)

Write realistic placeholder descriptions I will edit later. Use generated placeholder images in `/public/images/projects/` (simple branded gradient cards with the project name are fine).

1. **Our Lady of Fatima Parish Website** — official parish website for news, events and community engagement. Built with HTML, CSS and WordPress. Category: Web. Status: Live (leave the live URL empty for me to fill in).
2. **Vision Tech Ventures Website** — my business website for VTV. Category: Web. Status: In Progress.
3. **VTV Payments** — payment orchestration platform unifying multiple payment channels into one system. Category: Web/App. Status: In Progress.
4. **House Agent Search App** — real-estate app connecting house seekers with house agents. Category: App. Status: In Progress.
5. **VIVA Errand Services** — app and website for booking errands and deliveries, including a delivery-agent app. Category: App/Web. Status: In Progress.
6. **Bamenda Ride Booking App** — ride-hailing app for the city of Bamenda (working name; do not use any existing company's brand). Category: App. Status: In Progress.
7. **AI Workflow Global Website** — website for an AI workflow business. Category: Web. Status: In Progress.
8. **Design Showcase** — a gallery of my flyers, brand packages, business cards and presentation designs. Category: Design. Status: Live (uses placeholder images I will replace).

## Easy updates — very important

I will add projects, skills and certifications over time and I am still learning, so content must be separate from layout:

- Store all content in typed data files in `/data`: `profile.ts`, `projects.ts`, `services.ts`, `skills.ts`, `experience.ts`, `education.ts`, `certifications.ts`.
- Adding a new project should only require adding one object to `projects.ts` and dropping images into `/public/images/projects/`.
- Add clear comments in each data file explaining every field.

## SEO and sharing

- Proper page titles and meta descriptions for every page.
- Open Graph and Twitter card metadata with a branded preview image (`/public/og-image.png`, include my photo, name and tagline) so links look good on LinkedIn and WhatsApp.
- `sitemap.xml` and `robots.txt` via Next.js metadata routes.
- Favicon with my initials "NM" in gold on navy.
- Vercel Analytics (free tier) so I can see visitor numbers.

## Quality requirements

- Clean, well-organised code with reusable components in `/components`.
- Use `next/image` for all images. The profile photo is fairly small, so display it no larger than about 320px wide to keep it sharp.
- Semantic HTML and accessible navigation (keyboard focus states, alt text, aria labels).
- Aim for Lighthouse 90+ in Performance, Accessibility, Best Practices and SEO.
- No console errors; `npm run build` and `npm run lint` must pass.

## Deliverables

1. The complete project, pushed to my existing GitHub repository: **https://github.com/MattHub90/My-Portfolio-site** (see "GitHub repository" below).
2. A beginner-friendly `README.md` explaining step by step:
   - How to run the site locally
   - How to add or edit a project, skill, service or certification
   - How to replace images, my photo and my CV
   - How to push to GitHub and deploy on Vercel (and how auto-deploys work after that)
   - How to connect a custom domain later
3. A short summary at the end listing every placeholder I still need to replace.

## GitHub repository

All code goes into my existing repository: **https://github.com/MattHub90/My-Portfolio-site** (branch `main`).

- Before building, clone this repository (or connect the current folder to it as `origin`) and look at what is already there. Keep any existing files such as the README or LICENSE unless replacing them is clearly better, and tell me if you remove anything.
- Build the Next.js project at the root of the repository, not in a subfolder, so Vercel detects it automatically.
- Include a proper `.gitignore` (`node_modules`, `.next`, `.env*`, etc.). Never commit secrets.
- Commit after each build stage with a clear message (e.g. "Add hero section", "Add project detail pages"), so I can follow the history and learn from it.
- Only push once `npm run build` and `npm run lint` pass. Push to `main`.
- If pushing fails because of permissions or authentication, stop and tell me exactly what to do; do not create a different repository.
- After pushing, confirm the repository URL and the latest commit, and remind me how to import the repository into Vercel (Vercel will then redeploy automatically on every push).

## How to work

- First show me the planned folder structure and component list, then build.
- Build in stages: setup → layout and theme → sections → project pages → SEO → polish and testing.
- After building, run the dev server and check every section at mobile and desktop widths before declaring it done.
- Explain important decisions in plain language; I am a beginner with Next.js and want to learn as we go.
