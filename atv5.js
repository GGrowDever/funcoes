function perfectNumbers() {
	let sum = 0;
	for (let i = index; i > 0; i--) {
		if (index % i === 0) {
			sum += i;
		}
	}
	if (sum - index === index) {
		vector.push(index);
		perfectNumbers++;
	}
}
console.log();