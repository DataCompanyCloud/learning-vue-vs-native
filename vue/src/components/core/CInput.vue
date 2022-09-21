<template>
   <div class="c1-input">
    <label> {{ label }} </label>    
    <input 
      :value="modelValue"
      :placeholder="ex" 
      :type="type"
      @input="onInputHandler($event)"
    >

  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    modelValue:{
      type: String,
      required: true
    },
    type:{
      type: String as PropType<'text' | 'password' | 'number'>,
      default: 'text'
    },
    label: {
      type: String,
      required: false
    },
    ex: {
      type: String,
      required: false
    }
  },
  emits: ['update:modelValue'],
  setup (props, {emit}) {

    const onInputHandler = (event: Event) => {      
      if (event.target instanceof HTMLInputElement) {
        const text  = event.target.value        
        return emit('update:modelValue', text)
      } else {
        throw new Error('Only input')
      }
    }

    return {
      onInputHandler
    }
  }
})
</script>

<style scoped>

.c1-input{
  display: flex;
  flex-direction: column;
}

.c1-input input{
  padding: 10px;
}

</style>