
var products = [
	{"name":"apple",
	"type":"fruit",
	"price":"$2.00"},
	
	{"name":"banana",
	"type":"fruit",
	"price":"$1.00"},
	
	{"name":"potato",
	"type":"vegetable",
	"price":"$2.00"},
	
	{"name":"celery",
	"type": "vegetable",
	"price":"$2.00"},
	
	{"name":"coffee",
	"type":"drink",
	"price":"$3.00"},
	
	{"name":"soda",
	"type":"drink",
	"price":"$2.00"},
	
	{"name":"beef",
	"type":"meat",
	"price":"$5.00"},
	
	{"name":"chicken",
	"type":"meat",
	"price":"$4.00"},
	
	{"name":"pork",
	"type":"meat",
	"price":"$4.00"},
	
	{"name":"chips",
	"type":"other",
	"price":"$3.00"},

	{"name":"cheese",
	"type":"dairy",
	"price":"$3.00"},
	
	{"name":"milk",
	"type":"dairy",
	"price":"$4.00"}
	
];
var cart = [
	{"name": null,
	"type":null,
	"price":0}
];
function products(){
	products.forEach(generateNameAndPrice);
}
function getName(x){
	return products[x].name;
}
function getType(x){
	return products[x].type;
}
function getPrice(x){
	return products[x].price;
}

function addToCart(x){
	cart.push(products[x]);
}
function generateNameAndPrice(x){
	document.getElementById("itemName" + x).innerHTML = item.name;
	document.getElementById("itemPrice" + x).innerHTML = item.price;
}
