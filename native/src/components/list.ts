export class ListProfissao {
  public content: HTMLElement;
  public items: { nome: string, idade: number, prof: string }[]
  public alreadyInDOM: Record<number, boolean> = {}

  constructor () {
    this.content = document.createElement('div')
    this.items = []
  }
   
  public addContent (nome: string, idade: number, prof: string): void {
    this.items.push({ nome, idade, prof })
    this.render(this.items.length - 1)
  }

  public async render (index: number) {
    if (!this.alreadyInDOM[index]) {
      this.alreadyInDOM[index] = true
      const item = this.items[index]
      const component = await fetch('list-item.html')

      const elItemList = document.createElement('div')      
      elItemList.innerHTML = await component.text() 
      elItemList.querySelectorAll('[type]').forEach(itemEl => {
        if (itemEl.getAttribute('type') === 'nome') {
          itemEl.innerHTML = item.nome
        }
        if (itemEl.getAttribute('type') === 'idade') {
          itemEl.innerHTML = item.idade.toString()
        }
        if (itemEl.getAttribute('type') === 'prof') {
          itemEl.innerHTML = item.prof
        }
      })

      this.content.append(elItemList.firstChild ?? '')
    }
  }
}

