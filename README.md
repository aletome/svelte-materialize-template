# Svelte app template with Materialize CSS

This is a template to build a multipage web app (MPA) with [Svelte](https://svelte.dev) and [Materialize CSS](https://materializecss.com/).


## What is included

- Svelte framework
- Materialice CSS with custom colour palette
- Customizable html template
- Webpack 5
- Webpack dev server with hot reload
- A sample page with Materialize sidenav.

## Get started

First clone this repo (replace `myapp` with the name of your app):

```bash
git clone https://github.com/aletome/svelte-materialize-template.git myapp
cd myapp
```

If you don't want to keep all history of this project, delete `.git` hidden folder and init your new repo:

```bash
git init
```

Finally install all dependencies:

```bash
npm install
```

That's all! You are ready to go!

## Commands

To start webpack in dev mode with hot reload:

```bash
npm run dev
```

Visit [localhost:8585](http://localhost:8585) to see your app in the browser.

To generate production bundle:

```bash
npm run build
```
This command create in `public` folder `index.html`, `bundle.css` and `bundel-xxxxx.js`, where `xxxxx` is a hash that changes every build.

## Change Materialize CSS color palette

If you need to change Materialize CSS default color palette use `materialize-custom.scss`.
In the exampe below I changed primary, secondary, success, error and link colors.

```scss
// 1. Custom Colors
// ==========================================================================

@import '../node_modules/materialize-css/sass/components/color-variables';

//Place here color scheme you want
$primary-color: color("teal", "lighten-2") !default;
$primary-color-light: lighten($primary-color, 15%) !default;
$primary-color-dark: darken($primary-color, 15%) !default;

$secondary-color: color("pink", "lighten-1") !default;
$success-color: color("green", "base") !default;
$error-color: color("red", "base") !default;
$link-color: color("light-blue", "darken-1") !default;

@import '../node_modules/materialize-css/sass/materialize.scss';
```

## Create pages

To create a new:
- Create a folder inside `src/Pages` folder. The name of the folder will be the name of html page.
- Inside the new page folder create two files:
  - `main.js` (the name `main.js` is mandatory): this is the entry point of the new page;
  - `newpage.svelte` (where `newpage` is a name you prefer): this is the svelte component file.
- In the `main.js` file import the `newpage.svelte` file (`import App from './newpage.svelte';`).
