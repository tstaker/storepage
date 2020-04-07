
var products = [
	{"name":"Apple",
	"type":"fruit",
	"price":2},
	
	{"name":"Banana",
	"type":"fruit",
	"price":1},
	
	{"name":"Beef",
	"type":"meat",
	"price":5},
	
	{"name":"Celery",
	"type": "vegetable",
	"price":2},
	
	{"name":"Cheese",
	"type":"dairy",
	"price":3},
	
	{"name":"Chicken",
	"type":"meat",
	"price":4},

	{"name":"Chips",
	"type":"other",
	"price":3},
	
	{"name":"Coffee",
	"type":"drink",
	"price":3},
	
	{"name":"Milk",
	"type":"dairy",
	"price":4},
	
	{"name":"Pork",
	"type":"meat",
	"price":4},
		
	{"name":"Potato",
	"type":"vegetable",
	"price":2},
		
	{"name":"Soda",
	"type":"drink",
	"price":2}
	
];
var cart = [];
function products(){
	products.forEach(generateNameAndPrice);
}

function getType(x){
	return products[x].type;
}

function addToCart(x){
	var item = products[x];
	cart.push({name: item.name, price: item.price});
}
function checkOut(){
	
}
function moneyFormat(x){
	var item = products[x-1];
	var money = (item.price).toLocaleString('en-US', {style:'currency', currency: 'USD',});
	return money;
}
function noArrayFormat(x){
	var money = (x).toLocaleString('en-US', {style:'currency', currency: 'USD',});
	return money;
}

function generateNameAndPrice(x){
	var item = products[x-1];
	document.getElementById("itemName" + x).innerHTML = item.name;
	document.getElementById("itemName" + x).style.fontSize = "xx-large";
	var price = moneyFormat(x);
	document.getElementById("itemPrice" + x).innerHTML = price;
	document.getElementById("itemPrice" + x).style.fontSize = "xx-large";
}

function checkOut(){
	window.location.href = "./checkOut.html";
}



function getCart(){
	var itemDisplay = '';
	var totalDisplay = '';
	var total = 0;
	for(var i = 0;i<cart.length;++i){
		var item = cart[i];
			itemDisplay += "<p>" + item.name + " - " + item.price + "</p>" + "<br>";
			total += item.price;
		}
	totalDisplay = noArrayFormat(total);
	itemDisplay += "Total: " + totalDisplay;
	document.getElementById("cart").innerHTML = itemDisplay;
	
}

