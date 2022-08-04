console.log("Hello Chache");

// Hooking up the inputs to a button

const firstName = document.getElementById("firstNameInput");
const lastName = document.getElementById("lastNameInput");
const emailAddress = document.getElementById("emailAddress");
const phoneNumber = document.getElementById("phoneNumber");


const refreshPage = function(){
if(!validateData){
window.location.href="http://127.0.0.1:5500/view_all/index.html";
}
}


function saveData() {
  validateData();
  refreshPage();
}




  function validateData() {
    if( firstNameInput.value=='' ||lastNameInput.value=='' ||emailAddress.value=='' ||phoneNumber.value=='')
        {alert("Enter all info")}
        else {
          submitForm()
        }
    };




 

if (!localStorage.getItem("Contacts")) {
  localStorage.setItem("Contacts", JSON.stringify([]));
}


const submitForm = function () 


{
 

  let firstNameObj = firstName.value;
  let lastNameObj = lastName.value;
  let emailAddressObj = emailAddress.value;
  let phoneNumberObj= phoneNumber.value;
  
  
  const submissionObjects = {
  "firstname": firstNameObj,
  "lastname": lastNameObj,
  "emailaddress": emailAddressObj,
  "phonenumber": phoneNumberObj,
  };
    
    const newNameToCloud = JSON.parse(localStorage.getItem("Contacts"));
    newNameToCloud.push(submissionObjects);
    localStorage.setItem("Contacts", JSON.stringify(newNameToCloud));
    submissionObjects.value='';
    
  };


  // // Last name to local storage

  // if (!localStorage.getItem("lastName")) {
  //   localStorage.setItem("lastName", JSON.stringify([]));
  // }

  // const saveLastName = function () {
  //   const newLNNameToCloud = JSON.parse(localStorage.getItem("lastName"));
  //   newLNNameToCloud.push(lastName.value);
  //   localStorage.setItem("lastName", JSON.stringify(newLNNameToCloud));
  //   console.log(lastName.value);
  // };
  // saveLastName();

  // // Email to local storage

  // if (!localStorage.getItem("emailAddress")) {
  //   localStorage.setItem("emailAddress", JSON.stringify([]));
  // }

  // const saveEmailAddress = function () {
  //   const newEmailToCloud = JSON.parse(localStorage.getItem("emailAddress"));
  //   newEmailToCloud.push(emailAddress.value);
  //   localStorage.setItem("emailAddress", JSON.stringify(newEmailToCloud));
  //   console.log(emailAddress.value);
  // };
  // saveEmailAddress();

  // // Phone to local storage

  // if (!localStorage.getItem("phoneNumber")) {
  //   localStorage.setItem("phoneNumber", JSON.stringify([]));
  // }

  // const savePhoneNumber = function () {
  //   const newPhoneNumberToCloud = JSON.parse(localStorage.getItem("phoneNumber"));
  //   newPhoneNumberToCloud.push(phoneNumber.value);
  //   localStorage.setItem("phoneNumber", JSON.stringify( newPhoneNumberToCloud));
  //   console.log(phoneNumber.value);
  // };
  // savePhoneNumber();


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
