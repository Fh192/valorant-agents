<template>
  <div class="agentBiography">
    <h3 class="label">// Biography</h3>
    <p class="description">{{ biography }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AgentDetailsBiography',
  props: { biography: { type: String, required: true } },
});
</script>

<style lang="scss" scoped>
.agentBiography {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: 'DINNextLTW04-Medium';
  font-weight: 400;
}

.label {
  text-transform: uppercase;
}

.description {
  line-height: 1.5;
}
</style>
