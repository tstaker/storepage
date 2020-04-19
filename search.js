//Put the list inside this function for simplicity.
//This function requires that the items in the products
//list are in exactly the same order as the gui cells

//List of variables for Jest testing
export var displayed = "block";
export var item1Shown = true;

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
	var count = 0;
	item1Shown = true;
	for(var i = 0; i < products.length; i++){
		//Hides all products that don't have the same type as the one being searched for
		if(products[i].type != filter && products[i].name != filter && products[i].price != filter){
			document.getElementById("item" + (i+1).toString()).style.display = "none";
			if(i === 0){
				item1Shown = false;
			}
		}
		else{
			document.getElementById("item" + (i+1).toString()).style.display = "block";
			count++;
		}
	}
	displayed = document.getElementById("item1").style.display;
	if(count === 0){
	    alert("No results found");
	}
	//Must return false or won't work properly.
	return false;
}

function home(){
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

	getChange(3); /*un-does any filters the client may have currently applied*/

    item1Shown = true;
	for(var i = 0; i < products.length; i++){
		document.getElementById("item" + (i+1).toString()).style.display = "block";
	}
	displayed = document.getElementById("item1").style.display;
}
