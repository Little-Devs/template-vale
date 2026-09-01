# Vale Freight

Short-sea freight operator landing — Bass Strait and the Tasman. Ro-ro, containers,
project cargo between Webb Dock (Melbourne), Devonport, Burnie, Bell Bay and a weekly
Tasman lane to Auckland / Lyttelton.

Live demo: https://vale.little.website/

Built with Astro 5 (static output) and a plain CSS design system. No CMS, no auth,
no payments, no booking engine — contact goes straight to `mailto:sales@little.cloud`.

## Quick start

```sh
bun install
bun run dev      # local dev server
bun run build    # static build to dist/
bun run preview  # preview the build
```

## Customise

Everything copy- and structure-related lives in **src/data/site.ts**:

- `sections` — turn any of `hero, board, lanes, cargo, terminals, contact` on/off
- `nav`, `contact`, hero copy, board sailings, lanes, cargo specs, terminals
- Brand tokens (palette, type, spacing, nav) live in **src/styles/tokens.css**

Swap `public/hero.jpg`, `lane.jpg`, `yard.jpg`, `hold.jpg` for your own port
photography and update the credits in the footer (`src/components/Footer.astro`).

## Contact form

The slot-request form composes a `mailto:` to **sales@little.cloud** with the lane,
cargo type and window pre-filled. It opens the visitor's mail client — there is no
backend by design.

## License

MIT — see LICENSE. Photography via Pixabay (credits in footer).
Template ID: vale  Category: Landing Page
Repository: https://github.com/Little-Devs/template-vale
