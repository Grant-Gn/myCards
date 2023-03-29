let lsfCardsList = [];
function createCard () {
	const createdCard = {};
	createdCard.frenchWord = prompt('French word :');
	createdCard.dexterPos = prompt('Dominant hand initial position:');
	createdCard.sinisterPos = prompt('Secondary hand initial position:');
	createdCard.dexterBeha = prompt('Dominant hand behavior:');
	createdCard.sinisterBeha = prompt('Secondary hand behavior:');
	lsfCardsList.push(Object.values(createdCard));		 
}


document.addEventListener('DOMContentLoaded', function () {
	const createCardBtn = document.getElementById('new-card-button');
	createCardBtn.addEventListener('click', function() {
		createCard ();
		//document.getElementById("french-word").innerHTML = lsfCardsList[createdCard]
	})
	const displayListBtn = document.getElementById('display-list-button');
	displayListBtn.addEventListener('click', function() {
		displayList ();
	})
})

function displayList () {
	document.getElementById("dictionnary").innerHTML = lsfCardsList;
}
