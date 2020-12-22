# Svelte app template with Materialize CSS

This is a template to build web apps with [Svelte](https://svelte.dev) and [Materialize CSS](https://materializecss.com/).


## What is included

- Svelte framework
- Materialice CSS
- Webpack 5
- Webpack dev server with hot reload

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