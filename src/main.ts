import { createApp } from 'vue';
import Kreditojs from './Kreditojs.vue';
import './registerServiceWorker';

(window as any).screenplay = {
  scenes: [
    {
      componentName: 'Credits',
      props: {
        components: [
          {
            componentName: 'Text',
            props: {
              text: 'Alguma coisa de rodapé e assinatura para quando necessário, alguma coisa de rodapé e assinatura para quando necessário, alguma coisa de rodapé e assinatura para quando necessário, alguma coisa de rodapé e assinatura para quando necessário.',
              type: 'multiline',
            },
          },
          {
            componentName: 'Text',
            props: {
              text: 'Other important mentions',
              type: 'title',
            },
          },
          {
            componentName: 'Space',
            props: {
              size: 'medium',
            },
          },
          {
            componentName: 'ListColumns',
            props: {
              columns: 2,
              lines: [
                'Mat Robert',
                'Andrew Macfeller',
                'Mine Laboras',
                'Sunosun Labaril',
                'Planex Space',
              ],
            },
          },
          {
            componentName: 'Space',
            props: {
              size: 'large',
            },
          },
          {
            componentName: 'Text',
            props: {
              text: 'Cast',
              type: 'title',
            },
          },
          {
            componentName: 'Space',
            props: {
              size: 'medium',
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
            componentName: 'Space',
            props: {
              size: 'large',
            },
          },
          {
            componentName: 'Text',
            props: {
              text: 'External Support',
              type: 'title',
            },
          },
          {
            componentName: 'Space',
            props: {
              size: 'medium',
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

createApp(Kreditojs).mount('#app');
