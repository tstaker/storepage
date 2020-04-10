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

function moneyFormat(x){
	var money = (x).toLocaleString('en-US', {style:'currency', currency: 'USD',});
	return money;
}

var imgSrcList = [
	"../products/images/apple.jpg",
	"../products/images/banana.png",
	"../products/images/beef.png",
	"../products/images/celery.png",
	"../products/images/cheese.png",
	"../products/images/chicken.png",
	"../products/images/chips.png",
	"../products/images/coffee.png",
	"../products/images/milk.png",
	"../products/images/pork.png",
	"../products/images/potato.png",
	"../products/images/soda.png"
];

function generateNameAndPrice(cell,x){ /*cell is src, x is destination, the change made sort by a lot easier*/
	var item = products[x-1];
	document.getElementById("itemName" + cell).innerHTML = item.name;
	document.getElementById("itemName" + cell).style.fontSize = "xx-large";
	var price = moneyFormat(item.price);
	document.getElementById("itemPrice" + cell).innerHTML = price;
	document.getElementById("itemPrice" + cell).style.fontSize = "xx-large";
	document.getElementById(cell).src=imgSrcList[x - 1];
}

function checkOut(){
  var x = document.getElementById("myCart");
  if (x.style.display === "none") {
    x.style.display = "block";
  } 
  else {
    x.style.display = "none";
  }	
}
function addToCart(x, adding){
		var item = products[x];
		var itemToAdd = {
				"name":"x",
				"price":0
		};
		itemToAdd.name = item.name;
		itemToAdd.price = item.price;
		cart.push(itemToAdd);
}


function loadCart(){
	var i;
	var total = 0;
	var display = document.getElementById("myCart");
	for(i = 0; i<cart.length;++i){
		var item = cart[i];
		var itemCost = moneyFormat(item.price);
		var displayItem = "<p>" + item.name + '-' + itemCost + "</p><br>";
		total += item.price;
		display.innerHTML += displayItem;
	}
	var totalDisplay = "<p>Total: " +  moneyFormat(total) + "</p>";
    display.innerHTML += totalDisplay;
}

