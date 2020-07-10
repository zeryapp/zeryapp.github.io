console.log('This would be the main JS file.');
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDoKWfOpjgFh8kmyv7bjptzJR3HuiRlVIk",
    authDomain: "zeryapp-2e69c.firebaseapp.com",
    databaseURL: "https://zeryapp-2e69c.firebaseio.com",
    projectId: "zeryapp-2e69c",
    storageBucket: "zeryapp-2e69c.appspot.com",
    messagingSenderId: "1000446734439",
    appId: "1:1000446734439:web:1ccaf8d21b0a1a251424c2",
    measurementId: "G-DSFH0GPJS0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
const dbRef = firebase.database().ref();
const usersRef = dbRef.child('users');
const userListUI = document.getElementById("userList");
usersRef.on("child_added", snap => {
    let user = snap.val();
    let $li = document.createElement("li");
    $li.innerHTML = user.name;
    $li.setAttribute("child-key", snap.key);
    $li.addEventListener("click", userClicked) userListUI.append($li);
});
function userClicked(e) {
    var userID = e.target.getAttribute("child-key");
    const userRef = dbRef.child('users/' + userID);
    const userDetailUI = document.getElementById("userDetail");
    userDetailUI.innerHTML = ""
    userRef.on("child_added", snap => {
        var $p = document.createElement("p");
        $p.innerHTML = snap.key + " - " + snap.val() ;
      userDetailUI.append($p);
    });
}
