## Overview

A prototype for the Medicare Cost Estimator proposal. This prototype demonstrates a progressive web app, optimized for offline support, and uses the [CMS Design System](https://design.cms.gov) for an accessible, consistent, user-friendly experience.

## Installation

```
npm install
```

## Scripts

This prototype uses [Gatsby](https://www.gatsbyjs.org) to generate a progressive, static HTML site from React, Sass, and JSON data files.

### `npm start`

Gatsby will start a hot-reloading development environment accessible at `localhost:8000`, and a GraphQL IDE at `localhost:8000/___graphql`

### `npm run build`

Gatsby will perform an optimized production build for your site generating static HTML and per-route JavaScript code bundles.

### `npm run serve`

Gatsby starts a local HTML server for testing your built site.

## File structure

```
├── gatsby-config.js    Gatsby setup, including plugins that modify build process
├── gatsby-node.js      Gatsby Node API and Webpack hooks
├── public              Compiled static HTML site
├── src
    ├── components      Presentational UI patterns
    ├── data            Data files used for dynamically generated pages
    ├── fonts
    ├── images
    ├── layouts         Base HTML used when rendering each page
        ├── index.js    Main template that every page is wrapped in
        └── index.scss  Main stylesheet, imports design system styling
    ├── pages           Each file is rendered as a page
    └── templates       Templates for generated pages
└── tools               Testing, compilation, and CI/CD setup files
```

## Getting things done

### Optimizing performance

#### Import design system React components directly

Gatsby 1.0 uses Webpack 1.0, which means we can't yet benefit from Webpack 2.0's tree shaking functionality.

🛑 Bad for performance

This results in every design system component being bundled:

```js
import { Autocomplete } from "@cmsgov/design-system-core";
```

👍 Good for performance

This ensures only the component we need gets bundled:

```js
import Autocomplete from "@cmsgov/design-system-core/dist/components/Autocomplete/Autocomplete";
```

#### Other things we're doing

* Using PurifyCSS to remove (some) unused CSS. See [`modifyWebpackConfig.js`](tools/gatsby/modifyWebpackConfig.js)
* Using the Lodash webpack & Babel plugins for easy modular, small Lodash builds, via [`gatsby-plugin-lodash`](https://www.npmjs.com/package/gatsby-plugin-lodash)
* Creating a service worker and providing offline support, via [`gatsby-plugin-offline`](https://www.gatsbyjs.org/packages/gatsby-plugin-offline/)

### Dynamically create pages

Dynamically creating pages from data files is handled in [`gatsby-node.js`](gatsby-node.js). Follow the existing examples in this file to generate other pages, or [view Gatsby's documentation on the topic](https://www.gatsbyjs.org/docs/creating-and-modifying-pages/#creating-pages-in-gatsby-nodejs).

At a high-level, you need to:

1. Add a `slug` field to each node. This can be done in `onCreateNode`
2. Within `createPages`, loop through the nodes and call `createPage` with the node's `path` and point to a template component, which will be used for rendering the page's HTML.
