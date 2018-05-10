var providergithub = new firebase.auth.GithubAuthProvider();


function github_login_in(){


	firebase.auth().signInWithRedirect(providergithub).then(function(result) {
  // This gives you a GitHub Access Token. You can use it to access the GitHub API.
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
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = result.credential.accessToken;
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