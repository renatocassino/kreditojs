<template>
  <div ref="wrap" class="fade-wrap">
    <slot></slot>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import Title from './Title.vue';

export default {
  props: {
    goToNextScene: Function,
  },
  setup(props) {
    const wrap = ref(null);
    onMounted(() => {
      wrap.value.style.animation = 'fading 4s forwards';
      wrap.value.addEventListener('animationend', () => {
        props.goToNextScene();
      });
    });

    return {
      wrap,
    };
  },
};
</script>

<style lang="scss">
@keyframes fading {
  0% { opacity: 0; }
  10% { opacity: 1 }
  90% { opacity: 1; }
  100% { opacity: 0; }
}

.fade-wrap {
  color: #fff;
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
</style>
