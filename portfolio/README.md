# Portfolio Website

A data-driven portfolio built with React, TypeScript, Material UI, and the GitHub REST API.

## Dynamic content

- Public GitHub profile statistics and recently updated repositories load live in the browser.
- Experience, project, and open-source content is maintained in `src/data/` instead of being embedded in page components.
- Live GitHub requests have a graceful fallback linking visitors to the public profile if the API is unavailable or rate-limited.
- Every development or production build synchronizes `public/resume.pdf` from the canonical PDF in `../resume-latex/output/`.
- The production build is emitted directly to the repository-level `docs/` directory for GitHub Pages.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The build first regenerates the LaTeX resume and copies the latest PDF into the portfolio automatically.

## Deployment to GitHub Pages

1. Build the project:
   ```bash
   cd portfolio
   npm run build
   ```

2. The build output will replace the repository-level `docs/` directory.

3. Configure GitHub Pages:
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose the branch (usually `main` or `master`)
   - Select the `/docs` folder as the source
   - Click "Save"

4. Your portfolio will be available at:
   `https://manendrapalsingh.github.io/manendrapalsingh/`

## Project Structure

```
portfolio/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── data/        # Data files
│   ├── App.tsx      # Main app component
│   ├── main.tsx     # Entry point
│   └── theme.ts     # MUI theme configuration
├── package.json
├── vite.config.ts   # Vite configuration with GitHub Pages base path
└── tsconfig.json
```

## Notes

- The base path is configured as `/manendrapalsingh/` in `vite.config.ts`
- The site is fully responsive and optimized for mobile devices
- The live GitHub section uses unauthenticated public API requests and may temporarily show its fallback when GitHub rate limits the visitor
