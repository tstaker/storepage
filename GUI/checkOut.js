var total = localStorage.getItem("total");

function printTotal(){
	var display = document.getElementById("cart");
	display.innerHTML += total;
}
function moneyFormat(x){
	var money = (x).toLocaleString('en-US', {style:'currency', currency: 'USD',});
	return money;
}
function verify(){
	var cardNum = /^\(?([0-9]{4})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
	var select = document.getElementById("cardType").value;
	var card = document.getElementById("cardNum").value;
	
	if(card.match(cardNum) && select != "select"){
		window.location.href = "./thankYou.html";
	}
	else{
		alert("Your card number was incorrect, or you did not select a type");
	}
}