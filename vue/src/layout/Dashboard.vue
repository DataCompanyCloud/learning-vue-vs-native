<template>
  <div id="dashboard-layout" >
    <div id="dashboard-form">
      <div class="child-1"> 
        <c-input
          v-model="models.nome"
          label="NOME:"
          ex="Nome"
          type="text"
        />
     
        <c-input
          v-model="models.idade"
          label="IDADE:"
          ex="Idade"
          type="text"

        />

        <c-input
          v-model="models.prof"
          label="PROFISSÃO:"
          ex="Profissao"
          type="text"        
        />
        
        <c-button
          @c-click="addToListHandler()"
        >
          ADD
        </c-button>

      </div>

      <list-dashboard 
        :items="listItens"
        @delete="removeFromListHandler($event)"
      />
    </div>     
  </div>
  
</template>

<script lang="ts">
import { defineComponent, reactive, ref, Ref } from 'vue'
import CButton from '../components/core/CButton.vue'
import CInput from '../components/core/CInput.vue'
import ListDashboard from '../components/ListDashboard.vue'
import { nanoid } from 'nanoid'
import ListItem from '../type/ListItem'

export default defineComponent({
  components: { CInput, CButton, ListDashboard },
  setup(){       
    const listItens: Ref<ListItem[]> = ref([])
    const models = reactive({
      nome: '',
      idade: '',
      prof: ''
    })

    const addToListHandler = () => {
      if ( models.nome && parseInt(models.idade) && models.prof){
        listItens.value.push({
          id: nanoid(), 
          name: models.nome,
          age: parseInt(models.idade),
          profession: models.prof,
        })
        models.nome = '',
        models.idade = '',
        models.prof = ''
      }
    }
    
    const removeFromListHandler = (idList: string) => {
      // listItens.value = listItens.value.filter(item => item.id !== idList);
      const index = listItens.value.findIndex(item => item.id === idList)
      if (index >= 0) {
        listItens.value.splice(index, 1)
      }
    }

    return {
      models,
      listItens, 
      addToListHandler,
      removeFromListHandler
    }
  }
})
</script>

<style scoped>
  #dashboard-layout{
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(247, 243, 243);
  }

  #dashboard-form{
    display: flex;
    padding: 50px;
    box-shadow: 10px 10px 10px rgb(167, 167, 167);
    border-radius: 30px;
    background: white;
    min-width: 400px;
    flex-direction: column;
    gap: 20px;
  }

  .child-1{
    display: flex;
    gap: 50px;
    flex-direction: column;
  }
</style>