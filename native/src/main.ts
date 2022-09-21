import './style.css'
import { loadPage } from './layout/Dashboard'
import { ListProfissao } from './components/list'

const lista = new ListProfissao()
// lista.addContent('leonardo', 24, 'programador')
// lista.addContent('ferdinando', 22, 'programador')
// lista.addContent('rodrigo', 23, 'engenheiro madeira')

console.log(lista.content)

const app = document.querySelector('#app')
if (app != null){
  loadPage().then(component => { 
    app.innerHTML = component

    const botao = document.getElementById('botao')
    const listEl = document.getElementById('list')
    listEl?.appendChild(lista.content)

    botao?.addEventListener('click', () => {

      const inputs = document.querySelectorAll('.c1-input input') as NodeListOf<HTMLInputElement>

      const name = inputs[0]
      const age = inputs[1]
      const profession = inputs[2]
      
      console.log(parseInt(age.value))
      
      if (name.value && parseInt(age.value) && profession.value) {
        lista.addContent(name.value, parseInt(age.value), profession.value)
        name.value = ''
        age.value = ''
        profession.value = ''
      }
    })
  })
}
