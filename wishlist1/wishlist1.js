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

function moneyFormat(x){
	var money = (x).toLocaleString('en-US', {style:'currency', currency: 'USD',});
	return money;
}

function wishlist() {
  var x = document.getElementById("myWishlist");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function pushTowishlist(x,list){

	var y = 1;

	var thisItem = products[x-1];

    var thisName = document.getElementById("itemName"+x).innerText = thisItem.name;
	var thisPrice = moneyFormat(thisItem.price);
	document.getElementById("itemPrice"+x).innerText = thisPrice;
    var thisTotal = y+' '+thisName+' '+thisPrice;
    var li = document.createElement("li");
	var thisProduct = document.createTextNode(thisTotal);
	var thisList = document.getElementById('myList');
	li.appendChild(thisProduct);

	var addBtn = document.createElement("input");
    addBtn.type = "button";
    addBtn.value = "Add";
    addBtn.onclick = increment(y);
    li.appendChild(addBtn);
	document.getElementById("myList").appendChild(li);

    var removeBtn = document.createElement("input");
    removeBtn.type = "button";
    removeBtn.value = "Remove";
    removeBtn.onclick = remove;
    li.appendChild(removeBtn);
	document.getElementById("myList").appendChild(li);
}

function remove(e) {
  var el = e.target;
  el.parentNode.remove();
}

function increment(z) {
	z = z + 1;
}

function welcome() {
	window.location.href = "../GUI/GUI.html"
}