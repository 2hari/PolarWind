# PolarWind

Shopify Polaris + Tailwind. Build your Shopify app's UI and landing page hassle-free, without the need to set up a Shopify app development environment.

## Getting Started

### Install dependencies and run dev server

```sh
pnpm install && pnpm dev
```

### Access Landing page & App UI

```bash
pages/
├── index     # Landing page
├── shopify   # App UI

```

This template uses Next.js. So Based on file based routing, Your Landing page will be visible on home route `/` and shopify app ui on route `/shopify`

Default Landing Page
<br/>
![default landing](/public/landing.png)

Initial App UI in Polaris Playground
<br/>
![ezcv logo](/public/shopify-mock.png)

## About

Seeing how the UI would look and interact with it without having to spin up a starter template and a stable internet connection is really helpful, even when I'm travelling, I can create UIs and see how it would actually _feel_ when the app is finally built. This also meant creating mocks and MVPs offline became viable. It's like a playground for shopify apps.

### Built With

- [Next.js](https://nextjs.org/)
- [Shopify Polaris](https://polaris.shopify.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)
