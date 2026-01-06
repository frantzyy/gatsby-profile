# Deployment Documentation

This document explains how the deployment process works for this Gatsby site, including the GitHub Actions workflow and the plugins that make it all happen.

## Overview

The site is automatically deployed to GitHub Pages at `https://frantzyy.github.io/gatsby-profile` whenever changes are pushed to the `main` branch. The deployment is handled by a GitHub Actions workflow that builds the Gatsby site and publishes it to the `gh-pages` branch.

Version management is automated through a separate GitHub Actions workflow that bumps the version number when Pull Requests are merged with version labels. The version is automatically updated in `package.json`, reflected in the site via `gatsby-config.js`, and tracked in `CHANGELOG.md` and Git tags.

## Deployment Methods

### Automatic Deployment (Recommended)

**How it works:** Simply push your changes to the `main` branch. GitHub Actions will automatically:
1. Build your Gatsby site
2. Deploy it to the `gh-pages` branch
3. Make it live on GitHub Pages

**No manual steps required!** The workflow runs automatically on every push to `main`.

**Note:** If you merge a Pull Request with a version label (`major`, `minor`, or `patch`), the version will be automatically bumped first, and then the site will be automatically deployed with the new version. The deployment workflow waits for the version bump workflow to complete before running.

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
  workflow_run:
    workflows: ["Version Bump"]
    types:
      - completed
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    # Skip deployment for commits with [skip ci] (version bump commits)
    # For workflow_run events, always deploy if the version bump succeeded
    if: |
      (github.event_name == 'workflow_run' && github.event.workflow_run.conclusion == 'success') ||
      (github.event_name == 'push' && (!github.event.head_commit || !contains(github.event.head_commit.message, '[skip ci]')))
    permissions:
      contents: write
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          fetch-depth: 0
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build Gatsby site
        run: npm run build -- --prefix-paths
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
          publish_branch: gh-pages
```

### Workflow Breakdown

#### 1. Trigger
```yaml
on:
  push:
    branches:
      - main
  workflow_run:
    workflows: ["Version Bump"]
    types:
      - completed
    branches:
      - main
```
- The workflow triggers automatically when code is pushed to the `main` branch
- **Additionally**, the workflow triggers after the "Version Bump" workflow completes successfully
- This ensures that when a PR with a version label is merged, the version is bumped first, then the site is deployed with the new version
- Commits with `[skip ci]` in the message are skipped to prevent deployment loops

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

#### 4. Build Steps

The workflow uses explicit steps for better control and reliability:

**Step 1: Checkout**
```yaml
- name: Checkout repository
  uses: actions/checkout@v3
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    fetch-depth: 0
```
- Checks out the repository code with full git history

**Step 2: Setup Node.js**
```yaml
- name: Setup Node.js
  uses: actions/setup-node@v3
  with:
    node-version: '18'
    cache: 'npm'
```
- Sets up Node.js version 18
- Enables npm caching for faster builds

**Step 3: Install Dependencies**
```yaml
- name: Install dependencies
  run: npm ci
```
- Installs dependencies using `npm ci` for faster, reliable, reproducible builds

**Step 4: Build**
```yaml
- name: Build Gatsby site
  run: npm run build -- --prefix-paths
```
- Builds the Gatsby site with the `--prefix-paths` flag to respect the `pathPrefix` configuration

**Step 5: Deploy**
```yaml
- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./public
    publish_branch: gh-pages
```
- Deploys the built site from the `public` directory to the `gh-pages` branch
- Uses `peaceiris/actions-gh-pages` which is a reliable, well-maintained action for GitHub Pages deployment

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

### Version Bump Not Triggering

- Verify the PR was actually merged (not just closed)
- Check that a version label (`major`, `minor`, or `patch`) was added to the PR
- Review the Actions tab to see if the workflow ran and check for errors
- Ensure the PR was merged into the `main` branch

### Version Bump Issues

- If version wasn't bumped, check the workflow logs in the Actions tab
- Verify the label name matches exactly: `major`, `minor`, or `patch` (case-sensitive)
- Check that `package.json` has a valid version number format (e.g., `0.2.0`)
- Ensure the workflow has `contents: write` permission

## Version Management

The repository uses automated version bumping through GitHub Actions. When a Pull Request is merged with a version label, the version number is automatically incremented, a Git tag is created, and the CHANGELOG is updated.

### Version Bump Workflow

The version bump workflow (`.github/workflows/version-bump.yml`) triggers when a Pull Request is merged into the `main` branch. It checks for version labels on the PR to determine how to bump the version.

#### Version Types

- **`major`**: Increments the major version (e.g., `0.2.0` → `1.0.0`)
  - Use for breaking changes that are incompatible with previous versions
- **`minor`**: Increments the minor version (e.g., `0.2.0` → `0.3.0`) - **Default**
  - Use for new features that are backward compatible
  - If no version label is present, the workflow defaults to `minor`
- **`patch`**: Increments the patch version (e.g., `0.2.0` → `0.2.1`)
  - Use for bug fixes and small changes that are backward compatible

#### How to Use Version Bumping

1. **Create a Pull Request** with your changes
2. **Add a version label** to the PR:
   - Go to the PR on GitHub
   - Click on the "Labels" section
   - Add one of: `major`, `minor`, or `patch`
   - If no label is added, it defaults to `minor`
3. **Merge the PR** - The version bump workflow will automatically:
   - Update the version in `package.json`
   - Create a Git tag (e.g., `v0.3.0`)
   - Update `CHANGELOG.md` with the new version entry
   - Commit the changes with `[skip ci]` to prevent the push trigger from running
   - After the version bump completes, the deployment workflow automatically runs to deploy the site with the new version

#### Version Bump Process

When a PR with a version label is merged, the workflow:

1. **Checks if PR was merged** - Only runs if the PR was actually merged (not just closed)
2. **Determines version bump type** - Checks for `major`, `minor`, or `patch` label (defaults to `minor`)
3. **Bumps version in package.json** - Updates the version number using semantic versioning
4. **Creates Git tag** - Tags the commit with the new version (format: `v{version}`)
5. **Updates CHANGELOG.md** - Adds a new version entry at the top with:
   - Version number (e.g., `v0.3.0`)
   - Current date
   - PR title as description
6. **Commits changes** - Creates commits with `[skip ci]` to prevent the push trigger from running deployment
7. **Pushes to repository** - Pushes the commits and tags to the `main` branch
8. **Triggers deployment** - The deployment workflow automatically runs after the version bump workflow completes, deploying the site with the new version

### Version and Deployment Relationship

The version bump and deployment workflows work together to ensure proper ordering:

- **Version bump runs first** - When a PR with a version label is merged, the version bump workflow runs first
- **Deployment waits for version bump** - The deployment workflow is configured to trigger after the version bump workflow completes successfully via `workflow_run`
- **Automatic deployment with new version** - After version bump completes, the site is automatically deployed with the updated version
- **`[skip ci]` protection** - Version bump commits include `[skip ci]` to prevent the push trigger from running deployment, but the `workflow_run` trigger ensures deployment still happens after version bump
- **Version is automatically reflected** - Since `gatsby-config.js` reads the version from `package.json`, the site automatically displays the new version after deployment

This ensures:
- Version bumps always complete before deployment
- Deployments always include the latest version
- No race conditions between version bump and deployment
- Clear separation of concerns between versioning and deployment

### Viewing Version History

You can view the version history in several ways:

1. **Git Tags**: View all version tags with `git tag` or on GitHub under Releases
2. **CHANGELOG.md**: See version history with dates and descriptions
3. **package.json**: Check the current version number
4. **Git Log**: View version bump commits with `git log --grep="bump version"`

### Semantic Versioning Best Practices

This project follows [Semantic Versioning](https://semver.org/) (SemVer):

- **MAJOR** version when you make incompatible API changes
- **MINOR** version when you add functionality in a backward compatible manner
- **PATCH** version when you make backward compatible bug fixes

For this profile site:
- **Major**: Complete redesign, breaking changes to site structure
- **Minor**: New sections, new features, content updates (default)
- **Patch**: Bug fixes, small corrections, typo fixes

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Gatsby GitHub Pages Guide](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/)
- [gatsby-gh-pages-action on GitHub Marketplace](https://github.com/marketplace/actions/gatsby-publish)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Semantic Versioning](https://semver.org/)
