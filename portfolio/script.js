
function enviarWhats(event){
    event.preventDefault()

    const nome = document.getElementById('text-nome').value;
    const msg = document.getElementById('text-msg').value;
    const telefone = '5531987097928'

    const texto = `Olá tudo beleza? meu nome e ${nome}, ${msg}`

    const msgFormatada = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`

    window.open(url, '_blank')
}