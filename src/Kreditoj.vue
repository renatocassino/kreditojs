<template>
  <div class="credits-app">
    <!-- <Credits /> -->
    <scenes :screenplay="screenplay" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Scenes from './components/Scenes.vue';

export default defineComponent({
  name: 'Kreditoj',
  components: {
    Scenes,
  },
  setup() {
    return {
      screenplay: {
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
                {
                  componentName: 'SideBySide',
                  props: {
                    values: [
                      ['Design', ['Felipe Luize', 'Anna Waack']],
                      ['Development', ['Renato Cassino', 'Igor Canedo', 'Lages', 'João Paulo']],
                      ['Sound Producer', 'Molla (Carlos Cassino)'],
                      ['P.O.', 'Juliana Soraes'],
                      ['S.M.', 'Lilian'],
                      ['Python GOD', 'Alen'],
                      ['Dess Code Reference', 'Gustav'],
                    ],
                  },
                },
                {
                  componentName: 'Title',
                  props: {
                    title: 'External Support',
                  },
                },
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
              ],
            },
          },
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
        ],
      },
    };
  },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Saira:wght@400;600&display=swap');

@import "./scss/_variables.scss";

body {
  margin: 0;
}

.credits-app {
  font-family: $font-primary;
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
