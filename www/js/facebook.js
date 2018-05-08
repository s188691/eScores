var fbprovider = new firebase.auth.FacebookAuthProvider();

function facebook_login_in(){
        
		firebase.auth().signInWithRedirect(fbprovider).then(function(result) {
		  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
		  var token = result.credential.accessToken;
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
   
    var token = result.credential.accessToken;
  
    var user = result.user;
  
  }
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
});


		
}
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v3.0&appId=2145472378801355&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
