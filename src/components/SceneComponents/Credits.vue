<template>
  <div ref="wrap" class="wrap">
    <div ref="content" class="content">
      <component
        v-for="component in components"
        v-bind:key="JSON.stringify(component)"
        v-bind="component.props"
        :is="component.componentName"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { secondsPerNumberOfPixels } from '@/helpers/sliderCalcs';
import * as components from '../atomic';

const pixelsPerSeconds = 60;

export default {
  components,
  props: {
    goToNextScene: Function,
    components: {
      type: Array,
    },
  },
  setup(props) {
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
      const animationSeconds = secondsPerNumberOfPixels(distanceToRoll, pixelsPerSeconds);
      divContent.style.transition = `${animationSeconds}s transform linear`;
      divContent.style.transform = `translateY(-${endPosition}px)`;

      setTimeout(() => {
        props.goToNextScene();
      }, parseInt(animationSeconds * 1000, 10));
    });

    return {
      content,
      wrap,
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
