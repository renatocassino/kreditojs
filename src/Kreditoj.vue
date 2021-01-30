<template>
  <div class="credits-app">
    <!-- <Credits /> -->
    <scenes :screenplay="screenplay" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Scenes from './components/Scenes.vue';
// import Credits from './components/Credits.vue';

export default defineComponent({
  name: 'Kreditoj',
  components: {
    Scenes,
    // Credits,
  },
  setup() {
    return {
      screenplay: {
        scenes: [
          {
            componentName: 'TitleWithSub',
            props: {
              title: 'Directed By',
              subtitle: 'Milaboras Astranica',
            },
          },
          {
            componentName: 'TitleWithSub',
            props: {
              title: 'Script by',
              subtitle: 'Kevin Feige',
            },
          },
          {
            componentName: 'TitleWithSub',
            props: {
              title: 'Director of Photography',
              subtitle: 'Don Burgess, A.S.C.',
            },
          },
          {
            componentName: 'Credits',
            props: {},
          },
        ],
      },
    };
  },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Saira:wght@400;600&display=swap');
body {
  margin: 0;
}

.credits-app {
  font-family: Saira, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: default;
  text-align: center;
  color: #fff;
  margin-top: 0;
  background: #000;
  height: 100vh;
}
</style>
