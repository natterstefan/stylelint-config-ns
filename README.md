# stylelint-config-ns

[![npm version](https://badge.fury.io/js/stylelint-config-ns.svg)](https://badge.fury.io/js/stylelint-config-ns)
[![GitHub license](https://img.shields.io/github/license/natterstefan/stylelint-config-ns.svg)](https://github.com/natterstefan/stylelint-config-ns/blob/main/LICENCE)
[![Node CI](https://github.com/natterstefan/stylelint-config-ns/actions/workflows/ci.yml/badge.svg)](https://github.com/natterstefan/stylelint-config-ns/actions/workflows/ci.yml)

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

## Development

### How to publish

```sh
# prepare the CHANGELOG (new release headline)
git add CHANGELOG && git commit -m "chore: prepare release"

# push changes
git push

# publish the release
yarn publish
```

## License

[MIT](./LICENSE)
