# melissafisherfilm.com

Astro source for Melissa Fisher's directing portfolio, deployed to GitHub Pages.

## Local development

```sh
npm install
npm run dev
```

The GitHub Actions workflow builds and publishes the `dist` directory whenever `main` is pushed.

The original Squarespace gallery images are mirrored into `public/images/projects`. Run
`npm run sync:images` only when the project data gains new Squarespace image references.
