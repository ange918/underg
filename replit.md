# Underg - Next.js Application

## Overview
A Next.js 16 application bootstrapped with create-next-app. Uses React 19, TypeScript, and Tailwind CSS v4.

## Project Architecture
- **Framework**: Next.js 16.1.6 with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 via PostCSS
- **Runtime**: Node.js 22
- **App Router**: Uses Next.js App Router (`app/` directory)

## Project Structure
```
app/           - Next.js App Router pages and layouts
  layout.tsx   - Root layout
  page.tsx     - Home page
  globals.css  - Global styles
public/        - Static assets
```

## Development
- Dev server runs on port 5000 via `npx next dev -H 0.0.0.0 -p 5000`
- Production build: `npm run build` then `npm run start`

## Configuration
- `next.config.ts` - Next.js config with allowedDevOrigins for Replit proxy
- `tsconfig.json` - TypeScript configuration
- `postcss.config.mjs` - PostCSS with Tailwind CSS
- `eslint.config.mjs` - ESLint configuration
