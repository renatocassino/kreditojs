<template>
  <div ref="wrap" class="fade-wrap">
    Lorem ipsum
    <slot></slot>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  props: {
    goToNextScene: Function,
  },
  setup(props) {
    const wrap = ref(null);
    onMounted(() => {
      wrap.value.style.animation = 'fading 5s forwards';
      wrap.value.addEventListener('animationend', () => {
        console.log('done animation. Go to next scene');
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
  20% { opacity: 1 }
  80% { opacity: 1; }
  100% { opacity: 0; }
}

.fade-wrap {
  color: #fff;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
