//Put the list inside this function for simplicity.
//This function requires that the items in the products
//list are in exactly the same order as the gui cells

var products = [
	{"name":"apple",
	"type":"fruit",
	"price":2},
	
	{"name":"banana",
	"type":"fruit",
	"price":1},
	
	{"name":"potato",
	"type":"vegetable",
	"price":2},
	
	{"name":"celery",
	"type": "vegetable",
	"price":2},
	
	{"name":"coffee",
	"type":"drink",
	"price":3},
	
	{"name":"soda",
	"type":"drink",
	"price":2},
	
	{"name":"beef",
	"type":"meat",
	"price":5},
	
	{"name":"chicken",
	"type":"meat",
	"price":4},
	
	{"name":"pork",
	"type":"meat",
	"price":4},
	
	{"name":"chips",
	"type":"other",
	"price":3},
	
	{"name":"cheese",
	"type":"dairy",
	"price":3},
	
	{"name":"milk",
	"type":"dairy",
	"price":4}
	];

var submitThis = function(){
	var products = [
	{"name":"apple",
	"type":"fruit",
	"price":2},
	
	{"name":"banana",
	"type":"fruit",
	"price":1},
	
	{"name":"potato",
	"type":"vegetable",
	"price":2},
	
	{"name":"celery",
	"type": "vegetable",
	"price":2},
	
	{"name":"coffee",
	"type":"drink",
	"price":3},
	
	{"name":"soda",
	"type":"drink",
	"price":2},
	
	{"name":"beef",
	"type":"meat",
	"price":5},
	
	{"name":"chicken",
	"type":"meat",
	"price":4},
	
	{"name":"pork",
	"type":"meat",
	"price":4},
	
	{"name":"chips",
	"type":"other",
	"price":3},
	
	{"name":"cheese",
	"type":"dairy",
	"price":3},
	
	{"name":"milk",
	"type":"dairy",
	"price":4}
	];
	
	var item = document.getElementById("searchtext");
	var filter = item.value.toLowerCase();
	for(var i = 0; i < products.length; i++){
		//Hides all products that don't have the same type as the one being searched for
		if(products[i].type != filter){
			document.getElementById("item" + (i+1).toString()).style.display = "none";
		}
		else{
			document.getElementById("item" + (i+1).toString()).style.display = "block";
		}
	}
	//Must return false or won't work properly.
	return false;
}