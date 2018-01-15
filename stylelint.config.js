module.exports = {
  extends: [
    "@cmsgov/stylelint-config-design-system",
    "stylelint-config-prettier"
  ],
  rules: {
    // Prettier sometimes wraps !default to a new line
    "declaration-bang-space-before": null
  }
};
