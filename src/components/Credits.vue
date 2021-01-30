<template>
  <div ref="wrap" class="wrap">
    <div ref="content" class="content">
      Credits man<br />
      <div v-for="i in Array.from(Array(200).keys())" v-bind:key="i">
        {{i}} foi
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

const velocity = 1000;

export default {
  setup() {
    const content = ref(null);
    const wrap = ref(null);

    onMounted(() => {
      const divWrap = wrap.value;
      const divContent = content.value;

      divContent.style.height = `${divContent.scrollHeight}px`;
      divContent.style.transition = `${(divContent.scrollHeight / velocity) * 100}s transform linear`;
      divContent.style.transform = `translateY(-${divContent.scrollHeight + divWrap.scrollHeight}px)`;
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
  max-height: 100%;
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
    transform: translateY(100vh);
  }
}
</style>
