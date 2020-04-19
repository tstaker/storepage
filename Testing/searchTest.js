//Must have Jest for this to work!
export const item1Result = (item) => {
	if(item == "none"){
		return false;
	}
	if(item == "block"){
		return true;
	}
	else{
		return null;
	}
};