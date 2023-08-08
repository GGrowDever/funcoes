function calcularMedia(nota1, nota2, nota3, letra) {
	letra = letra.toUpperCase();
	let media;
	const peso1 = 5;
	const peso2 = 3;
	const peso3 = 2;
	const peso4 = peso1 + peso2 + peso3;

	if (letra == 'A') {
		return (nota1 + nota2 + nota3) / 3;
	}
	 if (letra == 'P') {
		return (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / peso4;
	}

		return "Letra inválida! Digite 'A' para média aritmética ou 'P' para média ponderada.";
	
}

let nota1 = Number(prompt('Digite a primeira nota:'));
let nota2 = Number(prompt('Digite a segunda nota:'));
let nota3 = Number(prompt('Digite a terceira nota:'));
let letra = prompt('Digite A para média aritmética ou P para média ponderada:');

let media = calcularMedia(nota1, nota2, nota3, letra);
document.write('A média do aluno é:', media);
