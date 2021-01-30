<template>
  <div ref="wrap" class="wrap">
    <div ref="content" class="content">
      <Title>Cast</Title>
      <centered-data :values="values" />

      <Title>External Support</Title>

      <div>Jovani Jerde</div>
      <div>Raheem Hoeger</div>
      <div>Alec Runte</div>
      <div>Wolf Raynor</div>
      <div>Edgardo Lang</div>
      <div>Garnett Marquis</div>
      <div>Maverick Fay</div>
      <div>Murray Mossie Route</div>
      <div>Demond Schimmel</div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Title from '@/components/Title.vue';
import CenteredData from '@/components/CenteredData.vue';
import { secondsPerNumberOfPixels } from '@/helpers/sliderCalcs';

const pixelsPerSeconds = 60;

export default {
  components: {
    Title,
    CenteredData,
  },
  setup() {
    const content = ref(null);
    const wrap = ref(null);

    onMounted(() => {
      const divWrap = wrap.value;
      const divContent = content.value;

      const endPosition = divContent.scrollHeight + divWrap.scrollHeight;
      const startPosition = divWrap.scrollHeight;
      const distanceToRoll = startPosition + endPosition;

      divContent.style.transform = `translateY(${startPosition}px)`;
      console.log(divWrap.scrollHeight);
      divContent.style.opacity = 1;
      divContent.style.transition = `${secondsPerNumberOfPixels(distanceToRoll, pixelsPerSeconds)}s transform linear`;
      divContent.style.transform = `translateY(-${endPosition}px)`;
    });

    return {
      content,
      wrap,
      values: [
        ['Design', ['Felipe Luize', 'Anna Waack']],
        ['Development', ['Renato Cassino', 'Igor Canedo', 'Lages', 'João Paulo']],
        ['Sound Producer', 'Molla (Carlos Cassino)'],
        ['P.O.', 'Juliana Soraes'],
        ['S.M.', 'Lilian'],
        ['Python GOD', 'Alen'],
        ['Dess Code Reference', 'Gustav'],
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$sizeOfBackground: 30vh;

.wrap {
  position: relative;
  height: 100%;
  overflow: hidden;

  &::before {
    background: -moz-linear-gradient(top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
    background: -webkit-linear-gradient(top, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%);
    background: linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000',
      endColorstr='#00000000',GradientType=0 );

    content: '';
    width: 100%;
    height: $sizeOfBackground;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
  }

  &::after {
    background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
    background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000',
      endColorstr='#00000000',GradientType=0 );

    content: '';
    width: 100%;
    height: $sizeOfBackground;
    position: absolute;
    top: calc(100vh - #{$sizeOfBackground});
    left: 0;
    z-index: 999;
  }

  .content {
    opacity: 0;
  }
}
</style>
