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

function wishlist() {
  var x = document.getElementById("myWishlist");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function pushTowishlist(x,list){
	
    var thisItem = products[x-1];

    var thisName = document.getElementById("itemName"+x).innerText = thisItem.name;
    var thisPrice = document.getElementById("itemPrice"+x).innerText = thisItem.price;
    var thisTotal = thisName+' '+thisPrice;
    var li = document.createElement("li");
    var thisProduct = document.createTextNode(thisTotal);
	li.appendChild(thisProduct);

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

function welcome() {
	window.location.href = "../GUI/GUI.html"
}