var minion1 = document.getElementById('minion1');
var minion2 = document.getElementById('minion2');
var minion3 = document.getElementById('minion3');
var level = 1
var result = 0
var myTimer; 




function start(){
	document.getElementById('overlay').style.display = 'none';
	document.getElementById('startGame').style.display = 'none';
	grow(); 
}

function grow(){
	myTimer = setTimeout (function(){
	minion1.style.height = minion1.offsetHeight + 30 + 'px';
	minion2.style.height = minion2.offsetHeight + 30 + 'px';
	minion3.style.height = minion3.offsetHeight + 30 + 'px';
		if(minion1.offsetHeight == 620 || minion2.offsetHeight == 620 || minion3.offsetHeight == 620)
		{
			lose();
			return false;
		}
	grow();
	},1000 / level)
		
}


function smash(minion){
		result = result + 1;
		document.getElementById('result').innerText = "Rezultatas: " + result;
	if (result % 10 == 0) {
		level = level + 1;
		document.getElementById('level').innerText = "Level: " + level;
	}
	var gnom = document.getElementById(minion);
	gnom.style.height = "200px";

	}

function lose (){
	clearTimeout(myTimer);	
	document.getElementById('overlay').style.display = 'block';
	document.getElementById('lostGame').style.display = 'block';
	document.getElementById('lostResult').innerText = result;
}
function reset (){
	document.getElementById('overlay').style.display = "none";
	minion1.style.height = "200px";
	minion2.style.height = "200px";
	minion3.style.height = "200px";
	result =  0;
	level = 1;
	document.getElementById ('result').innerText = "Rezultatas: 0";
	document.getElementById ('level').innerText = "Level: 1";
	grow();
}
