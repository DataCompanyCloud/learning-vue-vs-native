<template>
  <div class="father">
    <div 
      v-for="item in items"
      :key="item.id"
      class="c2-list"
    >
      <div class="c2-list-itens">
        <div class="c2-list-item">{{ item.name }}</div>

        <div class="c2-list-item"> {{ item.age }}</div>
        
        <div class="c2-list-item">{{ item.profession }}</div>
      </div>

      <div class="c2-list-delete">
        <button @click="onClickHandler(item.id)" class="c2-list-item-button">X</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ListItem from '../type/ListItem'

export default defineComponent ({
  emits:['delete'],
  props: {
    items: {
      type: Array as PropType<Array<ListItem>>,
      required: true
    }
  },
  setup (_,{ emit }){

    const onClickHandler = (idList: string) => {
      emit('delete', idList)
    }

    return {
      onClickHandler
    }

  }
})
</script>

<style scoped>

.father{
  display: flex;
  gap: 10px;
  flex-direction: column;
}

.c2-list{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 2px solid black;
  padding: 10px;
  /* user-select: none; */
}

.c2-list-itens{
  display:flex; 
  flex: 1; 
  flex-direction: row; 
  justify-content: space-around;
  align-items: center;
}

.c2-list-delete{
  width: 50px;
  height:50px
}

.c2-list-item-button{
  height: 100%;
  width: 100%;
}

</style>