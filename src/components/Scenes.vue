<template>
  <component
    v-if="currentScene"
    :is="currentScene.componentName"
    v-bind="currentScene.props"
    :goToNextScene="goToNextScene"
  />
  <div v-else></div>
</template>

<script>
import { ref } from 'vue';
import * as components from './SceneComponents';
import FadeInfo from './FadeInfo.vue';

export default {
  components,
  props: {
    screenplay: Object,
  },
  setup(props) {
    const scenes = props.screenplay.scenes || [];
    const currentSceneId = ref(0);
    const currentScene = ref(scenes[0]);

    const goToNextScene = () => {
      currentScene.value = null; // Force remove component
      process.nextTick(() => {
        currentSceneId.value += 1;
        currentScene.value = scenes[currentSceneId.value];
      });
    };

    return {
      currentScene,
      goToNextScene,
    };
  },
};
</script>
