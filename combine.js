//TASK 1

function dis(num){
	var input=document.getElementById("input");
	switch(num){
		case 1:
		    input.val+='1';
		    break;
		case 2:
		    input.val+='2';
		    break;
		case 3:
		    input.val+='3';
		    break;
		case 4:
		    input.val+='4';
		    break;
		case 5:
		    input.val+='5';
		    break;
		case 6:
		    input.val+='6';
		    break;
		case 7:
		    input.val+='7';
		    break;
		case 8:
		    input.val+='8';
		    break;
		case 9:
		    input.val+='9';
		    break;
		case 0:
		    input.val+='0';
		    break;
	}
}
function getOperand(operand) {
	var input = document.getElementById("input");
	switch(operand){
		case '+':
		   input.val+='+';
		   break;
		case '-':
		   input.val+='-';
		   break;
		case 'x':
		   input.val+='x';
		   break;
		case '/':
		   input.val+='/';
		   break;
		case 'abs':
		   input.val+='abs';
		   break;
		case 'sqrt':
		   input.val+='sqrt';
		   break;
		case '%':
		   input.val+='%';
		   break;
	}
}
function clr(){
	document.getElementById("input").value="";
	document.getElementById("ans").value="";
}
function solve(){
	var input=document.getElementById('input');
	ans= Math.floor(+eval(input.value));
	document.getElementById('ans').value = '=' +ans;
}

//TASK 2

function validation(){
	var name = document.getElementById("name").value;
	var number = document.getElementById("number").value;
	var email = document.getElementById("email").value;
	if(name==''){
		alert("Please provide your Name");
		return false;
	}
	if(name[0]=='/^[0-9]+$/'){
		alert("Please enter valid Name");
		return false;
	}
	if(number==''){
		alert("Please provide your Number");
		return false;
	}
	if (isNaN(number) || number.length !=10) {
		alert("Please enter valid number");
		return false;
	}
	if (number=/^[a-zA-Z]+$/) {
		alert("Please enter valid number");
		return false;
	}
	if(email==''){
		alert("Please provide your Email");
		return false;
	}
	if (email.indexOf("@")==-1 && email.indexOf(".")==-1) {
		alert("Please enter valid email");
		return false;
	}
	return true;
}

//TASK 3

function palindrome(){
	var string =document.getElementById('string').value;
	if(string==''){
		alert("Please provide a string");
		return false;
	}
	var i;
	var length=string.length;
	var len=(length/2);
	for(i=0; i<len; i++){
		if (string[i] !=string[length-i-1]) {
			alert("Not a PALINDROME!!!");
			return false;
		}
	}
	alert("It is a PALINDROME!!!");
	return true;
}

function anagram(){
	var str =document.getElementById('str').value;
	var word =document.getElementById('word').value;
	if(str==''){
		alert("Please provide a string");
		return false;
	}
	if(word==''){
		alert("Please provide a word");
		return false;
	}
	str = str.replace(/[^\W]/g, '').toLowerCase();
	word = word.replace(/[^\W]/g, '').toLowerCase();
	str=str.split('').sort().join('');
	word=word.split('').sort().join('');
	if (str===word) {
		return true;
	}
	else{
		return false;
	}
}

//TASK 4

function game(){
	var first= document.getElementById('first').value;
	var second= document.getElementById('second').value;
	first = first%3; 
	second = second%3; 
	if(first==second){
		alert("TIE");
	}
	elif(first==0 && second==1){
		alert("HUMAN SURVIVES");
	}
	elif(first==1 && second==2){
		alert("COCKROACH SURVIVES");
	}
	elif(first==0 && second==2){
		alert("HUMAN DIES");
	}
}

// BONUS QUESTION

function calculate(){
	var amount= document.getElementById('first_box').value;
	var from= document.getElementById('second_box').value;
	var to= document.getElementById('third_box').value;

	if(amount==''){
		alert("Please provide an amount");
		return false;
	}

	if(from==''){
		alert("Please provide currency");
		return false;
	}

	if(to==''){
		alert("Please provide currency");
		return false;
	}
	
	fetch('https://free.currconv.com/api/v7/convert?q=USD_INR&compact=ultra&apiKey=ecd96f38ab9cbbe978b7')
		.then(res => res.json())
		.then(res => {
		const rate = res.rates[to];
		rate.innerText = `1 ${from_currency} = ${rate} ${to}`
		to = (ammount * rate).toFixed(3);
		alert(to);
	})
}