# Handoff — get the Aim for Perfection experience page live on Vercel

**One job:** push this branch so Vercel publishes the immersive scroll page at
`/experience`. Everything needed is already committed — no build step, no new
Vercel project, no assets to gather.

## Do this

```bash
git checkout feat/colorway-gallery-and-founder
git push -u origin feat/colorway-gallery-and-founder
```

Vercel is already connected to this repo, so the push produces a preview
deployment. Confirm the page loads at `<deployment-url>/experience`, then merge
into `claude/aim-perfection-golf-site-xofwls` (the default branch) to put it on
the production URL — currently `aim-for-perfection.vercel.app/experience`.

Note the default branch also triggers `.github/workflows/deploy-pages.yml`,
which republishes GitHub Pages. That is expected; both hosts serve the same
build.

## What's on the branch

| Path | What it is |
|---|---|
| `public/experience/index.html` | The immersive page. **One self-contained 1.2 MB file** — fonts, photos and animation are inlined, zero dependencies. Do not hand-edit; see "Regenerating" below. |
| `vercel.json` | The SPA catch-all rewrite now excludes `/experience`, so the static page is served instead of the React app. **Don't revert this** or `/experience` will render the React site. |
| `src/components/ColorwayScroller.jsx` | Scroll-driven six-colorway gallery for the React site. |
| `public/images/colorways/*.jpg`, `public/images/founder.jpg` | Product renders and the founder portrait. |
| `src/config.js` → `customOrdersEnabled` | Custom/bulk ordering is parked. `false` hides the nav links, footer links, CTAs, announcement copy and FAQ entries. Both routes stay registered so old links never 404. Flip to `true` to bring it all back. |

## Context you may not have

The brand runs on two sites by design:

- **Shopify** (theme "AP Golf", store `qpsdcu-su.myshopify.com`) — product, cart,
  checkout. It is the intended front door.
- **This page** — a showcase. It exists separately because the Shopify theme
  carries ~200 KB of Dawn CSS/JS plus a blurred sticky header that repaints every
  scroll frame, so it can't scrub as smoothly no matter how the animation is
  written. Keeping the showcase framework-free is the whole point.

**The React site in `src/` is being retired.** Shopify replaced its shop, about
and contact pages. Don't invest in it; the only parts still wanted are the
colorway component and the images above.

## Two things are blocked (not your problem, don't work around them)

1. **`afpgolf.com` does not resolve.** Namecheap is overriding its delegation
   with `failed-whois-verification.namecheap.com` because ICANN contact
   verification was never completed. The Namecheap panel misleadingly shows
   "ACTIVE" — that's registration status, not resolution. The owner has to click
   the verification email. **Do not attach a custom domain yet.**
2. **The Shopify store is on a `trial` plan**, so its storefront password can't
   be removed until a plan is selected. The page's buy buttons therefore point at
   `qpsdcu-su.myshopify.com`, which resolves but shows a password wall. That is
   expected for now.

## Regenerating the page (only if you need to change it)

The source lives outside this repo, on the owner's machine:
`C:\Users\austi\iCloudDrive\Projects\AP-Golf-Shopify\immersive\`

```
index.template.html   <- edit this
build.js              <- node build.js  (inlines fonts + photos)
index.html            <- output, copied here to public/experience/
```

`build.js` has a single `SHOP_DOMAIN` constant at the top that builds every buy
button. Switch it from the myshopify host to `https://afpgolf.com` once that
domain resolves, rebuild, and copy the output over `public/experience/index.html`.

If you can't reach that machine, edit `public/experience/index.html` directly as
a one-off and tell the owner, so the template doesn't drift from what's live.
