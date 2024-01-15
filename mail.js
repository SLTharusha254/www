const firebaseConfig = {
    apiKey: "AIzaSyDKxht0ArhG3Rb-kpY4zifnH_nKux1-4QU",
    authDomain: "slmta-application-8920c.firebaseapp.com",
    databaseURL: "https://slmta-application-8920c-default-rtdb.firebaseio.com",
    projectId: "slmta-application-8920c",
    storageBucket: "slmta-application-8920c.appspot.com",
    messagingSenderId: "583899301788",
    appId: "1:583899301788:web:fe65c132cb16b6e365aa59"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var firstName = getElementVal("firstname");
  var lastName = getElementVal("lastname");
  var email = getElementVal("email");
  var phone = getElementVal("phone");
  var jobTitle = getElementVal("jobtitle");
  var company = getElementVal("company");
  var state = getElementVal("state");
  var country = getElementVal("country");
  var msgContent = getElementVal("msgContent");

  saveMessages(firstName, lastName, email, phone, jobTitle, company, state, country, msgContent);

  // Enable alert
  document.querySelector(".alert").style.display = "block";

  // Remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (firstName, lastName, email, phone, jobTitle, company, state, country, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    jobTitle: jobTitle,
    company: company,
    state: state,
    country: country,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
