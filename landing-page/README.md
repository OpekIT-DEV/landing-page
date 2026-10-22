# Opekit Landing Page

The Next.js application behind [www.opekit.com](https://www.opekit.com) — the marketing site for Opekit's IT services, custom software, cloud, cybersecurity, and managed support offerings.

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

From the repository root, the same commands are available through `make`:

```bash
make install  # install dependencies
make dev      # start the development server
make build    # create a production build
make run      # build and start the production server
```

Use `make start` when a production build already exists.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## SEO

- Metadata, Open Graph, Twitter cards, and JSON-LD live in `app/layout.tsx`.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`.
- The canonical site URL is configured with `NEXT_PUBLIC_SITE_URL` and defaults to `https://www.opekit.com`.

## Deploy

The site is deployed on Vercel. Set `NEXT_PUBLIC_SITE_URL=https://www.opekit.com` in the project environment variables so metadata, sitemap, and robots use the production domain.

## Links

- Website: [www.opekit.com](https://www.opekit.com)
- GitHub organization: [OpekIT-DEV](https://github.com/OpekIT-DEV)
