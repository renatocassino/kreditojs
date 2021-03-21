# KreditoJS

[![](https://data.jsdelivr.com/v1/package/npm/kreditojs/badge)](https://www.jsdelivr.com/package/npm/kreditojs)

## The idea

KreditoJS ("Kreditoj" means "credits" in [esperanto](https://en.wikipedia.org/wiki/Esperanto)) is a really simple lib to create a credits page with team development and publish in easy way. Is like a credits in a final of the movie.

You can see an example at final of this readme.

## Usage

This lib was created using Vue in version 3. You can just import the vue lib, the KreditoJS lib and use. See an example bellow:

```html
<html>
<head>
    <!-- Import the stylesheet bellow -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/kreditojs@latest/dist/Kreditojs.css" />
    <title>Credits | Powered by KreditoJS</title>
</head>

<body>
    <!-- div with id to render the component -->
    <div id="app"></div>

    <!-- Import vue lib and kreditojs -->
    <script src="https://cdn.jsdelivr.net/npm/vue@3.0.5/dist/vue.global.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/kreditojs@latest/dist/Kreditojs.umd.min.js"></script>

    <script>
        // Configuration and instance. More details about configuration bellow
        window.screenplay = { /* .... */ }; // You can see examples here: https://github.com/tacnoman/kreditojs/tree/master/examples
        window.Vue.createApp(window.Kreditojs).mount('#app');
    </script>
</body>
```

You must set the variable `window.screenplay` with credits configuration to Kreditojs render with your data.

## Creating the variable `screenplay`

The Kreditojs uses this variable to create components. There are some types of components:

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

<img src="https://github.com/tacnoman/kreditojs/raw/master/data/title-with-subtitle.gif" alt="example of title with sub" />

### Example of component `Credits`

The component `Credits` has an attribute to add in props called `components`. This attributes works like `scenes`, because you must add multiple components inside.

The child components to `Credits` is:

1. Title
2. SideBySide
3. SimpleList

The component `Title` has just a prop attribute called `title`.

Ex:
```js
  window.screenplay = {
    scenes: [
      {
        componentName: 'Credits',
        props: {
          components: [
            {
              componentName: 'Title',
              props: {
                title: 'Cast',
              },
            },
            // ......
```

The component `SideBySide` has a prop called `values` with an array of arrays.
The first value of each array will be place in left size. The second value will be placed in the right side.
If the second attribute is an array, will be place a list instead of a unique text.

Ex:
```js
  window.screenplay = {
    scenes: [
      {
        componentName: 'Credits',
        props: {
          components: [
            {
              componentName: 'SideBySide',
              props: {
                values: [
                    ['Design', ['Roth Wigfall', 'Gledstane Shirlee']],
                    ['Development', ['Kaitlynn Saleway', 'Higgan Lincoln', 'Marshall Willcott', 'Shepperd Caltera']],
                    ['P.M.', 'Winnifred Tackle'],
                    ['P.O.', 'Tandy Huggons'],
                    ['S.M.', 'Manya Alti'],
                    ['Big data', 'Godfry Orae'],
                    ['Dess Code Reference', 'Cassandry Donson'],
                  ],
                },
              },
            },
            // ....
```

Another component is the `SimpleList`. Has a prop called `lines` with an array of string.

Ex:
```js
  window.screenplay = {
    scenes: [
      {
        componentName: 'Credits',
        props: {
          components: [
            {
              componentName: 'SimpleList',
              props: {
                lines: [
                    'Jovani Jerde',
                    'Raheem Hoeger',
                    'Alec Runte',
                    'Wolf Raynor',
                    'Edgardo Lang',
                    'Garnett Marquis',
                    'Maverick Fay',
                    'Murray Mossie Route',
                    'Demond Schimmel',
                  ],
                },
              },
            },
            // ....
```

You can see theese three examples in gif bellow:

<img src="https://github.com/tacnoman/kreditojs/raw/master/data/slider-credits.gif" alt="credits like a slider" />

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

### Full example result

<img src="https://github.com/tacnoman/kreditojs/raw/master/data/credits.gif" alt="example" />
