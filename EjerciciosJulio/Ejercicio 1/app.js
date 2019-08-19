//input
var nameC = document.getElementById("name");
var sexC = document.getElementById("sex");
var civilC = document.getElementById("civil");
var ageC = document.getElementById("age");
//botons
var guardar = document.getElementById("guardar");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
//answer
var res = document.getElementById("res");
//functions
function prueba(){
	res.value = nameC.value;
}

function GDatos(){
	var name1 = [];
	var sex1 = [];
	var civil1 = [];
	var age1 = [];
	
	name1[0].value = nameC.value;
	sex1[0].value = sexC.value;
	civil1[0].value = civilC.value;
	age1[0].value = age1.values;

	document.write(name1[0],sex1[0],civil1[0],age1[0]);

	
}

guardar.addEventListener('click', GDatos);
