<template>
  <img class="agentFullPortrait" :src="portrait" alt="" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AgentFullPortrait',
  props: { portrait: { type: String, required: true } },
});
</script>

<style lang="scss" scoped>
.agentFullPortrait {
  height: 110%;
  position: absolute;
  top: 0;
  right: 50%;
  transform: translate(60%);
  z-index: 10;
}
</style>
