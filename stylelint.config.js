/**
 * NOTE: ./.vscode/settings.json contains additional configuration to make
 * stylelint work smoothly with VS Code.
 *
 * ## Ressources
 * - https://github.com/stylelint/awesome-stylelint
 * - https://github.com/hipstersmoothie/stylelint-formatter-github
 *
 * @type {import('stylelint').Config}
 */
module.exports = {
  ignoreFiles: [
    './**/__generated__/**/*',
    './**/__snapshots__/**/*',
    './**/build/**/*',
    './**/coverage/**/*',
    './**/node_modules/**/*',
    './**/public/**',
    './**/storybook-static/**/*',
    './**/tmp/**/*',
  ],
  extends: [
    // @see https://github.com/stylelint/stylelint-config-recommended
    'stylelint-config-recommended',
    // @see https://github.com/prettier/stylelint-config-prettier
    'stylelint-config-prettier',
  ],
  overrides: [
    {
      files: ['./**/*.css', './**/*.scss'],
      /**
       * Why not postcss-sass as suggested in the [migration guide][1]? Because of
       * this issue: https://github.com/stylelint/stylelint/issues/4711#issuecomment-617145131.
       *
       * [1]: https://stylelint.io/migration-guide/to-14/
       */
      customSyntax: 'postcss-scss',
      rules: {
        'max-nesting-depth': 2,
        // @see https://tailwindcss.com/docs/functions-and-directives#directives
        'at-rule-no-unknown': [
          true,
          {
            ignoreAtRules: [
              'apply',
              'layer',
              'responsive',
              'screen',
              'tailwind',
              'variants',
            ],
          },
        ],
        // @see https://tailwindcss.com/docs/functions-and-directives#functions
        'function-no-unknown': [
          true,
          {
            ignoreFunctions: ['screen', 'theme'],
          },
        ],
      },
    },
    /**
     * The @stylelint/postcss-css-in-js package has issues...
     * @see https://github.com/stylelint/stylelint/issues/4574
     *
     * The current setup/solution is based on the suggestion here:
     * @see https://github.com/stylelint/stylelint/issues/4574#issuecomment-1004691530
     */
    {
      files: ['./**/*.ts', './**/*.tsx'],
      customSyntax: '@stylelint/postcss-css-in-js',
    },
  ],
}
