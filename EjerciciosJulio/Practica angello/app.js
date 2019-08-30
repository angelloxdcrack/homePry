var  btn1 = document.getElementById("Btn1"); 
var  btn2 = document.getElementById("Btn2"); 
var  btn3 = document.getElementById("Btn3"); 
var  btn4 = document.getElementById("Btn4"); 
var save = document.getElementById("Save");
var clear = document.getElementById("Clear");
var answer = document.getElementById("Answer");

function Save(){	
	var name = [];
	var sex =[];
	var age=[];
	var civil=[];
	var i=0;

do{
	    
			name[i] = document.getElementById("Name").value;
			sex[i] = document.getElementById("Sex").value;
			age[i] = document.getElementById("Age").value;
			civil[i] = document.getElementById("Civil").value;
		     i++;
		rpta=alert(confirm("Desea Continuar"));
		
		
  }while(rpta==0)	
		console.log(name,sex,age,civil);
}
function Clear(){
		var name = document.getElementById("Name");
		var sex = document.getElementById("Sex");
		var age = document.getElementById("Age");
		var civil = document.getElementById("Civil");
		name.value = "";
		sex.value = "";
		age.value = "";
		civil.value = "";
}
function BTN1(){
	var name  = ["Juan","Mafer","Julio","Maida","Cattia","Weiner","Sandy"];
	var canHM = 0;
	var canS = 0;
	for(var i=0; i < name.length ; i++){
		console.log(name[i]);
		console.log(sex[i]);
		console.log(age[i]);
		console.log(civil[i]);
		if(sex[i] == "M" && age[i] >= 18){
			canHM++;	
		}
		if(sex[i]== "M" && civil[i] == "S"){
			canS++;
		}
	}
	answer.value = "The number of man are: "+canHM +" And Singles are: "+canS;

}
function BTN2(){
	var name  = ["Juan","Mafer","Julio","Maida","Cattia","Weiner","Sandy"];
	var canMM = 0;
	var canSM = 0;
	for(var i = 0 ; i < name.length; i++){
		if(sex[i] == "F" && age[i] < 18){
			canMM++;
		}
		if(sex[i]== "F" && civil[i] == "S" ){
			canSM++;
		}
	}
	answer.value =canMM +"-"+canSM;
}
function BTN3(){
	var name  = ["Juan","Mafer","Julio","Maida","Cattia","Weiner","Sandy"];
	var totalC= 0;
	for(var i = 0 ; i < name.length;i++){
		if(age[i] >= 18 && civil[i] == "C" ){
			totalC++;
		}
	}
	answer.value = totalC;
}
function BTN4(){
	var name  = ["Juan","Mafer","Julio","Maida","Cattia","Weiner","Sandy"];
	var totalC = 0;
	for(var i = 0;i < name.length; i++){
		if(age[i] < 18 && civil[i] == "C"){
			totalC++;
		}
	}
	answer.value = totalC;
}


btn1.addEventListener('click',BTN1);
btn2.addEventListener('click',BTN2);
btn3.addEventListener('click',BTN3);
btn4.addEventListener('click',BTN4);
save.addEventListener('click',Save);
clear.addEventListener('click',Clear);

