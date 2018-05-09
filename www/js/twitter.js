var providertwitter = new firebase.auth.TwitterAuthProvider();


function twitter_login_in(){


	firebase.auth().signInWithRedirect(providertwitter).then(function(result) {
		// This gives you a the Twitter OAuth 1.0 Access Token and Secret.
		// You can use these server side with your app's credentials to access the Twitter API.
		var token = result.credential.accessToken;
		var secret = result.credential.secret;
		// The signed-in user info.
		var user = result.user;
		// ...
		}).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// The email of the user's account used.
		var email = error.email;
		// The firebase.auth.AuthCredential type that was used.
		var credential = error.credential;
		// ...
	});


firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    var token = result.credential.accessToken;
    var secret = result.credential.secret;
    // ...
  }
  // The signed-in user info.
  var user = result.user;
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}




//document.querySelector('#twitterbLogIn').addEventListener('click', function () {
  //          firebase.auth().signInWithRedirect(providertwitter).then(function() {
   //           return firebase.auth().getRedirectResult();
   //         }).then(function(result) {
              // This gives you a Google Access Token.
              // You can use it to access the Google API.
   //           var token = result.credential.accessToken;
              // The signed-in user info.
    //          var user = result.user;

           
 
      // ...
    //        }).catch(function(error) {
              // Handle Errors here.
    //          var errorCode = error.code;
    //          var errorMessage = error.message;
     //           alert(errorMessage);
     //         console.log(errorCode)
     //         console.log(errorMessage);

    //        });


     //   });