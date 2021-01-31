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
        subtitle: 'Kevin Aldric',
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
