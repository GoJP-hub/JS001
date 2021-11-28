function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log('Full Name: ' + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
    if(id_token){
        localStorage.setItem('access_token', id_token);
        location.reload();
    };
  }