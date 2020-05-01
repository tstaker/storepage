var userList = [
	{
		username: "test",
		password: "test"
	}
]

function loginCheck() {
	
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(i = 0; i < userList.length; i++) {
		if(username == userList[i].username && password == userList[i].password){
			window.alert(username + " is logged in!");
			window.location.href = "../welcomePage/welcome.html";
			return
		}
	}
	window.alert("Incorrect username and or password");

}

function registerCheck() {

	var newUsername = document.getElementById('newUsername').value;
	var newPassword = document.getElementById('newPassword').value;

	var newuser = {
		username: newUsername,
		password: newPassword
	}

	if(newUsername == "" || newPassword == ""){
		window.alert("Invalid username and or password");
	}
	else {
		userList.push(newuser);
		window.alert("Your account is now registered! Your username is " + newUsername + " and your password is " + newPassword);
	}

}

function signUp() {
	window.location.href = "../welcomePage/register.html";
}