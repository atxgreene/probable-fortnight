# Handoff — publish the Aim for Perfection experience page

**Correction to the previous version of this file:** it claimed the work was
"already committed" and that this repo "already auto-deploys to Vercel." Neither
was true from your side, and you were right to stop. The commits existed only in
the owner's local clone on Windows and were never pushed — that machine has no
working GitHub credentials and no TTY, so it cannot push at all. The Vercel claim
was an inference from `vercel.json` plus `aim-for-perfection.vercel.app`
answering HTTP 200; the deploy mechanism behind that URL is **unverified**.

## Getting the commits

They arrive as a git bundle: `ap-golf-experience.bundle` (~1.2 MB), attached
separately. It is based on `5d77e6e` (*Add About Us page with founder's story*),
which your clone already has.

```bash
git bundle verify /path/to/ap-golf-experience.bundle
git fetch /path/to/ap-golf-experience.bundle feat/colorway-gallery-and-founder:feat/colorway-gallery-and-founder
git checkout feat/colorway-gallery-and-founder
```

That gives you two commits — `42fc61d` (colorway gallery, founder portrait,
custom-orders flag) and `0c4c0a0` (the `/experience` page). Then push and open a
PR as normal.

## What the branch contains

| Path | What it is |
|---|---|
| `public/experience/index.html` | The immersive page. One self-contained 1.2 MB file — fonts, photos and animation inlined, no dependencies. Don't hand-edit; see "Regenerating". |
| `vercel.json` | The SPA catch-all rewrite now excludes `/experience` (`/((?!experience).*)`). Without this the rewrite swallows the path and serves the React app instead. |
| `src/components/ColorwayScroller.jsx` | Scroll-driven six-colorway gallery for the React site. |
| `public/images/colorways/*.jpg`, `public/images/founder.jpg` | Product renders and founder portrait. |
| `src/config.js` → `customOrdersEnabled` | Custom/bulk ordering is parked behind this flag (`false`): hides nav links, footer links, CTAs, announcement copy, FAQ entries. Both routes stay registered so old links never 404. Flip to `true` to restore. |

## Deployment is an open question — please check before assuming

`aim-for-perfection.vercel.app` is live, but nobody here knows how it is wired.
Before promising a URL, confirm whether this repo has a Vercel project attached.
If it doesn't, the page still ships via the existing GitHub Pages workflow
(`.github/workflows/deploy-pages.yml`, triggered on the default branch) and will
be served at `atxgreene.github.io/probable-fortnight/experience/`. Either host is
fine — just verify which one is real rather than inheriting the assumption.

## Context

Two sites by design:

- **Shopify** (theme "AP Golf", store `qpsdcu-su.myshopify.com`) — product, cart,
  checkout. Intended front door on `afpgolf.com`.
- **This page** — a showcase. Separate because the Shopify theme carries ~200 KB
  of Dawn CSS/JS plus a blurred sticky header that repaints every scroll frame,
  so it can't scrub as smoothly however the animation is written. Keeping the
  showcase framework-free is the point.

## Two external blockers — don't work around them

1. **`afpgolf.com` does not resolve.** Namecheap overrides its delegation with
   `failed-whois-verification.namecheap.com`; ICANN contact verification was
   never completed. The Namecheap panel shows "ACTIVE", which is registration
   status, not resolution. **Don't attach a custom domain yet.**
2. **The Shopify store is on a `trial` plan**, so its storefront password can't be
   lifted until a plan is chosen. The page's buy buttons point at
   `qpsdcu-su.myshopify.com`, which resolves but shows a password wall. Expected.

## Retiring the React site is NOT approved

The previous handoff stated this as decided. It wasn't — the owner confirmed only
that Shopify takes the root domain. **Don't remove or de-link any React pages**
until the owner says so explicitly. You were right to ask.

## Regenerating the page

Source lives outside this repo, on the owner's machine:
`C:\Users\austi\iCloudDrive\Projects\AP-Golf-Shopify\immersive\`

```
index.template.html   <- edit this
build.js              <- node build.js  (inlines fonts + photos)
index.html            <- output, copied to public/experience/
```

`build.js` has one `SHOP_DOMAIN` constant at the top that builds every buy
button. It currently points at the myshopify host; switch it to
`https://afpgolf.com` once that domain resolves, rebuild, and copy the output
over `public/experience/index.html`.
