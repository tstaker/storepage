var products = [
	{"name":"apple",
	"type":"fruit",
	"price":2},
	
	{"name":"banana",
	"type":"fruit"
	"price":1},
	
	{"name":"potato",
	"type":"vegetable",
	"price":2},
	
	{"name":"celery",
	"type": "vegetable",
	"price":2},
	
	{"name":"coffee",
	"type":"drink"
	"price":3},
	
	{"name":"soda",
	"type":"drink"
	"price":2},
	
	{"name":"beef",
	"type":"meat"
	"price":5},
	
	{"name":"chicken",
	"type":"meat"
	"price":4},
	
	{"name":"pork",
	"type":"meat"
	"price":4},
	
	{"name":"chips",
	"type":"other"
	"price":3},

	{"name":"cheese",
	"type":"dairy"
	"price":3},
	
	{"name":"milk",
	"type":"dairy",
	"price":4}
	
];
var cart = [
	{"name": null,
	"type":null,
	"price":0}
];

function getName(int x){
	return products[x].name;
}
function getType(int x){
	return products[x].type;
}
function getPrice(int x){
	return products[x].price;
}

function addToCart(int x){
	cart.push(products[x]);
}
