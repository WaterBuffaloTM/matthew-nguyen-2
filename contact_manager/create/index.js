console.log("Hello Chache");

// Hooking up the inputs to a button

const firstName = document.getElementById("firstNameInput");
const lastName = document.getElementById("lastNameInput");
const emailAddress = document.getElementById("emailAddress");
const phoneNumber = document.getElementById("phoneNumber");


//Making stuff required

const firstNameRequired = document.getElementById("firstNameInput").required;
const lastNameRequired = document.getElementById("lastNameInput").required;
const emailAddressRequired = document.getElementById("emailAddress").required;
const phoneNumberRequired = document.getElementById("phoneNumber").required;

  function empty() {
    x = firstNameInput.value;
    y = lastNameInput.value;
    z = emailAddress.value;
    w = phoneNumber.value;
    if( x=='' ||y=='' ||z=='' ||w=='')
        alert("Enter all info");
        return false;
    };

// all save

function saveData () {
    submitForm();
    empty();

}


// First name to local storage


const submitForm = function () {
  if (!localStorage.getItem("firstName")) {
    localStorage.setItem("firstName", JSON.stringify([]));
  }



  const saveFirstName = function () {
    const newNameToCloud = JSON.parse(localStorage.getItem("firstName"));
    newNameToCloud.push(firstName.value);
    localStorage.setItem("firstName", JSON.stringify(newNameToCloud));
    console.log(firstName.value);
  };
  saveFirstName();


  
  // Last name to local storage

  if (!localStorage.getItem("lastName")) {
    localStorage.setItem("lastName", JSON.stringify([]));
  }

  const saveLastName = function () {
    const newLNNameToCloud = JSON.parse(localStorage.getItem("lastName"));
    newLNNameToCloud.push(lastName.value);
    localStorage.setItem("lastName", JSON.stringify(newLNNameToCloud));
    console.log(lastName.value);
  };
  saveLastName();

  // Email to local storage

  if (!localStorage.getItem("emailAddress")) {
    localStorage.setItem("emailAddress", JSON.stringify([]));
  }

  const saveEmailAddress = function () {
    const newEmailToCloud = JSON.parse(localStorage.getItem("emailAddress"));
    newEmailToCloud.push(emailAddress.value);
    localStorage.setItem("emailAddress", JSON.stringify(newEmailToCloud));
    console.log(emailAddress.value);
  };
  saveEmailAddress();

  // Phone to local storage

  if (!localStorage.getItem("phoneNumber")) {
    localStorage.setItem("phoneNumber", JSON.stringify([]));
  }

  const savePhoneNumber = function () {
    const newPhoneNumberToCloud = JSON.parse(localStorage.getItem("phoneNumber"));
    newPhoneNumberToCloud.push(phoneNumber.value);
    localStorage.setItem("phoneNumber", JSON.stringify( newPhoneNumberToCloud));
    console.log(phoneNumber.value);
  };
  savePhoneNumber();
};

// const getInfo = function () {

//     const fnValue = firstName.value;
//     const lnValue = lastName.value;
//     const emailValue = emailAddress.value;
//     const pnValue = phoneNumber.value;

//     console.log(fnValue);
//     console.log(lnValue);
//     console.log(emailValue);
//     console.log(pnValue);
// };

// const updateDisplay = function() {
//     let htmlString = '';
//     const savedStrings = JSON.parse(localStorage.getItem('myData'));
//     for(let i = 0; i < savedStrings.length; i++) {
//         htmlString += '<p>' + savedStrings[i] + '</p>';
//     }
//     document.getElementById('result').innerHTML = htmlString;
// };
// updateDisplay();
