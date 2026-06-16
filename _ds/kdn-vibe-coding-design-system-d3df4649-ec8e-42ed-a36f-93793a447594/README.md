# KDN Vibe Coding — Design System

A design system for **KDN 바이브코딩** (Korea Electric Power Data Network · Vibe Coding training program) and the broader **DreamIT Biz** ecosystem, derived from the source code of the [`aebonlee/web-kdn`](https://github.com/aebonlee/web-kdn) Streamlit/stlite self-introduction page authored by **Ph.D 이애본 (Aebon Lee)**.

> **For readers exploring further:** the upstream repo is small but expressive — the entire design language fits in one `app.py` and one `config.toml`. Browse it at <https://github.com/aebonlee/web-kdn> to see the canonical tokens, hero gradient, and card patterns in their original Streamlit context.

---

## Sources used

| Source | What it gave us |
|---|---|
| GitHub: <https://github.com/aebonlee/web-kdn> | `app.py` (the entire visual system as inline CSS in `st.markdown`), `index.html` (loading screen + font stack), `.streamlit/config.toml` (theme constants), `README.md` (product structure & menu list) |
| Live deploy: <https://aebonlee.github.io/web-kdn/> | Reference render (referenced, not screenshotted) |
| Sister site (NOT in repo, referenced): <https://kdn.dreamitbiz.com> | Mentioned as a React+Vite training site — **inaccessible from this codebase**, treated as extrapolation only |

If you have access to the React+Vite sister site source, attach it and we can expand the system with real components.

---

## What this is

- **Product:** a Korean-language self-introduction page for the instructor of the KDN Vibe Coding training program (3-day, 21-hour full-stack web development course for Korea Electric Power Data Network employees).
- **Tech:** Streamlit running in the browser via stlite (Pyodide/WASM), deployed as static files on GitHub Pages. No build step.
- **Style summary:** Korean modern-sans typography on a white canvas with a single signature navy→royal-blue gradient block at the top, supported by light-grey surface cards, an accent-coloured left-rule for section titles, and pill tags. The aesthetic is **corporate-friendly Korean educational** — restrained, trustworthy, with one strong color accent.

---

## Index — the files in this design system

| File / folder | Purpose |
|---|---|
| `README.md` | This document — content fundamentals, visual foundations, iconography, gaps. |
| `SKILL.md` | Agent-skill manifest. Reads like instructions for an AI designer adopting this brand. |
| `colors_and_type.css` | All design tokens as CSS variables, plus styled classes (`.kdn-hero`, `.kdn-card`, `.kdn-section-title`, `.kdn-tag`, `.kdn-stat-num`). Copy into any new artifact. |
| `preview/` | Small inspection cards used by the Design System tab — palettes, typography specimens, components in isolation. |
| `ui_kits/intro-page/` | Pixel-faithful recreation of the Streamlit intro page. `index.html` is a click-through prototype; `*.jsx` files are reusable React pieces. |
| `assets/` | Logos and brand imagery. **Upstream repo ships none yet** — see Iconography for the substitution policy. |
| `fonts/` | Empty by default. Pretendard is currently loaded from CDN; drop a `.woff2` here if you need offline. |

---

## CONTENT FUNDAMENTALS

### Voice & vibe

The voice is **warm-but-professional Korean** with light, tasteful AI/tech vocabulary. The instructor speaks in first person, present tense, polite-formal Korean (~합니다 / ~드립니다 endings). It reads like an established Ph.D. who can teach but isn't aloof.

- **Greeting / direct address:** “안녕하세요, 이애본(Aebon Lee)입니다 👋” — first-person introduction with a single emoji.
- **Honorifics:** Polite-formal (~합니다 / 드립니다 / 주세요). No banmal (반말).
- **Hedging:** Minimal. Statements are confident: *“91개 이상의 라이브 서비스를 직접 설계·구축·운영하며…”*
- **Authority signals:** Title prefix “Ph.D”, role “DreamIT Biz 대표”, and concrete numbers (91 sites, 845 repos, 10+ years, 24 payment integrations). These are dropped throughout instead of vague adjectives.

### Casing & punctuation

- **Mixed-script titles:** Korean + parenthetical English is the default for names and proper nouns: *“이애본(Aebon Lee)”, “바이브코딩(Vibe Coding)”, “계층분석법(AHP)”*.
- **Middle dots `·`** are used as Korean-style separators in lists and stack descriptions: *“React · TypeScript · Supabase · AI 도구”*, *“프론트 · 백엔드 · DB · 인증 · 결제 · 배포”*. **Use them; don't substitute commas.**
- **Em-dash `—`** appears in subtitles and clarifications: *“KDN 바이브코딩 — 자기소개 (Streamlit + stlite)”*.
- **Bold (`**`)** is used aggressively in narrative copy to surface scannable nouns: *“**DreamIT Biz** 대표이자… **Ph.D 이애본**입니다.”* Roughly one bold span per sentence.
- **Numbers** with units stick together: `91+ 사이트`, `3일 · 21시간`, `10+ 년`. Plus signs after counts are common.

### I vs you

- The page is written **from the instructor (I)** to a **prospective student or trainee (you)**.
- Korean rarely uses explicit pronouns, so this manifests as 저는 / 제가 (I, polite) and direct verbs to the reader: *“…자신의 웹 서비스를 직접 만들고 배포할 수 있도록 돕고 있습니다.”* (“…helping [you] build and deploy your own web service.”)
- Calls to action address the reader politely: *“간단히 적어주세요.”* (“Please write briefly.”)

### Emoji usage

**Emoji are on-brand and used purposefully**, not decoratively. Conventions:

- **Section icons in navigation:** every sidebar menu item gets one leading emoji, no exceptions: 👋 소개 · 💼 경력 · 🎓 학력 · 🛠 기술 스택 · 📦 프로젝트 · 📨 연락처.
- **Section-title accent on philosophy cards:** 🚀 즉시 배포, 🤖 AI와 함께, 🧱 풀스택 자립.
- **Contact list bullets:** 🏢 회사, 👤 대표, 📧 이메일, 📱 휴대폰, 💬 카카오톡, 🐙 GitHub, 🌐 메인 사이트, 🏠 주소, 🕘 업무 시간.
- **Project bullets:** 🌐 prefixes a site name (since they're all live sites).
- **Sentence-level emoji:** at most one, at the end of a greeting (👋). Never sprinkled mid-sentence.

When in doubt: **one emoji per item, leading position, semantically literal** (a globe means a website, an envelope means email — never abstract emoji like ✨ or 🌟 as decoration).

### Specific examples

- Greeting: *“안녕하세요, 이애본(Aebon Lee)입니다 👋”*
- Subtitle: *“바이브코딩으로 풀스택 웹 개발을 가르치는 박사 · DreamIT Biz 대표”*
- Stat label: *“운영 사이트”* (no extra units; the big number does the talking)
- Section title: *“About Me”* (English heading) above Korean body copy — bilingual section heads are common
- CTA copy: *“문의 보내기”* — short verb-noun, no exclamation
- Footer: *“© 2025–2026 DreamIT Biz · Ph.D Aebon Lee · 사업자등록 601-45-20154 · 통신판매 제2024-수원팔달-0584호 · 출판신고 제2026-000026호”* — legal IDs are part of credibility, not buried.
- Error message: *“성함과 이메일은 필수입니다.”* — neutral, no exclamation, no apology.
- Success message: *“감사합니다, {name}님! 빠르게 회신드리겠습니다.”* — thanks first, name with 님 honorific, single exclamation acceptable on confirmation.

---

## VISUAL FOUNDATIONS

### Colors

Two brand colors do almost all the heavy lifting; everything else is greyscale.

| Token | Hex | Usage |
|---|---|---|
| `--kdn-primary` | `#1B2A4A` | Deep navy — start of hero gradient, primary buttons, dark text accents |
| `--kdn-accent` | `#0046C8` | Royal blue — end of hero gradient, stat numbers, links, section-title left rule, role labels in cards |
| `--kdn-bg` | `#FFFFFF` | Page background — always white in light mode |
| `--kdn-surface` | `#F4F6FA` | Card / sidebar surface — very-tinted blue-grey |
| `--kdn-border` | `#E5E9F2` | Hairline card border |
| `--kdn-fg-strong` | `#111111` | Card titles, org names |
| `--kdn-fg` | `#1A1A1A` | Default body text |
| `--kdn-fg-muted` | `#374151` | Card body / secondary copy |
| `--kdn-fg-faded` | `#4B5563` | Stat labels |
| `--kdn-fg-disabled` | `#6B7280` | Period / metadata |

**Signature gradient:** `linear-gradient(135deg, #1B2A4A 0%, #0046C8 100%)` — used on the hero block and (in `index.html`) on the loading screen. **Reserve it for the top-of-page hero and full-screen loading states only**; don't apply it to buttons, cards, or small UI elements.

### Typography

- **Stack:** `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif`
- **Why this stack:** Korean-first. Pretendard is the modern Korean variable sans that pairs naturally with Apple SD Gothic Neo (Mac/iOS) and Segoe UI / Malgun Gothic (Windows). The repo uses the system stack only; this design system upgrades it to load Pretendard explicitly so renders are consistent across machines.
- **Mono:** `"JetBrains Mono", "D2Coding", ui-monospace, Menlo, Consolas, monospace` — D2Coding is the canonical Korean coding font.

**Scale (from `app.py` inline CSS):**

| Token | Size | Weight | Used for |
|---|---|---|---|
| `--kdn-fs-hero` | 2.6rem (41.6px) | 800 | Hero h1 only |
| `--kdn-fs-stat` | 2.2rem (35.2px) | 800 | Big accent stat numbers |
| `--kdn-fs-h2` | 1.5rem (24px) | 700 | Section titles |
| `--kdn-fs-h3` | 1.15rem (18.4px) | 700 | Hero subtitle, sub-section heads |
| `--kdn-fs-body` | 1rem (16px) | 400 | Default copy |
| `--kdn-fs-sm` | 0.95rem (15.2px) | 700 | Card role labels |
| `--kdn-fs-xs` | 0.85rem (13.6px) | 400 | Period, tags, footer |

**Letter spacing** is left at default; **line-height** is generous (`1.6`) for Korean readability.

### Spacing

8pt base, with 4pt half-steps. The repo's actual values are: `4 · 6 · 8 · 12 · 14 · 16 · 18 · 20 · 22 · 24 · 32 · 48 · 56`. Use the `--kdn-space-N` tokens; round inline values to the scale.

### Backgrounds & imagery

- **No background images, photos, gradients in body, illustrations, patterns, or textures** in the source. The page is white + one navy gradient block + grey-tinted cards.
- **The only gradient** is the navy→accent diagonal (135°) on the hero and loading screen.
- **Hand-drawn illustrations / mascots / stock photos:** none. Don't introduce them without asking.
- **Profile photo:** the upstream README lists `assets/profile.jpg` as a **TODO** — it is not yet shipped. If asked for a profile shot, ask the user to provide it.

### Animation & easing

Sparse. The source has exactly two animations:

1. **Loading screen** — full-screen navy gradient, white text, 42px white spinner ring with `animation: spin 1s linear infinite`, then `opacity 0.5s ease` fade-out + DOM removal.
2. **No hover / press animations declared** — Streamlit's default button transitions apply (subtle background-color change, ~150ms).

When adding motion, prefer **fade + small translate (4–8px)** with `var(--kdn-ease)` (`cubic-bezier(0.4, 0, 0.2, 1)`) over 200ms. No bounces. No spring physics.

### Hover & press states

- **Links:** color shifts from `--kdn-accent` (`#0046C8`) to `--kdn-accent-600` (`#003BA8`), text-decoration underlines on hover. No transition declared in source — keep ≤120ms if you add one.
- **Primary buttons:** inherit Streamlit's defaults — accent fill darkens slightly on hover, no shrink/scale on press.
- **Cards:** **no hover state in source.** They are static surfaces, not links. Don't add hover lifts unless the card is genuinely clickable, in which case use a 1px shadow nudge, not a translate.
- **Tags:** static, never interactive.

### Borders

- **Hairline 1px** in `--kdn-border` (`#E5E9F2`) on every card.
- **Section titles** use a **4px left border** in `--kdn-accent` as a visual rule — this is one of the most distinctive patterns in the system; reuse it for any new section heading.
- **Hero block has no border** — the gradient is enough.
- **Tags** use `1px rgba(255,255,255,0.35)` on the translucent pill fill — only on top of the gradient.

### Shadows

- **No shadows in the source.** Cards rely on a 1px border + tinted surface for separation.
- This design system adds a tiny optional shadow scale (`--kdn-shadow-1`, `--kdn-shadow-2`, `--kdn-shadow-hero`) for cases that need elevation, but **the canonical look is borders, not shadows.**

### Corner radii

- `8px` — small (buttons, inputs)
- `12px` — **cards** (the workhorse — every card uses this)
- `16px` — **hero block** (slightly more rounded for the prominent element)
- `999px` — **pill tags** (full pill)

All radii are uniform on all four corners. No asymmetric corners, no notches.

### Transparency & blur

- Used only on **hero tags**: `rgba(255,255,255,0.18)` fill, `rgba(255,255,255,0.35)` border — the translucency picks up the gradient behind them.
- **No `backdrop-filter`, no glass-morphism, no frosted panels** in the source. Don't add.

### Imagery vibe (when added)

Not present in source, but if introducing imagery: **cool-toned, slightly blue-shifted photography** matches the palette best (avoid warm/orange/sepia). For diagrams and screenshots, **render on the white background with a 1px `--kdn-border` frame and 12px radius** — matching the card pattern.

### Layout rules

- **Page max-width:** `~1200px` content column, centered.
- **Sidebar:** ~`260px` wide, light surface (`--kdn-surface`), persistent on left when present.
- **Card grid:** 1- or 2-column on the project listing; cards are full-width single-column elsewhere.
- **Hero spans full content width** above the rest of the page, with `padding: 56px 48px`.
- **Stats row:** 4 equal columns immediately below the hero, no card chrome — just the big number + small label.

### Cards — the canonical pattern

A "card" in this system means:

```
background: #F4F6FA;
border: 1px solid #E5E9F2;
border-radius: 12px;
padding: 20px 22px;
margin-bottom: 14px;
```

Inside: an accent-colored role/category label on top, a dark org name below, an optional grey period/meta line, then muted body copy. Use this for any list-of-items presentation (careers, projects, education, search results, etc.).

---

## ICONOGRAPHY

### Approach

**KDN Vibe Coding uses Unicode emoji as its only iconography.** There is no SVG icon set, no icon font, no `react-icons` / `lucide` / `heroicons` import in the source. This is deliberate — Streamlit's markdown renders emoji natively, the page is text-heavy, and Korean readers parse emoji prefixes faster than abstract icons.

### Conventions

- **One emoji per item, leading position.** Never trailing, never mid-sentence (except the single 👋 closing the greeting).
- **Literal semantics.** 📧 means email, 🌐 means website, 📦 means project/package, 🛠 means tools/tech, 🎓 means education, 💼 means career. Never abstract / decorative emoji (no ✨, 🌟, 🎉, 💫, 🔥) as a default — they read as filler.
- **Style:** OS-native emoji (Apple Color Emoji / Segoe UI Emoji / Noto Color Emoji depending on platform). Don't ship a custom emoji font.

### Canonical emoji set

| Context | Emoji | Use |
|---|---|---|
| Greeting | 👋 | Trailing the first introduction sentence |
| Nav: 소개 | 👋 | "About" menu item |
| Nav: 경력 | 💼 | Career |
| Nav: 학력 | 🎓 | Education |
| Nav: 기술 스택 | 🛠 | Tech stack |
| Nav: 프로젝트 | 📦 | Projects |
| Nav: 연락처 | 📨 | Contact |
| Philosophy card 1 | 🚀 | Ship / deploy |
| Philosophy card 2 | 🤖 | AI / automation |
| Philosophy card 3 | 🧱 | Build / foundation |
| Project row | 🌐 | Live site |
| Contact: company | 🏢 | |
| Contact: representative | 👤 | |
| Contact: email | 📧 | |
| Contact: phone | 📱 | |
| Contact: KakaoTalk | 💬 | |
| Contact: GitHub | 🐙 | |
| Contact: website | 🌐 | |
| Contact: address | 🏠 | |
| Contact: hours | 🕘 | |
| Sidebar header | 📚 | Curriculum / books |
| Inline tip / note | 💡 | `st.info` body lead |

### Unicode chars used as separators

- **Middle dot `·`** — list separator
- **Em-dash `—`** — subtitle delimiter
- **Plus `+`** — after counts (91+)
- **Currency / business chars** — none

### Logos & illustrations

- **The upstream repo ships no logo file.** The "logo" in the running app is `📚 KDN 바이브코딩` rendered as text + emoji in the sidebar header.
- **In this design system**, `assets/wordmark.svg` is a generated wordmark using the navy/accent palette as a stand-in. **FLAG:** if there is an official DreamIT Biz or KDN mark, please supply it and we'll swap.
- **No illustrations, mascots, or generic background images** are included — none exist upstream.

### Substitution policy

- For new product surfaces (e.g. a marketing landing for the React sister site), if an icon set becomes necessary beyond emoji, **substitute Lucide** (`https://lucide.dev`) — its restrained 1.5px stroke pairs well with Pretendard at body weights. **FLAG** any addition to the user, since icons-other-than-emoji is a departure from the source.

---

## Caveats & gaps

- **No real logo asset** in the source. A placeholder wordmark is provided in `assets/`. Ask the user for the canonical mark.
- **No profile photo** — listed as TODO in the upstream README.
- **No fonts shipped** — Pretendard is loaded from the jsdelivr CDN. Drop a `.woff2` in `fonts/` and switch to `@font-face` for offline.
- **Sister site `kdn.dreamitbiz.com` is not in this codebase** — any React-component design is extrapolation, not recreation. The UI kit here is built strictly against the Streamlit intro page.
- **No slide deck template** was provided, so `slides/` is not built in this system.

---

## Next steps for the reader

1. Open the [Design System tab](#) (in the editor sidebar) to see all preview cards rendered.
2. Open `ui_kits/intro-page/index.html` for the click-through prototype of the source page.
3. Copy `colors_and_type.css` into any new design and use the `.kdn-*` classes — that's the fastest path to on-brand output.
4. Read `SKILL.md` if you want to attach this folder to an agent as a Skill.
