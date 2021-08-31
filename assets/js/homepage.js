var getUserRepos = function (user) {
	// console.log("function was called");
	// var response = fetch("https://api.github.com/users/octocat/repos");
	// console.log(response);

	// the .them method is called when the promise is fullfilled
	// fetch("https://api.github.com/users/octocat/repos").then(function (response) {
	// 	console.log("inside ", response);
	// });

	// fetch("https://api.github.com/users/octocat/repos").then(function (response) {
	// 	response.json().then(function (data) {
	// 		console.log(data);
	// 	});
   // });
   
   // format the github api url
   var apiUrl = "https://api.github.com/users/" + user + "/repos";
   // make a request to the url
   fetch(apiUrl).then(function (response) {
		response.json().then(function (data) {
			console.log(data);
		});
	});
   
};

getUserRepos("edgardopina");
