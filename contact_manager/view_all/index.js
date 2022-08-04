console.log("Hello Chache");

const updateTable = function () {
  let newTableRows = "";

  const objectsStored = JSON.parse(localStorage.getItem("Contacts"));

  for (let i = 0; i < objectsStored.length; i++) {
    newTableRows += "<tr>";
    newTableRows +=
      '<td><a href="../view/?id=' +
      i +
      '">' +
      objectsStored[i].firstname +
      "</a></td>";
    newTableRows += "<td>" + objectsStored[i].lastname + "</td>";
    newTableRows += "<td>" + objectsStored[i].emailaddress + "</td>";
    newTableRows += "<td>" + objectsStored[i].phonenumber + "</td>";
    newTableRows += "</tr>";
  }
  document.getElementById("rows").innerHTML = newTableRows;
};

updateTable();

// const firstname = JSON.parse(localStorage.getItem("firstName"));
// const lastname = JSON.parse(localStorage.getItem("lastName"));
// const emailaddress = JSON.parse(localStorage.getItem("emailAddress"));
// const phonenumber = JSON.parse(localStorage.getItem("phoneNumber"));

// let mappedObject = firstname.map((item,index) => ({firstname:item, lastname: lastname [index] ||"", emailaddress: emailaddress[index] || ""}));

// console.log(mappedObject);

// var newTableRows = new Array();
// var merging = true;
// var index = 0;

// while (merging) {
//     merging = false;

//     if (index < firstNameArray.length) {
//         newTableRows[newTableRows.length] = firstNameArray[index];
//         merging = true;
//     }
//     if (index < lastNameArray.length) {
//         newTableRows[newTableRows.length] = lastNameArray[index];
//         merging = true;
//     }
//     if (index < emailAddressArray.length) {
//       newTableRows[newTableRows.length] = emailAddressArray[index];
//       merging = true;
//   }
//   if (index < phoneNumberArray.length) {
//     newTableRows[newTableRows.length] = phoneNumberArray[index];
//     merging = true;
// }
//     index++;
// }

// let indexCounter = newTableRows.length/4;

// let newTableRowsFilter = newTableRows.length/indexCounter;

// const updateTable = function () {

//   // First Names

// let newFNTableRows="";

// for (let i = 0; i < newTableRows.length; i++) {

//   newFNTableRows += "<td>" + newTableRows[i] + "</td>";
// }
// document.getElementById("firstNames").innerHTML = newFNTableRows;

// //Last Names

// let newLNTableRows="";

// for (let i = 1; i < newTableRows.length; i+=3) {

//   newLNTableRows += "<td>" + newTableRows[i] + "</td>";
// }
// document.getElementsByClassName("lastNames").innerHTML = newLNTableRows;

// for (let i = 0; i < newTableRows.length; i+=4) {

//   newTableRows += "<tr>" + newTableRows[i] + "</tr>";
// }
// document.getElementById("firstName").innerHTML = newTableRows;

// for (let i = 0; i < newTableRows.length; i+=4) {

//   newTableRows += "<tr>" + newTableRows[i] + "</tr>";
// }
// document.getElementById("firstName").innerHTML = newTableRows;

// };

// updateTable();

// const updateFirstNames = function () {
//   let firstNameRows = "";
//   // const firstNameArray = JSON.parse(localStorage.getItem("firstName"));

//   for (let i = 0; i < firstNameArray.length; i++) {

//     firstNameRows += "<td>" + firstNameArray[i] + "</td>";
// }

//   document.getElementById("firstNames").innerHTML = firstNameRows;
// };
// updateFirstNames();

// const updateLastNames = function () {
//     let lastNameRows = "";
//     // const lastNameArray = JSON.parse(localStorage.getItem("lastName"));

//     for (let i = 0; i < lastNameArray.length; i++) {

//       lastNameRows += "<td>" + lastNameArray[i] + "</td>";
//   }

//     document.getElementById("lastNames").innerHTML = lastNameRows;
//   };
//   updateLastNames();

//   const updateEmailAddress = function () {
//     let emailAddress = "";
//     // const emailAddressArray = JSON.parse(localStorage.getItem("emailAddress"));

//     for (let i = 0; i < emailAddressArray.length; i++) {

//       emailAddress += "<td>" + emailAddressArray[i] + "</td>";
//   }

//     document.getElementById("emailAddress").innerHTML = emailAddress;
//   };
//   updateEmailAddress();

//   const updatePhoneNumber = function () {
//     let phoneNumber = "";
//     // const phoneNumberArray = JSON.parse(localStorage.getItem("phoneNumber"));

//     for (let i = 0; i < phoneNumberArray.length; i++) {

//       phoneNumber += "<td>" + phoneNumberArray[i] + "</td>";
//   }

//     document.getElementById("phoneNumber").innerHTML = emailAddress;
//   };
//   updateEmailAddress();
