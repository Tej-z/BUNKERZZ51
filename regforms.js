const firebaseConfig = {
  apiKey: "AIzaSyCn3Vy2lWvJnyvJNYb71vXffEON7E4ri1M",
  authDomain: "bunker51-e4159.firebaseapp.com",
  databaseURL: "https://bunker51-e4159-default-rtdb.firebaseio.com",
  projectId: "bunker51-e4159",
  storageBucket: "bunker51-e4159.appspot.com",
  messagingSenderId: "1075237584474",
  appId: "1:1075237584474:web:ebaff7aa5f29e138926263"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  var Bunker51db = firebase.database().ref('bunker51');
  document.getElementById("regforms").addEventListener("submit", submitForm);
  function submitForm(e) {
  e.preventDefault();

  var name1 = getElementVal("name1");
  var name2 = getElementVal("name2");
  var name3 = getElementVal("name3");
  var name4 = getElementVal("name4");
  var number1 = getElementVal("number1");
  var number2 = getElementVal("number2");
  var number3 = getElementVal("number3");
  var number4 = getElementVal("number4");
  var teamname = getElementVal("teamname");

  // console.log(name1,name2,name3,name4,number1,number2,number3,number4,teamname);

  saveMessages(name1,name2,name3,name4,number1,number2,number3,number4,teamname);

   //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
  document.querySelector(".alert").style.display = "none";
   }, 3000);

   //   reset the form
   document.getElementById("regforms").reset();
}

    const saveMessages = (name1, name2, name3, name4, number1, number2, number3, number4, teamname) => {
     var newbunker51db = Bunker51db.push();

     newbunker51db.set({
      name1: name1,
      name2: name2,
      name3: name3,
      name4: name4,
      number1: number1,
      number2: number2,
      number3: number3,
      number4: number4,
      teamname: teamname,  

});
};

const getElementVal = (id) => {
return document.getElementById(id).value;
};