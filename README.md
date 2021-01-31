# Kreditoj

[![](https://data.jsdelivr.com/v1/package/npm/kreditoj/badge)](https://www.jsdelivr.com/package/npm/kreditoj)

## The idea

Kreditoj (means "credits" in [esperanto](https://en.wikipedia.org/wiki/Esperanto)) is a really simple lib to create a credits page with team development and publish in easy way. Is like a credits in a final of the movie.

You can see an example at final of this readme.

## Usage

This lib was created using Vue in version 3. You can just import the vue lib, the Kreditoj lib and use. See an example bellow:

```html
<html>
<head>
    <!-- Import the stylesheet bellow -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/kreditoj@latest/dist/Kreditoj.css" />
    <title>Credits | Powered by Kreditoj</title>
</head>

<body>
    <!-- div with id to render the component -->
    <div id="app"></div>

    <!-- Import vue lib and kreditoj -->
    <script src="https://cdn.jsdelivr.net/npm/vue@3.0.5/dist/vue.global.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/kreditoj@latest/dist/Kreditoj.umd.min.js"></script>

    <script>
        <!-- Configuration and instance. More details about configuration bellow -->
        window.screenplay = { /* .... */ }; // You can see examples here: https://github.com/tacnoman/kreditoj/tree/master/examples
        window.Vue.createApp(window.Kreditoj).mount('#app');
    </script>
</body>
```

You must set the variable `window.screenplay` with credits configuration to Kreditoj render with your data.

## Creating the variable `screenplay`

The Kreditoj uses this variable to create components. There are some types of components:

1. TitleWithSub - A component that appear with a title and a subtitle
2. Credits - Credits as a slider rolling to up.

### Creating scenes

You must add an attribute to `window.screenplay` called `scenes` as an array.

```js
window.screenplay = {
  scenes: [
    { ... }
  ],
};
```

Each scene must have two attributes:

1. componentName: A string with name of the component
2. props: Object with props to component

Example:

```js
window.screenplay = {
  scenes: [
    {
      componentName: 'TitleWithSub',
      props: {
        title: 'Directed by',
        subtitle: 'Kevin Feige',
      },
    },
  ],
};
```

This code will generate the image bellow:

<img src="https://github.com/tacnoman/kreditoj/raw/master/data/title-with-subtitle.gif" alt="example of title with sub" />

# Running project using Vue

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Simple usage with credits.html

```
<html>
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/kreditoj@0.2.1/dist/Kreditoj.css" />
    <title>Credits | Powered by Kreditoj</title>
</head>

<body>
    <div id="app"></div>

    <script src="https://cdn.jsdelivr.net/npm/vue@3.0.5/dist/vue.global.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/kreditoj@0.2.1/dist/Kreditoj.umd.min.js"></script>

    <script>
    window.screenplay = { /* .... */ }; // You can see examples here: https://github.com/tacnoman/kreditoj/tree/master/examples
    window.Vue.createApp(window.Kreditoj).mount('#app');
    </script>
</body>
```

### Example result

<img src="https://github.com/tacnoman/kreditoj/raw/master/data/credits.gif" alt="example" />
