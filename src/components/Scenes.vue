<template>
  <component
    v-if="currentScene"
    :is="currentScene.componentName"
    v-bind="currentScene.props"
    :goToNextScene="goToNextScene"
    :restart="restart"
  />
  <div v-else></div>
</template>

<script>
import { ref } from 'vue';
import * as components from './SceneComponents';

const restartComponent = {
  componentName: '_Restart',
};

export default {
  components,
  props: {
    screenplay: Object,
  },
  setup(props) {
    const scenes = props.screenplay.scenes || [];
    const currentSceneId = ref(0);
    const currentScene = ref(scenes[0]);

    const restart = () => {
      currentScene.value = null;
      process.nextTick(() => {
        currentSceneId.value = 0;
        currentScene.value = scenes[currentSceneId.value];
      });
    };

    const goToNextScene = () => {
      currentScene.value = null; // Force remove component
      process.nextTick(() => {
        currentSceneId.value += 1;

        if (currentSceneId.value >= scenes.length) {
          currentScene.value = restartComponent;
          return;
        }
        currentScene.value = scenes[currentSceneId.value];
      });
    };

    return {
      currentScene,
      goToNextScene,
      restart,
    };
  },
};
</script>
