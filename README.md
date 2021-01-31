# kreditoj

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
