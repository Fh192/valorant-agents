<template>
  <div class="agentRole">
    <h3 class="label">// Role</h3>
    <div class="role">
      <h2 class="title">{{ displayName }}</h2>
      <img class="icon" :src="displayIcon" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AgentDetailsRole',
  props: {
    displayIcon: { type: String, required: true },
    displayName: { type: String, required: true },
  },
});
</script>

<style lang="scss" scoped>
.agentRole {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.label {
  font-family: 'DINNextLTW04-Medium';
  text-transform: uppercase;
  font-weight: 400;
  font-size: 16px;
}

.role {
  display: flex;
  align-items: flex-start;
  gap: 5px;
}

.title {
  text-transform: uppercase;
  font-size: 64px;
}

.icon {
  width: 30px;
  height: 30px;
}
</style>
