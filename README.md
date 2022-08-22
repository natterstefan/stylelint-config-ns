# stylelint-config-ns

> Stylelint config with pre-configured Sass (`.scss`), Tailwind, CSS-in-JS
> (`.ts` and `.tsx`), PostCSS and Prettier support.

## Installation

Install the package with

```sh
npm install stylelint-config-ns --save-dev
# or
yarn add stylelint-config-ns -D
```

## Usage

Add the following to your `styelint.config.js` config:

```js
/**
 * @type {import('stylelint').Config}
 */
module.exports = {
  extends: 'stylelint-config-ns',
}
```

## Extended Configs

The following configurations are used and preconfigured:

- [stylelint/stylelint-config-recommended: The recommended shareable config for Stylelint](https://github.com/stylelint/stylelint-config-recommended)
- [prettier/stylelint-config-prettier: Turns off all rules that are unnecessary or might conflict with prettier.](https://github.com/prettier/stylelint-config-prettier)

## License

[MIT](./LICENSE)
