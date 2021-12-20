let postalRe = /\d{5}[\-]\d{4}[\-][A-Z]{2}/, 
    emailRe = /.+[@].+\.((com)|(edu)|(org))/, 
    phoneNumRe = /[+]\d{3}[\-]\d{4}[\-]\d{6}/;

let emailInput = document.querySelector('#inputEmail'),
    postalInput = document.querySelector('#inputPostCode'),
    phoneNumInput = document.querySelector('#inputPhoneNum'),
    mainForm = document.querySelector('form');

mainForm.addEventListener('submit', check);

// warning function for incorrect input field(s)

function warning(inputField, message, alertClass) {
    let alertBox = document.createElement('div');
    let parentElem = inputField.parentElement;
    alertBox.setAttribute('class', 'alert');
    alertBox.setAttribute('class', alertClass);
    alertBox.innerText = message;
    parentElem.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove();
    }, 5000);
}

// check function for the input fields

function check (e) {
    e.preventDefault();
    let emailCheck = false, postalCheck = false, phoneNumCheck = false;
    
    if (emailRe.exec(emailInput.value) != null) {
        if (emailInput.value === emailRe.exec(emailInput.value)[0]) {
            emailCheck = true;
            console.log('email correct');
        }
    }
    if (postalRe.exec(postalInput.value) != null) {
        if (postalInput.value === postalRe.exec(postalInput.value)[0]) {
            postalCheck = true;
            console.log('postal correct');
        }
    }
    if (phoneNumRe.exec(phoneNumInput.value) != null) {
        if (phoneNumInput.value === phoneNumRe.exec(phoneNumInput.value)[0]) {
            phoneNumCheck = true;
            console.log('phoneNum correct')
        }
    }
    
    if (emailCheck && postalCheck && phoneNumCheck) {
        window.alert('Success! All the fields were input correctly!');
    } else {
        if (!emailCheck) {
            warning(emailInput, "Please input email in the required format", 'alert-danger')
        }
        if (!postalCheck) {
            warning(postalInput, "Please input postcode in the required format", 'alert-danger')
        }
        if (!phoneNumCheck) {
            warning(phoneNumInput, "Please input phone number in the required format", 'alert-danger')
        }
    }
}
