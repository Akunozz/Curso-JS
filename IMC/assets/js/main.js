const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputPeso = document.querySelector('#peso');
  const inputAltura = document.querySelector('#altura');

  const peso = parseFloat(inputPeso.value.replace(',', '.'));
  const altura = parseFloat(inputAltura.value.replace(',', '.'));

  if (!peso || isNaN(peso)) {
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura || isNaN(altura)) {
    setResultado('Altura inválida', false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc.toFixed(2)} (${nivelImc}).`;

  setResultado(msg, true);
});

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

function getNivelImc(imc) {
  if (imc < 18.5) return 'Abaixo do peso';
  if (imc < 24.9) return 'Peso normal';
  if (imc < 29.9) return 'Sobrepeso';
  if (imc < 34.9) return 'Obesidade grau 1';
  if (imc < 39.9) return 'Obesidade grau 2';
  return 'Obesidade grau 3';
}

function criaP() {
  const p = document.createElement('p');
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.textContent = msg;
  resultado.appendChild(p);
}
