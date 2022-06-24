const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small')
    small.innerText = message;
    
}
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    
}
function checkEmail(input) {
    const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input);
    }
    else {
        showError(input, 'Email is not valid')
    }
}

function checkRequired(inputArray) {
    inputArray.forEach(element => {
        if(element.value.trim() === '') {
            showError(element, `${getFieldName(element)} is required` )
        }
        else {
            showSuccess(element)
        }
    });
}
function getFieldName(input) {
    console.log(input.id.slice(1, 3));
    return  input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max) {
    if(input.value.length < min && input.value.length !== 0) {
        showError(input, `${getFieldName(input)} must be atlest ${min} characters`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }
}
function checkPasswordsMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords don\'t match' );
    }
}
//Event listeners 
form.addEventListener('submit', function(e) { 
    e.preventDefault();
    checkRequired([username, email, password, password2])
    checkLength(username, 3, 10)
    checkLength(password, 6, 15)
    checkEmail(email)
    checkPasswordsMatch(password, password2)

    // if(username.value === '') {
    //     showError(username, 'Username is required');
    // }
    // else {
    //     showSuccess(username)
    // }
    // if(email.value === '') {
    //     showError(email, 'Email is required');
    // } else if (!isValidEmail(email.value)) {
    //     showError(email, 'Email is not valid');
    // }
    // else {
    //     showSuccess(email)
    // }
    // if(password.value === '') {
    //     showError(password, 'Password is required');
    // }
    // else {
    //     showSuccess(password)
    // }
    // if(password2.value === '') {
    //     showError(password2, 'Confirm Password');
    // }
    // else {
    //     showSuccess(password2)
    // }
    
})