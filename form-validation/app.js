let form = document.querySelector('form');

let fname = document.querySelector('input[name="name"]');
let age = document.querySelector('input[name="age"]');
let phone = document.querySelector('input[name="phone"]');
let email = document.querySelector('input[name="email"]');

let errorMessages = document.querySelectorAll('.error-msg');

let resultDiv = document.querySelector('div');

let errorCount = 0;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    errorCount = 0;

    // clearPage();

    ValidateEntries();

    if (errorCount > 0) 
        return;

    CheckEnrollmentEligibility();

    // form.reset();
});

let courseStatus = document.createElement('p');
let reason = document.createElement('p');

function ValidateEntries() {
    if (!CheckBlankStatus(fname, 0, 'Name cannot be blank!')) {
        ValidateEntry(fname, 0);
    }

    CheckBlankStatus(age, 1, 'Age cannot be blank!')

    if (!CheckBlankStatus(phone, 2, 'Phone Number cannot be blank!')) {
        ValidateEntry(phone, 2);
    }

    if (!CheckBlankStatus(email, 3, 'Email cannot be blank!')) {
        ValidateEntry(email, 3);
    }
}

function CheckEnrollmentEligibility() {
    let compCheckbox = document.querySelector('input[name="computer"]');
    let internetCheckbox = document.querySelector('input[name="internet"]');
    let textArea = document.querySelector('textarea');

    if (age.value > 15 && compCheckbox.checked && internetCheckbox.checked) {
        courseStatus.innerHTML = `<b>Congratulations ${fname.value}! You are eligible for the course enrollment.</b>`;
        courseStatus.style.color = "green";

        let hasLaptop = document.querySelector('input[value="yes-laptop"]');

        if (hasLaptop.checked) {
             reason.innerHTML = 'Since you have a laptop, it is recommended that you bring the laptop with you to the class.';
        }
        else {
            reason.innerHTML = 'Since you do not have a laptop, it is advised that you arrange a laptop for practicing at home.';
        }

        let selectBatch = document.querySelector('select');

        reason.innerHTML += `<br>Your batch timings will be ${selectBatch.value} pm.`;

        if (textArea.value.trim() != "") {
            reason.innerHTML += `<br><br>We have got your message. Our team will get back to you soon.`;
        }
    }
    else {
        courseStatus.innerHTML = `<b>Sorry ${fname.value}! You are not eligible for the course enrollment.</b>`;
        courseStatus.style.color = "red";

        if (age.value <= 15) {
            reason.innerHTML = `<li>Because you're still quite young to learn this.</li>`;
        }
        
        if (!compCheckbox.checked) {
            reason.innerHTML += `<li>Because you can't operate a Computer, which is mandatory for this course.</li>`;
        }
        
        if (!internetCheckbox.checked) {
            reason.innerHTML += `<li>Because you aren't quite familiar with the Internet, which is mandatory for this course.</li>`;
        }
    }

    resultDiv.appendChild(courseStatus);
    resultDiv.appendChild(reason);

    form.classList.add('element-hidden');
}

function ValidateEntry(element, index) {
    switch(index) {
        case 0:
            response = ValidateName(element);
            break;
        case 2:
            response = ValidatePhoneNo(element);
            break;
        case 3:
            response = ValidateEmail(element);
            break;
        default:
            response = true;
            break;
    }

    if (response == true) {
        ShowNoError(element, index);

        return true;
    }
    else {
        ShowError(element, index, response);

        return false;
    }
}

function CheckBlankStatus(element, index, msg) {
    if (element.value.trim() === "") {
        ShowError(element, index, msg);

        return true;
    }
    else {
        ShowNoError(element, index);

        return false;
    }
}

function ShowError(element, index, msg) {
    errorCount++;

    errorMessages[index].classList.remove('element-hidden');

    errorMessages[index].innerText = msg;

    element.classList.add('input-error');
}

function ShowNoError(element, index) {
    errorMessages[index].classList.add('element-hidden');

    errorMessages[index].innerText = "";

    element.classList.remove('input-error');
}


function ValidateName(element) {
    if (element.value.length < 2) {
        return "Name must be atleast 2 characters long!";
    }
    else {
        return true;
    }
}

function ValidatePhoneNo(element) {
    var phoneno = /^(6|7|8|9)\d{9}$/;

    if (!element.value.match(phoneno)) {
        return "Please enter a valid contact number!";
    }
    else {
        return true;
    }
}

function ValidateEmail(element) {
    var reg = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
    
    if (!reg.test(element.value)) {
        return "Please enter a valid email address!";
    }
    else {
        return true;
    }
}

function clearPage() {
    courseStatus.remove();
    reason.remove();
}