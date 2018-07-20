//Alternating Character
function alterNatingChar(str) {
	let deleteCount = 0;
	let newStr = Array.from(str);
	for (let i = 0; i < newStr.length - 1; i++) {
		if (newStr[i] === newStr[i + 1]) {
			deleteCount++;
		}
	}
	console.log(deleteCount);
}
alterNatingChar('ABBABBAA');