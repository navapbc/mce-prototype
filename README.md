# Local development

This prototype uses [Gatsby](https://www.gatsbyjs.org) to generate a progressive, static HTML site from React, Sass, and JSON data files.

## Installation

The instructions below reference NPM, but you can also use Yarn if you prefer.

```
npm install
```

## Scripts

### `npm start`

Gatsby will start a hot-reloading development environment accessible at `localhost:8000`, and a GraphQL IDE at `localhost:8000/___graphql`

### `npm run build`

Gatsby will perform an optimized production build for your site generating static HTML and per-route JavaScript code bundles.

### `npm run serve`

Gatsby starts a local HTML server for testing your built site.

### `npm run lint`

Run ESLint and Stylelint over JS and Sass files.

### `npm test`

Run JS tests.

## Dynamically creating pages

Dynamically creating pages from data files is handled in [`gatsby-node.js`](gatsby-node.js). Follow the existing examples in this file to generate other pages, or [view Gatsby's documentation on the topic](https://www.gatsbyjs.org/docs/creating-and-modifying-pages/#creating-pages-in-gatsby-nodejs).

At a high-level, you need to:

1. Add a `slug` field to each node. This can be done in `onCreateNode`
2. Within `createPages`, loop through the nodes and call `createPage` with the node's `path` and point to a template component, which will be used for rendering the page's HTML.
