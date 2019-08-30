//input
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
	//console.log("capturado");
	function perona(name,sex,civil,age){
		this.name =name;
		this.sex = sex;
		this.civil = civil;
		this.age =age;
	}
	var nameCature = document.getElementById("name").value;
	var sexCature = document.getElementById("sex").value;
	var civilCature = document.getElementById("civil").value;
	var ageCature = document.getElementById("age").value;
	
	 newSubject = new perona(nameCature,sexCature,civilCature,ageCature);
	//console.log(newSubject);
	agregar();
}

var baseDatos= [];
function agregar(){
	baseDatos.push(newSubject);
	console.log(baseDatos);
}

guardar.addEventListener('click', GDatos);
