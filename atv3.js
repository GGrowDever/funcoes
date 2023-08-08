function ehPrimo(number) {
	if (number <= 1) {
		return false;
	}

	for (let i = 2; i <= Math.sqrt(number); i++) {
		if (number % i == 0) {
			return false;
		}
	}

	return true;
}

const digitarNumero = prompt('Digite um número inteiro e positivo:');
const resultado = ehPrimo(parseInt(digitarNumero));

if (resultado) {
	document.write(digitarNumero + ' é um número primo.');
} else {
	document.write(digitarNumero + ' não é um número primo.');
}
