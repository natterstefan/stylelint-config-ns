/**
 * NOTE: .vscode/settings.json contains additional configuration to make
 * stylelint work smoothly with VS Code.
 *
 * ## Ressources
 * - @see https://github.com/stylelint/awesome-stylelint
 * - @see https://github.com/hipstersmoothie/stylelint-formatter-github
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
       * Why not postcss-sass as suggested in the [migration guide][1]?
       * Because of this issue:
       * @see https://github.com/stylelint/stylelint/issues/4711#issuecomment-617145131
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
  ],
}
