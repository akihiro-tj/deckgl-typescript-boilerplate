module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended',
    'stylelint-config-recess-order',
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'block-no-empty': null,
    'selector-class-pattern': null,
  },
};
