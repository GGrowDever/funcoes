function converter(segundos) {
	const horas = Math.floor(segundos / 3600);
	const minutos = Math.floor((segundos % 3600) / 60);
	const segundosRestantes = segundos % 60;

	return `${horas}:${minutos}:${segundosRestantes}`;
}

const tempoEmSegundos = 3672
const formatarTempo = converter(tempoEmSegundos);
console.log(`Tempo convertido: ${formatarTempo}`);
