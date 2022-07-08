let loader = document.querySelector('.preloader');
window.addEventListener('load', () => {
  loader.style.display = 'none';
});
window.addEventListener('scroll', () => {
  let content = document.querySelector('.about');
  let content1 = document.querySelector('.process');
  let content2 = document.querySelector('.reviews');
  let content3 = document.querySelector('.contact');
  let content4 = document.querySelector('.footer');
  let content5 = document.querySelector('.services');
  let contentPosition = content.getBoundingClientRect().top;
  let contentPosition1 = content1.getBoundingClientRect().top;
  let contentPosition2 = content2.getBoundingClientRect().top;
  let contentPosition3 = content3.getBoundingClientRect().top;
  let contentPosition4 = content4.getBoundingClientRect().top;
  let contentPosition5 = content5.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1;
  if(contentPosition < screenPosition){
    content.classList.add('act');
  }
  else{
    content.classList.remove('act');
  }
  if(contentPosition1 < screenPosition){
    content1.classList.add('act');
  }
  else{
    content1.classList.remove('act');
  }
  if(contentPosition2 < screenPosition){
    content2.classList.add('act');
  }
  else{
    content2.classList.remove('act');
  }
  if(contentPosition3 < screenPosition){
    content3.classList.add('act');
  }
  else{
    content3.classList.remove('act');
  }
  if(contentPosition4 < screenPosition){
    content4.classList.add('act');
  }
  else{
    content4.classList.remove('act');
  }
  if(contentPosition5 < screenPosition){
    content5.classList.add('act');
  }
  else{
    content5.classList.remove('act');
  }
})

// text animation
const texts = ['jniz teeth-care           ', 'teeth whitening   ', 'teenth gem   ', 'eye-lashes   '];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, index++);

    document.getElementById('text').textContent =  letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 250);
}());

let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .nav");
let header = document.querySelector(".header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

// DO FOR ERROR MESSAGES
let nameError = document.getElementById("name-error");
let genderError = document.getElementById("gender-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let addressError = document.getElementById("address-error");
let datetimeError = document.getElementById("datetime-error");
let messageError = document.getElementById("message-error");
let servicesError = document.getElementById("services-error");

// DOM FOR GREEN TICK CONFORMATION
let namecheck = document.getElementById("name-check");
let gendercheck = document.getElementById("gender-check");
let phonecheck = document.getElementById("phone-check");
let emailcheck = document.getElementById("email-check");
let addresscheck = document.getElementById("address-check");
let datetimecheck = document.getElementById("datetime-check");
let servicescheck = document.getElementById("services-check");
let errorfix = document.getElementById("error-fix");

// VALIDATE FOR NAME INPUTE
function validatename() {
  let nameValue = document.getElementById("username").value;
  let name = document.getElementById("username");

  if (nameValue.length == 0) {
    nameError.innerText = "Input User name";
    name.style.border = "3px solid red";
    name.style.borderRadius = "20px";
    namecheck.style.visibility = "hidden";
    return false;
  }
  if (!nameValue.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Enter full name";
    name.style.border = "3px solid red";
    name.style.borderRadius = "20px";
    namecheck.style.visibility = "hidden";
    return false;
  }
  nameError.innerHTML = "";
  namecheck.style.visibility = "visible";
  name.style.border = "3px solid green";
  name.style.borderRadius = "20px";
  return true;
}
function validategender() {
  let gendermale = document.getElementById("gendermale").checked;
  let genderfemale = document.getElementById("genderfemale").checked;
  let genderbinary = document.getElementById("genderbinary").checked;

  let gender = document.getElementById("gender");
  if (gendermale == "" && genderfemale == "" && genderbinary == "") {
    genderError.innerText = "Kindly pick a gender";
    gendercheck.style.visibility = "hidden";
    return false;
  }
  genderError.innerHTML = "";
  gendercheck.style.visibility = "visible";
  return true;
}

function validatephone() {
  let phoneValue = document.getElementById("userphone").value;
  let phone = document.getElementById("userphone");

  if (isNaN(phoneValue)) {
    phoneError.innerHTML = "Only numbers are required";
    phone.style.border = "3px solid red";
    phone.style.borderRadius = "20px";
    phonecheck.style.visibility = "hidden";
    return false;
  } else if (phoneValue.length < 10 || phoneValue.length > 11) {
    phoneError.innerText = "Phone No not more than 12 digits";
    phone.style.border = "3px solid red";
    phone.style.borderRadius = "20px";
    phonecheck.style.visibility = "hidden";
    return false;
  }

  phoneError.innerHTML = "";
  phonecheck.style.visibility = "visible";
  phone.style.border = "3px solid green";
  phone.style.borderRadius = "20px";
  return true;
}

function validateemail() {
  let emailValue = document.getElementById("useremail").value;
  let email = document.getElementById("useremail");
  let correct = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;

  if (!emailValue.match(correct)) {
    emailError.innerHTML = "Input a valid Email Address";
    email.style.border = "3px solid red";
    email.style.borderRadius = "20px";
    emailcheck.style.visibility = "hidden";
    return false;
  } else {
    emailError.innerHTML = "";
    emailcheck.style.visibility = "visible";
    email.style.border = "3px solid green";
    email.style.borderRadius = "20px";
    return true;
  }
}

function validatedate() {
  let dateValue = document.getElementById("date").value;
  let date = document.getElementById("date");

  if (dateValue == "") {
    datetimeError.innerText = "Select a DATE for your Appointment";
    date.style.border = "3px solid red";
    date.style.borderRadius = "20px";
    datetimecheck.style.visibility = "hidden";
    return false;
  } else {
    datetimeError.innerText = "";
    date.style.border = "3px solid green";
    date.style.borderRadius = "20px";
    datetimecheck.style.visibility = "visible";
    return true;
  }
}

function validateservices() {
  let teethwhitening = document.getElementById("teeth-whitening").checked;
  let teethgems = document.getElementById("teeth-gems").checked;
  let eyelashes = document.getElementById("eye-lashes").checked;

  if (teethwhitening == "" && teethgems == "" && eyelashes == "") {
    servicesError.innerText = "Select your desired services";
    servicescheck.style.visibility = "hidden";
    return false;
  } else {
    servicesError.innerText = "";
    servicescheck.style.visibility = "visible";
    return true;
  }
}
function validatemessage() {
  let textareaValue = document.getElementById("textarea").value;
  let textarea = document.getElementById("textarea");
  let messageCheck = document.getElementById("message-check");
  let required = 30;
  let remaining = required - textareaValue.length;

  if (remaining > 0) {
    messageError.innerHTML = remaining + "  more characters";
    return false;
  }
  messageError.innerHTML = "Good";
  messageError.style.color = "green";
  return true;
}
function validateform() {
  if (
    !validatename() ||
    !validategender() ||
    !validatephone() ||
    !validateemail() ||
    !validatedate() ||
    !validateservices() ||
    !validatemessage()
  ) {
    errorfix.innerHTML = "Check form and make correction";
    setTimeout(function () {
      errorfix.style.display = "none";
    }, 3000);
    return false;
  }
  messageError.style.border = "3px solid green";
  return true;
}

var d = new Date();
document.getElementById("demo").innerHTML = d;

// sending of form
var form = document.getElementsById("form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = ('bad')
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          console.log(status)
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)


