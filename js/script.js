const span = document.querySelector('span')
const ul = document.querySelector('ul')

span.addEventListener('click', function () {
  if (ul.style.display !== 'flex') {
    ul.style.display = 'flex'
  } else {
    ul.style.display = ''
  }
})

// const conteudo_drop = document.getElementById("conteudo-drop")
// const promoçoes = document.getElementById("promoçoes")

// const processador = document.getElementById("processador")
// const placadevideo = document.getElementById("placadevideo")
// const memoria = document.getElementById("memoria")


// processador.addEventListener('click', function () {
//     promoçoes.style.display = "none"
// })

