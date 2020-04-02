
var products = [
	{"name":"Apple",
	"type":"fruit",
	"price":"$2.00"},
	
	{"name":"Banana",
	"type":"fruit",
	"price":"$1.00"},
	
	{"name":"Beef",
	"type":"meat",
	"price":"$5.00"},
	
	{"name":"Celery",
	"type": "vegetable",
	"price":"$2.00"},
	
	{"name":"Cheese",
	"type":"dairy",
	"price":"$3.00"},
	
	{"name":"Chicken",
	"type":"meat",
	"price":"$4.00"},

	{"name":"Chips",
	"type":"other",
	"price":"$3.00"},
	
	{"name":"Coffee",
	"type":"drink",
	"price":"$3.00"},
	
	{"name":"Milk",
	"type":"dairy",
	"price":"$4.00"},
	
	{"name":"Pork",
	"type":"meat",
	"price":"$4.00"},
		
	{"name":"Potato",
	"type":"vegetable",
	"price":"$2.00"},
		
	{"name":"Soda",
	"type":"drink",
	"price":"$2.00"}
	
];
var cart = [
	{"name": null,
	"type":null,
	"price":null}
];
function products(){
	products.forEach(generateNameAndPrice);
}

function getType(x){
	return products[x].type;
}

function addToCart(x){
	cart.push(products[x-1]);
}
function checkOut(){
	
}

function generateNameAndPrice(x){
	var item = products[x-1];
	document.getElementById("itemName" + x).innerHTML = item.name;
	document.getElementById("itemName" + x).style.fontSize = "xx-large";
	document.getElementById("itemPrice" + x).innerHTML = item.price;
	document.getElementById("itemPrice" + x).style.fontSize = "xx-large";
}
