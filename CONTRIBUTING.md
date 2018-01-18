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

### `npm run deploy`

An optimized production build of the site will be generated and pushed to the `gh-pages` GitHub branch.

### `npm run serve`

Gatsby starts a local HTML server for testing your built site.

### `npm test`

Run JS tests using Jest.

## File structure

```
├── gatsby-config.js    Gatsby setup
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

We only import the design system styles we're actually using, in order to reduce the bundled CSS file size. These are imported in [`src/layouts/index.scss`](src/layouts/index.scss), and you can import other parts in this file if you are in need of a component not yet imported.

### Dynamically create pages

Dynamically creating pages from data files is handled in [`gatsby-node.js`](gatsby-node.js). Follow the existing examples in this file to generate other pages, or [view Gatsby's documentation on the topic](https://www.gatsbyjs.org/docs/creating-and-modifying-pages/#creating-pages-in-gatsby-nodejs).

At a high-level, you need to:

1. Add a `slug` field to each node. This can be done in `onCreateNode`
2. Within `createPages`, loop through the nodes and call `createPage` with the node's `path` and point to a template component, which will be used for rendering the page's HTML.
