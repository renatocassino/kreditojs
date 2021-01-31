import { createApp } from 'vue';
import Kreditoj from './Kreditoj.vue';
import './registerServiceWorker';

(window as any).screenplay = {
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
};

createApp(Kreditoj).mount('#app');
