//Copy of function structure used by login.js to verify a registration
export function registerCheck(user, pass) {

	if(user === "" || pass === ""){
		return false;
	}
	else {
		return true;
	}

}