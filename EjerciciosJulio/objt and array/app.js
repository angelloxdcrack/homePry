var go = document.getElementById("Go");
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
	 console.log(BDatos);
	 document.getElementById("tabla").innerHTML+='<tbody> <tr><td>'+newSubject.name+
														 '</td><td>'+newSubject.sex+
														 '</td><td>'+newSubject.age+
														 '</td><td>'+newSubject.station+
														 '</td></tr></tbody>';
}
	
go.addEventListener('click', enviar)
