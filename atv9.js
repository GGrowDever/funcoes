function calcularMedia(nota1, nota2, nota3, nome) {
	let media = (nota1 + nota2 + nota3) / 3;
	alert(`${nome}, sua média é ${media}`);
	console.log(`Nota 1 : ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}`);
}

calcularMedia(60, 70, 80, 'João');
