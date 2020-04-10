/*This code is gross, but a for loop didnt work for whatever reason, i'll work on it*/
function getChange(list){
    if(list == 1){ /*Price low to high*/
		generateNameAndPrice(1,2);
		generateNameAndPrice(2,1);
		generateNameAndPrice(3,11);
		generateNameAndPrice(4,12);
		generateNameAndPrice(5,4);
		generateNameAndPrice(6,5);
		generateNameAndPrice(7,7);
		generateNameAndPrice(8,8);
		generateNameAndPrice(9,6);
		generateNameAndPrice(10,9);
		generateNameAndPrice(11,10);
		generateNameAndPrice(12,3);
    }
    else if(list == 2){ /*price high to low*/
		generateNameAndPrice(1,3);
		generateNameAndPrice(2,10);
		generateNameAndPrice(3,9);
		generateNameAndPrice(4,6);
		generateNameAndPrice(5,8);
		generateNameAndPrice(6,7);
		generateNameAndPrice(7,5);
		generateNameAndPrice(8,4);
		generateNameAndPrice(9,12);
		generateNameAndPrice(10,11);
		generateNameAndPrice(11,1);
		generateNameAndPrice(12,2);
    }
    else if(list == 3){/*fruit first*/
		generateNameAndPrice(1,1);
		generateNameAndPrice(2,2);
		generateNameAndPrice(3,3);
		generateNameAndPrice(4,4);
		generateNameAndPrice(5,5);
		generateNameAndPrice(6,6);
		generateNameAndPrice(7,7);
		generateNameAndPrice(8,8);
		generateNameAndPrice(9,9);
		generateNameAndPrice(10,10);
		generateNameAndPrice(11,11);
		generateNameAndPrice(12,12);
    }
	else if(list == 4){ /*Meat first*/
		generateNameAndPrice(1,3);
		generateNameAndPrice(2,6);
		generateNameAndPrice(3,10);
		generateNameAndPrice(4,1);
		generateNameAndPrice(5,2);
		generateNameAndPrice(6,4);
		generateNameAndPrice(7,5);
		generateNameAndPrice(8,7);
		generateNameAndPrice(9,8);
		generateNameAndPrice(10,9);
		generateNameAndPrice(11,11);
		generateNameAndPrice(12,12);
    }
    else if(list == 5){ /*Dairy first*/
		generateNameAndPrice(1,5);
		generateNameAndPrice(2,9);
		generateNameAndPrice(3,1);
		generateNameAndPrice(4,2);
		generateNameAndPrice(5,3);
		generateNameAndPrice(6,4);
		generateNameAndPrice(7,6);
		generateNameAndPrice(8,7);
		generateNameAndPrice(9,8);
		generateNameAndPrice(10,10);
		generateNameAndPrice(11,11);
		generateNameAndPrice(12,12);
    }
	else if(list == 6){ /*Vegetables first*/
		var veg = [3,10,0,1,2,4,5,6,7,8,9,11];
		generateNameAndPrice(1,4);
		generateNameAndPrice(2,11);
		generateNameAndPrice(3,1);
		generateNameAndPrice(4,2);
		generateNameAndPrice(5,3);
		generateNameAndPrice(6,5);
		generateNameAndPrice(7,6);
		generateNameAndPrice(8,7);
		generateNameAndPrice(9,8);
		generateNameAndPrice(10,9);
		generateNameAndPrice(11,10);
		generateNameAndPrice(12,12);
    }
	else if(list == 7){	/*Drinks first*/
		generateNameAndPrice(1,8);
		generateNameAndPrice(2,12);
		generateNameAndPrice(3,9);
		generateNameAndPrice(4,2);
		generateNameAndPrice(5,3);
		generateNameAndPrice(6,4);
		generateNameAndPrice(7,5);
		generateNameAndPrice(8,6);
		generateNameAndPrice(9,7);
		generateNameAndPrice(10,1);
		generateNameAndPrice(11,10);
		generateNameAndPrice(12,11);
    }
	else if(list == 8){/*"Other" first*/
	var other = [6,0,1,2,3,4,5,7,8,9,10,11];
		generateNameAndPrice(1,7);
		generateNameAndPrice(2,1);
		generateNameAndPrice(3,2);
		generateNameAndPrice(4,3);
		generateNameAndPrice(5,4);
		generateNameAndPrice(6,5);
		generateNameAndPrice(7,6);
		generateNameAndPrice(8,8);
		generateNameAndPrice(9,9);
		generateNameAndPrice(10,10);
		generateNameAndPrice(11,11);
		generateNameAndPrice(12,12);
    }
}