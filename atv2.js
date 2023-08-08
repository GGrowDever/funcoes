function num() {
	const numero = parseInt(prompt('Digite um número inteiro: '));
	if (numero % 2 === 0) {
		return 'False';
	} else {
		return 'Verdadeiro';
	}
}

let resultado = num();
document.write(resultado);
