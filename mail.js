const firebaseConfig = {
    apiKey: "AIzaSyDKxht0ArhG3Rb-kpY4zifnH_nKux1-4QU",
    authDomain: "slmta-application-8920c.firebaseapp.com",
    databaseURL: "https://slmta-application-8920c-default-rtdb.firebaseio.com",
    projectId: "slmta-application-8920c",
    storageBucket: "slmta-application-8920c.appspot.com",
    messagingSenderId: "583899301788",
    appId: "1:583899301788:web:fe65c132cb16b6e365aa59"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("firstname");
  var emailid = getElementVal("email");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
