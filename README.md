# storybook-tailwind-dark-mode

![Example](./example.gif)

## Installation

Install the following npm module:

```sh
npm i --save-dev storybook-tailwind-dark-mode
```

or with yarn:

```sh
yarn add -D storybook-tailwind-dark-mode
```

Then, add following content to `.storybook/main.js`

```js
module.exports = {
  addons: ['storybook-tailwind-dark-mode'],
};
```

### Set Dark Mode as default

To set dark mode as default, Add the following lines of code to your preview.js file

```js
const preview = {
  globalTypes: {
    darkMode: {
      defaultValue: true, // Enable dark mode by default on all stories
    },
    // Optional (Default: 'dark')
    className: {
      defaultValue: 'custom-classname', // Set your custom dark mode class name
    },
  },
};
```
