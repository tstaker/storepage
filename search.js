//Put the list inside this function for simplicity.
//This function requires that the items in the products
//list are in exactly the same order as the gui cells

var submitThis = function(){
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
	
	var item = document.getElementById("searchtext");
	var filter = item.value.toLowerCase();
	for(var i = 0; i < products.length; i++){
		//Hides all products that don't have the same type as the one being searched for
		if(products[i].type != filter && products[i].name != filter && products[i].price != filter){
			document.getElementById("item" + (i+1).toString()).style.display = "none";
		}
		else{
			document.getElementById("item" + (i+1).toString()).style.display = "block";
		}
	}
	//Must return false or won't work properly.
	return false;
}

function home(){
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
	
	for(var i = 0; i < products.length; i++){
		document.getElementById("item" + (i+1).toString()).style.display = "block";
	}
}