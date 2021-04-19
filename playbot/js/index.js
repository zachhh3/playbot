const firebaseConfig = {
    apiKey: "AIzaSyD6CI5NcdjaUpRuV0s7g66-FrEuaLgsLFY",
    authDomain: "icww-play-bots.firebaseapp.com",
    projectId: "icww-play-bots",
    storageBucket: "icww-play-bots.appspot.com",
    messagingSenderId: "1001571269772",
    appId: "1:1001571269772:web:56d111a02ac2c2750a8fa9",
    measurementId: "G-ERXYT8D2ML"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth.Auth.Persistence.LOCAL;
  firebase.auth.Auth.Persistence.SESSION;
  
  $("#btn-logout").click(function(){
     firebase.auth().signOut();
  });

$("#btn-resetPassword").click(function(){
    var auth = firebase.auth();
    var email = $("#email").val();
    
    if(email != ""){
        auth.sendPasswordResetEmail(email).then(function(){
            window.alert("Email has been send to you, Please check and verify.");
            
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
            window.alert("Message : " + errorMessage);
            
        });
    }else{
        window.alert("Please enter your email");
    }
});
