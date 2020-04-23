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
	var i;
	var total = 0;
	var display = document.getElementById("myCart");
	display.innerHTML = "";
	for(i = 0; i<cart.length;++i){
		var item = cart[i];
		var itemCost = moneyFormat(item.price);
		var displayItem = "<p>" + item.name + '-' + itemCost + " X " + item.quantity + "</p><br>";
		total += item.price * item.quantity;
		display.innerHTML += displayItem;
	}
	var totalDisplay = "<p>Total: " +  moneyFormat(total) + "</p>";
    display.innerHTML += totalDisplay;
  } 
  else {
    x.style.display = "none";
  }	
}
function addToCart(x){
	var index = getIndexCart(x);
	var item = products[index];
	var quantity = parseInt(document.getElementById("quantity"+index).value);
	var itemToAdd = {
			"name":"index",
			"price":0,
			"quantity":0
	};
	itemToAdd.name = item.name;
	if(checkCart(item.name, quantity) == true){
		return;
	}
	itemToAdd.price = item.price;
	if(Number.isNaN(quantity)){
		itemToAdd.quantity = 1;
	}
	else{
		itemToAdd.quantity = quantity;
	}
	cart.push(itemToAdd);
}
function checkCart(name, q){
	if(Number.isNaN(q)){
		q = 1;
	}
	var i;
	for(i = 0; i < cart.length;++i){
		var item = cart[i];
		if(item.name == name){
			item.quantity += q;
			return true;
		}
	}
	return false;
}


