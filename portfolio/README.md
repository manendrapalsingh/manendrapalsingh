# Portfolio Website

A modern portfolio website built with React, TypeScript, and Material UI.

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

## Manual Deployment to GitHub Pages

1. Build the project:
   ```bash
   cd doc
   npm run build
   ```

2. The build output will be in the `doc/dist/` directory.

3. Configure GitHub Pages:
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose the branch (usually `main` or `master`)
   - Select the `/doc` folder as the source
   - Click "Save"

4. Alternatively, you can push the `dist` folder contents to a `gh-pages` branch:
   ```bash
   # After building
   cd dist
   git init
   git add .
   git commit -m "Deploy portfolio"
   git branch -M gh-pages
   git remote add origin <your-repo-url>
   git push -u origin gh-pages
   ```

5. Your portfolio will be available at:
   `https://manendrapalsingh.github.io/manendrapalsingh/`

## Project Structure

```
doc/
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
- Make sure to include the `.nojekyll` file in the `public` folder for GitHub Pages
- The site is fully responsive and optimized for mobile devices
