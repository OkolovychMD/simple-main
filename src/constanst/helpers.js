export function smoothOutput(text, onData) {
	return new Promise((resolve) => {
		const chunkSize = 3
		let index = 0;

		function outputNextChunk() {
			if (index < text.length) {
				const nextChunk = text.slice(index, index + chunkSize);
				onData(nextChunk);
				index += chunkSize;
				setTimeout(outputNextChunk, 10);
			} else {
				resolve();
			}
		}

		outputNextChunk();
	});
}

export const getRandomIntRange = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


export const paginationModel = { page: 0, pageSize: 10 };
