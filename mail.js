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
var applicantsDB = firebase.database().ref("Applicants");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var firstName = getElementVal("firstname");
    var lastName = getElementVal("lastname");
    var email = getElementVal("email");
    var phone = getElementVal("phone");
    var whatsapp = getElementVal("whatsapp");
    var schoolOrCampus = getElementVal("schoolORcampus");
    var district = getElementVal("district");
    var division = getElementVal("division");
    var specials = getElementVal("specials");

    var key = firstName + lastName; // Creating a key using firstName and lastName

    saveMessages(key, firstName, lastName, email, phone, whatsapp, schoolOrCampus, district, division, specials);

    // Enable and show alert
    var alertBox = document.querySelector('.alert');
    alertBox.style.display = 'block';

    // Reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (key, firstName, lastName, email, phone, whatsapp, schoolOrCampus, district, division, specials) => {
    var newApplicant = applicantsDB.child(key);

    newApplicant.set({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        whatsapp: whatsapp,
        schoolOrCampus: schoolOrCampus,
        district: district,
        division: division,
        specials: specials,
        // Add more fields as needed
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};

function closeAlert() {
    var alertBox = document.querySelector('.alert');
    alertBox.style.display = 'none';
}
