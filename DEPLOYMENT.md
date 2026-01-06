# Deployment Documentation

This document explains how the deployment process works for this Gatsby site, including the GitHub Actions workflow and the plugins that make it all happen.

## Overview

The site is automatically deployed to GitHub Pages at `https://frantzyy.github.io/gatsby-profile` whenever changes are pushed to the `main` branch. The deployment is handled by a GitHub Actions workflow that builds the Gatsby site and publishes it to the `gh-pages` branch.

## Deployment Methods

### Automatic Deployment (Recommended)

**How it works:** Simply push your changes to the `main` branch. GitHub Actions will automatically:
1. Build your Gatsby site
2. Deploy it to the `gh-pages` branch
3. Make it live on GitHub Pages

**No manual steps required!** The workflow runs automatically on every push to `main`.

### Manual Deployment

If you need to deploy manually (for testing or troubleshooting), you can run:

```bash
npm run deploy
```

This command:
1. Builds the site with `gatsby build --prefix-paths`
2. Uses the `gh-pages` npm package to push the built files to the `gh-pages` branch
3. Triggers GitHub Pages to update the live site

## How GitHub Actions Works

The deployment automation is powered by a GitHub Actions workflow located at `.github/workflows/gatsby-publish.yml`.

### Workflow Configuration

```yaml
name: Gatsby Publish

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v3
      - uses: enriikke/gatsby-gh-pages-action@v2
        with:
          access-token: ${{ secrets.GITHUB_TOKEN }}
          deploy-branch: gh-pages
          gatsby-args: --prefix-paths
```

### Workflow Breakdown

#### 1. Trigger
```yaml
on:
  push:
    branches:
      - main
```
- The workflow triggers automatically when code is pushed to the `main` branch
- This includes commits, merges, and pull request merges

#### 2. Job Configuration
```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: write
```
- Runs on GitHub's Ubuntu runners (cloud-hosted virtual machines)
- `permissions: contents: write` grants the workflow permission to push to the repository
- This is required to update the `gh-pages` branch

#### 3. Checkout Step
```yaml
- uses: actions/checkout@v3
```
- Checks out your repository code so the workflow can access it
- This is a standard GitHub Action that downloads your code to the runner

#### 4. Build and Deploy Step
```yaml
- uses: enriikke/gatsby-gh-pages-action@v2
  with:
    access-token: ${{ secrets.GITHUB_TOKEN }}
    deploy-branch: gh-pages
    gatsby-args: --prefix-paths
```

This is where the magic happens! The `gatsby-gh-pages-action` does the following:

**What it does:**
1. **Installs dependencies** - Runs `npm install` (or `yarn install`) to get all required packages
2. **Builds the site** - Executes `npm run build`, which runs `gatsby build` with the `--prefix-paths` flag
3. **Prepares deployment** - Copies any `CNAME` file (for custom domains) to the build output
4. **Deploys to GitHub Pages** - Pushes the built files from the `public` directory to the `gh-pages` branch

**Configuration options:**
- `access-token`: Uses `GITHUB_TOKEN`, which is automatically provided by GitHub Actions (no setup required!)
- `deploy-branch: gh-pages`: Specifies the branch where GitHub Pages serves the site from
- `gatsby-args: --prefix-paths`: Tells Gatsby to respect the `pathPrefix` configuration

## The `--prefix-paths` Flag

This flag is crucial for repository pages (as opposed to user/org pages). Here's why:

### Repository Pages vs User/Org Pages

- **User/Org Pages**: Deployed at `https://username.github.io` (no path prefix needed)
- **Repository Pages**: Deployed at `https://username.github.io/repository-name` (requires path prefix)

Since this site is deployed at `https://frantzyy.github.io/gatsby-profile`, it's a repository page and needs the path prefix.

### How It Works

In `gatsby-config.js`, the path prefix is configured:
```javascript
module.exports = {
  pathPrefix: "/gatsby-profile",
  // ... rest of config
}
```

When you run `gatsby build --prefix-paths`:
- All internal links are prefixed with `/gatsby-profile`
- Assets (CSS, JS, images) are correctly referenced with the prefix
- The site works correctly when served from the subdirectory

Without this flag, the site would try to load resources from the root (`/`) instead of `/gatsby-profile`, causing broken links and missing assets.

## Gatsby Plugins and Build Process

Several Gatsby plugins are used during the build process:

### Core Plugins

1. **`gatsby-plugin-react-helmet`**
   - Manages document head elements (title, meta tags, etc.)
   - Allows per-page customization of SEO metadata

2. **`gatsby-plugin-sitemap`**
   - Automatically generates a `sitemap.xml` during build
   - Helps search engines discover and index your pages

3. **`gatsby-plugin-less`**
   - Enables Less CSS preprocessing
   - Compiles `.less` files to CSS during build

4. **`gatsby-plugin-google-fonts`**
   - Optimizes Google Fonts loading
   - Preloads fonts for better performance

5. **`gatsby-plugin-google-gtag`**
   - Integrates Google Analytics
   - Tracks page views and user interactions

### Build Output

When `gatsby build` runs, it:
1. Compiles React components to static HTML
2. Processes and optimizes images
3. Generates CSS from Less files
4. Creates optimized JavaScript bundles
5. Generates the sitemap
6. Outputs everything to the `public/` directory

The `public/` directory contains the complete static site that gets deployed to GitHub Pages.

## GitHub Pages Configuration

GitHub Pages automatically serves content from the `gh-pages` branch. When the workflow pushes to this branch:

1. GitHub detects the new commit
2. GitHub Pages rebuilds the site (usually takes 1-2 minutes)
3. The site becomes available at the configured URL

### Repository Settings

To verify or configure GitHub Pages:
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", it should show "Deploy from a branch"
4. The branch should be `gh-pages` with `/ (root)` as the folder

## Authentication: GITHUB_TOKEN

The workflow uses `GITHUB_TOKEN` for authentication, which is:
- **Automatically provided** by GitHub Actions (no manual setup needed)
- **Scoped to the repository** where the workflow runs
- **Automatically revoked** after the workflow completes
- **Secure** - only has permissions explicitly granted in the workflow

The `permissions: contents: write` setting grants the token permission to:
- Read repository contents
- Write (push) to the repository (needed to update `gh-pages` branch)

## Troubleshooting

### Deployment Not Triggering

- Check that you're pushing to the `main` branch
- Verify the workflow file exists at `.github/workflows/gatsby-publish.yml`
- Check the Actions tab in GitHub to see if the workflow is running

### Build Failures

- Check the Actions tab for error messages
- Verify all dependencies are in `package.json`
- Ensure `gatsby build` works locally: `npm run build`

### Site Not Updating

- GitHub Pages can take 1-2 minutes to update after deployment
- Check the `gh-pages` branch to verify files were pushed
- Clear your browser cache or try an incognito window

### Broken Links or Missing Assets

- Verify `--prefix-paths` is included in the workflow
- Check that `pathPrefix: "/gatsby-profile"` is set in `gatsby-config.js`
- Ensure all asset paths use relative URLs or Gatsby's `Link` component

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Gatsby GitHub Pages Guide](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/)
- [gatsby-gh-pages-action on GitHub Marketplace](https://github.com/marketplace/actions/gatsby-publish)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
