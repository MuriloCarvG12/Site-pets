
document.addEventListener('DOMContentLoaded', Displaypets)

function deletar(idRecebido){
    // 1 -  ir no local e busca o array de pets
     const petsAtuaisNaMemoria = JSON.parse(localStorage.getItem('pets'))
     const petsFiltrados =  petsAtuaisNaMemoria.filter((item) => item.id !== idRecebido  )
  
     localStorage.setItem('pets', JSON.stringify(petsFiltrados))
  
     document.getElementById('lista-pets').innerText = ''
     carregarDados()
}

function Displaypets()
{
const lista = document.getElementById('Post-Listagem')

const PetsArmazenados = JSON.parse(localStorage.getItem('Pets'))

PetsArmazenados.forEach((pet) => {
    


const body = document.createElement('div')

body.classList.add("Post-Item")


const h2 = document.createElement('h2')
const image = document.createElement('img')
const description = document.createElement('p')
const tipo = document.createElement('p')

h2.innerText = pet.Nome
tipo.innerText = pet.tipo

description.innerText = pet.Descricao

image.setAttribute("width", "200px")
image.setAttribute("height", "200px")
image.setAttribute('src', pet.Url)

const button = document.createElement('button')
button.innerText = "Deletar"
button.onclick = () => deletar(pet.id)

    



lista.append(body)



body.append(h2)

body.append(image)

body.append(description)

body.append(button)


});
}
