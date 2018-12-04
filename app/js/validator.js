// const userAPI = require('api/users');

const apiUrl = 'ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000';
const buttonSubmit = document.querySelector('button[data-type=submit]');
const apiMethod = buttonSubmit.getAttribute('data-method');
const form = buttonSubmit.parentNode;
const inputs = form.getElementsByTagName('input');

buttonSubmit.onclick = function () {
    let formError = false;
    for (const input of inputs) {
        let rule = input.getAttribute('data-rule');
        if (rule != 'radio' && rule != 'image' && rule != 'password') {
            hasError(input);
            let error = window[rule](input);
            formError = (formError !=  true) ?  error : formError;
        }
    }

    if(!formError) {
      // console.log(apiMethod);
      window[apiMethod](form);
    }
};

const regex = {
    word: /^[a-zA-Z\s]+$/,
    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    number: /^\d+$/,
    decimal: /^(\d+\.?\d{0,4}|\.\d{1,4})$/,
    date: /^[1-2][0-9]{3}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-2])$/,
    hour: /^([01][0-9]|2[0-3]:[0-5][0-9])$/,
};

function getError(input) {
    const inputRule = input.getAttribute('data-rule');
    return `The field should be a valid ${inputRule}`;
}


function clearError(input) {
    // Remove the success and error classes
    input.parentNode.classList.remove('has-error');
    // and remove span error
    input.parentNode.removeChild(input.parentNode.querySelector('span.has-error'));
}

function addError(input) {
    const divParent = input.parentNode;
    const newSpan = document.createElement('span');
    newSpan.appendChild(document.createTextNode(getError(input)));
    newSpan.classList.add('has-error');
    divParent.appendChild(newSpan);
    divParent.classList.add('has-error');
}

function hasError(input) {
    const divParent = input.parentNode;
    if (divParent.querySelector('span.has-error')) {
        clearError(input);
    }
}

function word(input) {
    if (!regex.word.test(input.value)) {
        addError(input);
        return true;
    }
    return false;
}

function number(input) {
    if (!regex.number.test(input.value)) {
      addError(input);
      return true;
  }
  return false;
}

function decimal(input) {
    if (!regex.decimal.test(input.value)) {
      addError(input);
      return true;
  }
  return false;
}

function date(input) {
    if (!regex.date.test(input.value.replace(/-/g, ''))) {
      addError(input);
      return true;
  }
  return false;
}

function hour(input) {
    if (!regex.hour.test(input.value)) {
      addError(input);
      return true;
  }
  return false;
}

function email(input) {
    if (!regex.email.test(input.value)) {
      addError(input);
      return true;
  }
  return false;
}

// API USER
function userLogin() {
    fetch('http://ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: 'ceoe1996@hotmail.com',
            password: '1234',
        }),
    })
    .then(function(response) {
        console.log('response =', response);
      return response.json();
  })
  .then(function(data) {
      console.log('data = ', data);
  })
  .catch(function(err) {
      console.log('err', err);
  });
}
