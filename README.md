# Muhibur Rahaman Fuadh — Academic Website

Editorial Scholar academic portfolio built with React, TypeScript, Vite, and Tailwind CSS. Includes all locally stored figures, project images, portrait, and a PDF copy of the supplied CV.

## Publish on GitHub Pages (no coding required)

1. Create a **public GitHub repository** named `YOUR-USERNAME.github.io` for a personal homepage, or any repository name for a project site.
2. Upload **the contents of this ZIP**, including the hidden `.github` folder, to the root of the repository and commit them to the `main` branch. (GitHub's browser upload does not support folder uploads reliably; use GitHub Desktop or Git to upload the unpacked directory, or choose “Import repository” using a local Git tool.)
3. In **Settings → Pages**, choose **GitHub Actions** as the Build and deployment source.
4. The provided `.github/workflows/deploy.yml` installs the dependencies, builds the site, and publishes it automatically whenever you push to `main`. The first run is available under **Actions**.
5. Visit `https://YOUR-USERNAME.github.io/` (personal site) or `https://YOUR-USERNAME.github.io/REPOSITORY/` (project site).

This website uses `HashRouter`: internal routes will appear as `/#/research`, `/#/academics`, etc., so direct links work without custom server rewrite rules. Image paths use root-relative URLs. For hosting under a repository subpath, the site must be hosted at the site root OR assets must be adjusted; the included GitHub Pages workflow is optimized for the personal homepage repository `YOUR-USERNAME.github.io`.

## Run locally

Requires Node.js 20 or later and npm:

```bash
npm ci
npm run dev
```

Open the displayed local address. To create a production bundle:

```bash
npm run build
npm run preview
```

## Editing information

- Main biography: `src/pages/Index.tsx`
- Academic background: `src/pages/Academics.tsx`
- Research project records and figure associations: `src/data/researchProjects.ts`
- Research page: `src/pages/Research.tsx`
- Research project details: `src/pages/ResearchDetail.tsx`
- Engineering projects: `src/pages/Projects.tsx`, `src/pages/ProjectDetail.tsx`
- Contact and LinkedIn: `src/pages/Contact.tsx`
- Shared design system: `src/editorial.css`
- Navigation: `src/components/Navigation.tsx`
- Research figures: `public/research-figures/`
- Other project photos: `public/lovable-uploads/` (original asset filenames preserved to avoid broken references)
- CV PDF: `public/cv/Muhibur_Rahaman_Fuadh_CV.pdf`

## Notes

The About Me narrative and academic dates follow the explicitly requested copy. The included CV was supplied previously and may describe the McGill position as incoming: review academic wording when publishing. The **View Manuscript** action in the research detail pages preserves the originally supplied external link (the owner indicated it will be updated later). All key local image files are included; fonts load from Google Fonts with system fallbacks.

Hosting/deployment depends on GitHub account settings and GitHub Actions availability. The software bundle is provided without secrets or external service credentials.
