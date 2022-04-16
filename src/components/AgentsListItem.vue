<template>
  <router-link :to="`/agents/${uuid}`">
    <li class="agent" :data-name="displayName">
      <img class="icon" :src="displayIcon" alt="" />
    </li>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AgentsListItem',
  props: {
    displayIcon: { type: String, required: true },
    displayName: { type: String, required: true },
    uuid: { type: String, required: true },
  },
});
</script>

<style lang="scss" scoped>
.agent {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  overflow: hidden;
  background-color: #ff4654;
  border: 3px solid #ff8189ab;
  cursor: pointer;
  font-family: 'Tungsten-Bold';

  &:after {
    content: '';
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
    color: rgba(236, 232, 225, 0);
    font-size: 300px;
  }

  &:hover {
    &::after {
      content: attr(data-name);
      background: rgba(24, 33, 42, 0.9);
      font-weight: 600;
      font-size: 40px;
      line-height: 110%;
      color: rgba(236, 232, 225, 1);
    }
  }
}

.icon {
  width: inherit;
  height: inherit;
}
</style>
