# Njala Mathias — Portfolio Website

My personal portfolio: **You Think. I Create. Let's Build.**

Built with [Next.js](https://nextjs.org) (App Router), TypeScript, Tailwind CSS, Framer Motion and lucide-react, and deployed on [Vercel](https://vercel.com).

---

## Contents

1. [Run the site on your computer](#1-run-the-site-on-your-computer)
2. [Where everything lives](#2-where-everything-lives)
3. [Edit your content](#3-edit-your-content) — projects, skills, services, certifications
4. [Replace images, your photo and your CV](#4-replace-images-your-photo-and-your-cv)
5. [Your WhatsApp contact link](#5-your-whatsapp-contact-link)
6. [Push to GitHub and deploy on Vercel](#6-push-to-github-and-deploy-on-vercel)
7. [Connect a custom domain](#7-connect-a-custom-domain-later)
8. [Useful commands](#8-useful-commands)

---

## 1. Run the site on your computer

**You need once:**

- [Node.js](https://nodejs.org) — download the **LTS** version and install it.
- [Git](https://git-scm.com/downloads).
- A code editor — [VS Code](https://code.visualstudio.com) is a good free choice.

**Then, in a terminal:**

```bash
# 1. Download the code (only the first time)
git clone https://github.com/MattHub90/My-Portfolio-site.git
cd My-Portfolio-site

# 2. Install the packages the site needs (first time, and after package.json changes)
npm install

# 3. Start the development server
npm run dev
```

Open **http://localhost:3000** in your browser. Leave the terminal running: every time you save a file, the page updates by itself. Press `Ctrl + C` in the terminal to stop it.

---

## 2. Where everything lives

```
app/                    Pages and site-wide settings
  layout.tsx            Wraps every page: fonts, navbar, footer, SEO, analytics
  page.tsx              The home page (puts the sections in order)
  projects/[slug]/      The project detail pages (one per project, built automatically)
  whatsapp/route.ts     The short yoursite.com/whatsapp link
  sitemap.ts, robots.ts For search engines
  icon.svg              The browser-tab icon ("NM" in gold on navy)
  globals.css           Brand colours and animations
components/             The building blocks (Hero, Navbar, ProjectCard, Timeline…)
data/                   ★ ALL YOUR CONTENT — this is where you'll edit most
lib/whatsapp.ts         Builds your WhatsApp chat links
public/                 Images, your CV and other files served as-is
  images/profile.jpg
  images/projects/
  cv/Mathias-Njala-CV.pdf
  og-image.png          The preview picture shown when your link is shared
```

> **Key idea:** content (in `/data`) is kept separate from layout (in `/components`). To change *what* the site says, you edit `/data`. You only touch `/components` to change *how* it looks.

---

## 3. Edit your content

Every file in `/data` has comments above each field explaining what it does. Edit, save, and check the result at http://localhost:3000.

| What you want to change              | File                       |
| ------------------------------------ | -------------------------- |
| Name, tagline, About text, stats, links, phone, email | `data/profile.ts` |
| Projects (cards + detail pages)      | `data/projects.ts`         |
| Services                             | `data/services.ts`         |
| Skills                               | `data/skills.ts`           |
| Work experience                      | `data/experience.ts`       |
| Education                            | `data/education.ts`        |
| Certifications                       | `data/certifications.ts`   |

### Add a new project

1. Put the images in `public/images/projects/` — for example `my-app.png`, `my-app-1.png`, `my-app-2.png`.
   A width of about **1200 × 750 px** (16:10) fits best.
2. Open `data/projects.ts`, copy an existing project from `{` to `},` and paste it into the list.
3. Change the fields:

```ts
{
  slug: "my-app",                        // page address: /projects/my-app (lowercase-with-dashes, unique)
  title: "My App",
  summary: "One or two sentences for the card.",
  categories: ["App"],                   // any of "Web", "App", "Design"
  status: "In Progress",                 // "Live", "In Progress" or "Coming Soon"
  tech: ["Next.js", "Firebase"],
  image: "/images/projects/my-app.png",  // note: no "public" in the path
  liveUrl: "",                           // leave "" to hide the Live Demo button
  githubUrl: "",                         // leave "" to hide the GitHub button
  overview: "…",
  problem: "…",
  role: "…",
  features: ["…", "…"],
  gallery: ["/images/projects/my-app-1.png"],
  learned: "…",
},
```

That's all — the card, the filter tab and the detail page appear automatically.

### Add a skill

In `data/skills.ts`, add a word to a group's `items` list, e.g. `items: ["Python", "C", "C++", "Java"]`.

### Add a service

In `data/services.ts`, copy one service object and edit it. The `icon` must be one of the names listed at the top of the file. To use a new icon, pick one at [lucide.dev/icons](https://lucide.dev/icons), then add it to the `ServiceIcon` list in `data/services.ts` **and** to the `serviceIcons` map in `components/Services.tsx`.

### Add a certification

In `data/certifications.ts`, copy one object and edit it. Set `status` to `"Completed"` or `"In progress"`. Paste your credential link into `credentialUrl` and a **View credential** link appears on the card; leave it as `""` to hide it.

> **Tip:** if the terminal shows a red error after an edit, you probably missed a comma, a quote or a bracket. Compare your object with the ones around it.

---

## 4. Replace images, your photo and your CV

Keep the **same file name** and the site picks up the new file with no code changes:

| Replace…                | Put the new file here (same name)            |
| ----------------------- | -------------------------------------------- |
| Profile photo           | `public/images/profile.jpg`                  |
| CV                      | `public/cv/Mathias-Njala-CV.pdf`             |
| A project image         | `public/images/projects/<same-name>.png`     |
| Link-preview image      | `public/og-image.png` (1200 × 630 px)        |

If you use a **different** file name (or `.jpg` instead of `.png`), update the path in the matching `/data` file.

**Profile photo:** the current photo is 250 × 424 px. If your new photo has a different shape, update `width` and `height` in `components/Hero.tsx` to its real pixel size. A higher-resolution photo (e.g. 500 × 848) will look sharper on phones.

> The current project images are generated placeholders that say "Placeholder image · replace me". Swap them for real screenshots when you have them.

---

## 5. Your WhatsApp contact link

Visitors can reach you on WhatsApp in several places: the floating green button on every page, the icons in the hero and footer, the **Chat on WhatsApp** button in Contact, the **Send on WhatsApp** option in the contact form, and a button at the bottom of each project page. Each one opens a chat with **+237 678 488 510** with a greeting already typed.

**Your shareable links:**

- Direct: **https://wa.me/237678488510**
- Short, on your own site (after deploying): **https://&lt;your-site&gt;/whatsapp** — put this on flyers, business cards, email signatures and social bios.
- Your CV, the same way: **https://&lt;your-site&gt;/cv**

**To change your number or the pre-typed greeting,** edit `contact.whatsappNumber` (digits only, country code first, no `+`) and `contact.whatsappMessage` in `data/profile.ts`.

---

## 6. Push to GitHub and deploy on Vercel

### Save your changes to GitHub

```bash
git add .
git commit -m "Describe what you changed, e.g. Add House Agent screenshots"
git push
```

### First-time Vercel setup (only once)

1. Go to [vercel.com](https://vercel.com) and **sign up with GitHub**.
2. Click **Add New… → Project**.
3. Find **My-Portfolio-site** and click **Import**. (If it isn't listed, click "Adjust GitHub App Permissions" and give Vercel access to the repository.)
4. Vercel detects Next.js automatically. Don't change any settings — click **Deploy**.
5. After about a minute you get a live address like `https://my-portfolio-site.vercel.app`.
6. **Turn on visitor stats:** in your Vercel project, open the **Analytics** tab and click **Enable** (free tier). The tracking code is already in the site.
7. **Important:** open `data/profile.ts` and set `siteUrl` to your real Vercel address (or custom domain), then commit and push. This makes link previews and the sitemap use the correct address.

### How auto-deploys work

After that first setup you never need to touch Vercel again:

- Every `git push` to the **main** branch → Vercel rebuilds and updates the live site in about a minute.
- If the build fails, the old version stays online, and Vercel emails you. Open the deployment in Vercel to read the error.
- Before pushing, you can check for errors yourself with `npm run build` and `npm run lint`.

### Check your link preview

After deploying, paste your URL into the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) to see (and refresh) how it looks when shared. WhatsApp caches previews, so a changed image can take a while to appear there.

---

## 7. Connect a custom domain (later)

1. Buy a domain (e.g. `njalamathias.com`) from a registrar such as Namecheap, Porkbun or Cloudflare — or directly in Vercel.
2. In Vercel, open your project → **Settings → Domains** → type the domain → **Add**.
3. Vercel shows the DNS records to create (usually an **A** record for `@` and a **CNAME** for `www`). Add them in your registrar's DNS settings.
4. Wait for the check mark in Vercel (minutes to a few hours). HTTPS is set up for free automatically.
5. Update `siteUrl` in `data/profile.ts` to the new domain, then commit and push.

---

## 8. Useful commands

| Command         | What it does                                                    |
| --------------- | --------------------------------------------------------------- |
| `npm run dev`   | Start the site locally with live reloading                       |
| `npm run build` | Build the production version (catches errors before deploying)   |
| `npm start`     | Run the production build locally (after `npm run build`)         |
| `npm run lint`  | Check the code for common mistakes                               |

---

### Notes for the curious

- **Fonts:** Playfair Display (headings) and Inter (text), loaded with `next/font` so they're fast and don't shift the layout.
- **Animations** respect the "reduce motion" setting on the visitor's device.
- **Brand icons** (GitHub, LinkedIn, WhatsApp) are in `components/BrandIcons.tsx`, because lucide-react no longer includes brand logos.
- **`AGENTS.md`** is created by Next.js for AI coding assistants. Leave it in place — Next.js re-adds it automatically.
- **`PORTFOLIO_PROMPT.md`** is the original brief this site was built from.
