<template>
  <div class="c1-button">   
    <button @click="onClickHandler()" class="botao">
      <slot />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['c-click'],
  setup (_, { emit }) {

    const onClickHandler = () => emit('c-click')

    return {
      onClickHandler
    }
  }  
})
</script>

<style scoped>

.c1-button{
  display: flex;
  justify-content: right;

}

.botao{
  padding: 10px 20px;
}

</style>