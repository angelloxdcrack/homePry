var go = document.getElementById("Go");
var btn1 = document.getElementById("Btn1");
var btn2 = document.getElementById("Btn2");
var btn3 = document.getElementById("Btn3");
var btn4 = document.getElementById("Btn4");
function enviar(){
	var name = document.getElementById("Name").value;
	var sex = document.getElementById("Sex").value;
	var age = parseInt(document.getElementById("Age").value);
	var station = document.getElementById("CivilStation").value;
	function persona(name,sex,age,station){
		this.name = name;
		this.sex = sex;
		this.age = age;
		this.station = station;
	}
	newSubject = new persona(name,sex,age,station);
	//console.log(newSubject);
	guardar();
}
var BDatos=[];	
function guardar(){
	 BDatos.push(newSubject);
	 document.getElementById("tabla").innerHTML+='<tbody> <tr><td>'+newSubject.name+
														 '</td><td>'+newSubject.sex+
														 '</td><td>'+newSubject.age+
														 '</td><td>'+newSubject.station+
														 '</td></tr></tbody>';
}

function BTN1(){
	
for(var i = 0 ; i < BDatos.length; i++){
	 
}
}
btn1.addEventListener('click',BTN1);
go.addEventListener('click', enviar)
