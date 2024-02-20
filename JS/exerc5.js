function funcao () {
    const formulario = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    function recebeEventoFormulario (evento) {

        evento.preventDefault();

        const nome = formulario.querySelector('.nome');
        const sobrenome = formulario.querySelector('.sobrenome');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value

        });

        console.log(pessoas);

        resultado.innerHTML += `<p> Nome: ${nome.value}<br> Sobrenome: ${sobrenome.value}<br> Peso: ${peso.value}kg <br> Altura: ${altura.value}cm <br></p>`;
    }

    formulario.addEventListener('submit', recebeEventoFormulario);
}

funcao();