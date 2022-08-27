console.log("Welcome to View!");

const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const contactIndex = urlParams.get("id");

console.log(contactIndex);

const contactIndexNum = parseInt(contactIndex, 10);

console.log(contactIndexNum);



const displayFullName = function () {
  let fullName = "";
  const displayFirstName = getContacts[contactIndexNum].firstname;
  const displayLastName = getContacts[contactIndexNum].lastname;

  fullName +=
    "<p>" + displayFirstName + "           " + displayLastName + "</p>";
  document.getElementById("fullName").innerHTML = fullName;
};
displayFullName();

const displayTheEmailAddress = function () {
  let emailAddress = "";
  const displayEmailAddress = getContacts[contactIndexNum].emailaddress;

  emailAddress += "<p>" + displayEmailAddress + "</p>";
  document.getElementById("emailAddress").innerHTML = emailAddress;
};
displayTheEmailAddress();

const displayThePhoneNumber = function () {
  let phoneNumber = "";
  const displayPhoneNumber = getContacts[contactIndexNum].phonenumber;

  phoneNumber += "<p>" + displayPhoneNumber + "</p>";
  document.getElementById("phoneNumber").innerHTML = phoneNumber;
};
displayThePhoneNumber();
