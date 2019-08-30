var go = document.getElementById("Go");
function enviar(){
	var name = document.getElementById("Name").value;
	var age = document.getElementById("Age").value;
	function persona(name,age){
		this.name = name;
		this.age = age;
	}
	newSubject = new persona(name,age);
	//console.log(newSubject);
	guardar();
}
var BDatos=[];	
function guardar(){
	 BDatos.push(newSubject);
	 console.log(BDatos);
}
	
go.addEventListener('click', enviar)
