// console.log("Hello Chache");

// // Hooking up the inputs to a button

// const firstName = document.getElementById("firstNameInput");
// const lastName = document.getElementById("lastNameInput");
// const emailAddress = document.getElementById("emailAddress");
// const phoneNumber = document.getElementById("phoneNumber");

// const refreshPage = function () {
//   if (!validateData) {
//     window.location.href = "http://127.0.0.1:5500/view_all/index.html";
//   }
// };

// function saveData() {
//   validateData();
//   refreshPage();
// }

// function validateData() {
//   if (
//     firstNameInput.value == "" ||
//     lastNameInput.value == "" ||
//     emailAddress.value == "" ||
//     phoneNumber.value == ""
//   ) {
//     alert("Enter all info");
//   } else {
//     submitForm();
//   }
// }

// if (!localStorage.getItem("Contacts")) {
//   localStorage.setItem("Contacts", JSON.stringify([]));
// }

// const submitForm = function () {
//   let firstNameObj = firstName.value;
//   let lastNameObj = lastName.value;
//   let emailAddressObj = emailAddress.value;
//   let phoneNumberObj = phoneNumber.value;

//   const submissionObjects = {
//     firstname: firstNameObj,
//     lastname: lastNameObj,
//     emailaddress: emailAddressObj,
//     phonenumber: phoneNumberObj,
//   };

//   const newNameToCloud = JSON.parse(localStorage.getItem("Contacts"));
//   newNameToCloud.push(submissionObjects);
//   localStorage.setItem("Contacts", JSON.stringify(newNameToCloud));
//   submissionObjects.value = "";
// };

