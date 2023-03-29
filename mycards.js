function createCard () {
	let frenchWord = prompt('French word :');
	let dexterPos = prompt('Dominant hand initial position:');
	let sinisterPos = prompt('Secondary hand initial position:');
	let dexterBeha = prompt('Dominant hand behavior:');
	let sinisterBeha = prompt('Secondary hand behavior:');
}


/*let lsfSign = '{"lsfSign" : [' +
'{"frenchWord":"Signer", "dexterPos":"Griffe", "sinisterPos":"Griffe", "dexterBeha":"blup", "sinisterBeha":blup"},' +
'{"frenchWord":"Aimer", "dexterPos":"Moufle", "sinisterPos":"NA", "dexterBeha":"Donne son coeur", "sinisterBeha":blup"}]}';

const obj = JSON.parse(lsfSign);
document.getElementById("dictionnary").innerHTML =obj.lsfSign[1].frenchWord + " " + obj.lsfSign[2].frenchWord;
*/

document.addEventListener('DOMContentLoaded', function () {
	const createCardBtn = document.getElementById('new-card-button');
	createCardBtn.addEventListener('click', function() {
		createCard ();
	})
})

/*document.querySelector('new-card-button').addEventListener('click', (event) => {
	createCard ();
})*/