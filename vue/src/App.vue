<template>
  <Dashboard />
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import Dashboard from './layout/Dashboard.vue';

export default defineComponent({
  components : { Dashboard },
  setup (){

  }
})
 
</script>


<style>
*{
  padding: 0;
  margin: 0;
}
</style>