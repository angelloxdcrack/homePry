//input
var name = document.getElementById("name");
var sex = document.getElementById("sex");
var civil = document.getElementById("civil");
var age = document.getElementById("age");
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
	var prueba = name.value;
	res.value(prueba);
}
function GDatos(){
	var name1 = [];
	var sex1 = [];
	var civil1 = [];
	var age1 = [];
	for(var i = 0 ; i > 5 ; i++ ){
		
	}

}

guardar.addEventListener('click', prueba);
