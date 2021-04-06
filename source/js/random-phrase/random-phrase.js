const firstNames = ["Hope", "Launa", "Katherine", "Walker", "Moses", "Tayna", "Rosia", "Yahaira", "Tommy", "Elwanda", "Clorinda", "Sheron", "Kayla", "Clementina", "Rene", "Rex", "Kathy", "Latoya", "Shirleen", "Shoshana"];



const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () => 
  `${firstNames[getRandomNumber(firstNames.length)]}`;

setInterval(function() {
	document.getElementById('random-phrase').innerText = getRandomName();
}, 5000);