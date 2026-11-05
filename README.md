# Lucas Julião Jiu-Jítsu

Website for the Lucas Julião Jiu-Jítsu school in Quinta do Conde, Portugal. It is a single page in European Portuguese, built with Next.js and TypeScript, and exports to static HTML.

## Getting started

Requires Node 24.

```sh
npm install
npm run dev
```

The site runs at http://localhost:3000.

## Commands

| Command          | What it does                        |
| ---------------- | ----------------------------------- |
| `npm run dev`    | Starts the development server       |
| `npm run build`  | Writes the static site to `out/`    |
| `npm start`      | Serves `out/` locally               |
| `npm run check`  | Runs type checks, linting and tests |
| `npm run format` | Formats the code with Prettier      |

## Project structure

```text
public/                Images, logos and icons served by the site
src/app/               Page, metadata and global style entry
src/components/
  layout/              Header, footer, floating WhatsApp button
  sections/            One component per page section
  ui/                  Logo, icons and shared pieces
src/content/site.ts    All text, contact details, classes and schedule
src/lib/               Link and timetable helpers, with tests
src/styles/            CSS, split by concern
```

## Editing content

Everything visitors read is in [src/content/site.ts](src/content/site.ts). Change a class time there and the program cards and timetable both update.

Four lists are empty on purpose, because the posters do not cover them: `stats`, `coaches`, `testimonials` and `plans`. A section stays hidden while its list is empty, and appears once real content is added. Coaches and pricing also add themselves to the navigation.

## Deployment

`npm run build` produces plain files in `out/`, which any static host can serve. Set `NEXT_PUBLIC_SITE_URL` to the final domain before building, so social sharing images resolve. See [.env.example](.env.example).

## Rights

The MIT licence in [LICENSE](LICENSE) covers the code. The logo and photos belong to their owners and are not covered by it.
