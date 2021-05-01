
 var firebaseConfig = {
    apiKey: "AIzaSyBJQvSm862HCg59CbkDHnwkBNfYScrFqcQ",
    authDomain: "university-events-f8159.firebaseapp.com",
    projectId: "university-events-f8159",
    storageBucket: "university-events-f8159.appspot.com",
    messagingSenderId: "153264475339",
    appId: "1:153264475339:web:da24b3183aa803f419df4e",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  function signUp(){
    
    var email = document.getElementById("input-forms");
    var password = document.getElementById("input-formss");
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Congratulations! Your account has been created");
  }

  function signIn(){
    
    var email = document.getElementById("input-forms");
    var password = document.getElementById("input-formss");
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("You have been registered to the specified event");
  }
  
  