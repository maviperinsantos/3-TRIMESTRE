// cria referência ao form e ao elemento h3 (onde será exibida
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
const nome = frm.inNome.value // obtém o nome digitado no for
resp.innerText = `Olá, ${nome}` // exibe a resposta do progra
e.preventDefault() // evita envio do form
})