<template>
  <component
    :is="currentScene.componentName"
    v-bind="currentScene.props"
    :goToNextScene="goToNextScene"
  />
</template>

<script>
import { ref } from 'vue';
import Credits from './Credits.vue';
import FadeInfo from './FadeInfo.vue';

export default {
  components: {
    Credits,
    FadeInfo,
  },
  props: {
    screenplay: Object,
  },
  setup(props) {
    const scenes = props.screenplay.scenes || [];
    const currentSceneId = ref(0);
    const currentScene = ref(scenes[0]);

    const goToNextScene = () => {
      currentSceneId.value += 1;
      currentScene.value = scenes[currentSceneId.value];
    };

    return {
      currentScene,
      goToNextScene,
    };
  },
};
</script>
