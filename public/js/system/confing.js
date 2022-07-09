// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNmnZgQRcH0SWyksU_751yO0GUnbiFY-Y",

  authDomain: "discordst-20a88.firebaseapp.com",

  databaseURL: "https://discordst-20a88-default-rtdb.firebaseio.com",

  projectId: "discordst-20a88",

  storageBucket: "discordst-20a88.appspot.com",

  messagingSenderId: "844700200303",

  appId: "1:844700200303:web:a08306584112bbbaa98c9a",

  measurementId: "G-54H6E5RCN6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// let's code
var datab = firebase.database().ref("data");
function UserRegister() {
  var email = document.getElementById("eemail").value;
  var password = document.getElementById("lpassword").value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function () {})
    .catch(function (error) {
      var errorcode = error.code;
      var errormsg = error.message;
    });
}
const auth = firebase.auth();
function SignIn() {
  var email = document.getElementById("eemail").value;
  var password = document.getElementById("lpassword").value;
  const promise = auth.signInWithEmailAndPassword(email, password);
  promise.catch((e) => alert(e.msg));
 email != null && password != null?
    window.location.href = "/home.html": alert('Login in system');

   
}
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  var userInfo = datab.push();
  userInfo.set({
    name: getId("fname"),
    email: getId("eemail"),
    password: getId("lpassword"),
  });
  alert("Successfully Signed Up\nGo Sing-in");
  console.log("sent");
  document.getElementById("form").reset();
});
function getId(id) {
  return document.getElementById(id).value;
}
