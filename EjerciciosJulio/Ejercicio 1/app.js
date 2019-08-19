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
	var i = 0; 
	do{ 	
		name1[i] = nameC.value;
		sex1[i] = sexC.value;
		civil1[i] = civilC.value;
		age1[i] = ageC.values;
		i++;
		nameC.value = "";
		sexC.value = "";
		civilC.value = "";
		ageC.value = "";

		
	}while( i != 3);
	alert(name1+sex1+civil1+ageC);

}
guardar.addEventListener('click', GDatos);
