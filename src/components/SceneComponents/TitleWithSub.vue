<template>
  <fade-info :goToNextScene="goToNextScene">
    <div>
      <div class="title">{{title}}</div>
      <div class="subtitle">{{subtitle}}</div>
    </div>
  </fade-info>
</template>

<style lang="scss" scoped>
.title {
  font-size: 30px;
}

.subtitle {
  font-size: 60px;
}
</style>

<script>
import FadeInfo from '../FadeInfo.vue';

export default {
  components: {
    FadeInfo,
  },
  props: {
    goToNextScene: Function,
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
};
</script>
