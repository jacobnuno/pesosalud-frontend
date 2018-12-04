const apiUrl = 'ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000';
const buttonSubmit = document.querySelector('button[data-type=submit]');
const apiMethod = buttonSubmit.getAttribute('data-method');
const form = buttonSubmit.parentNode;
const inputs = form.getElementsByTagName('input');

buttonSubmit.onclick = function () {
  for (const input of inputs) {
    let rule = input.getAttribute('data-rule');
    if(rule != 'radio' && rule != 'image' && rule != 'password') {
      hasError(input);
      window[rule](input);
    }
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

function resetFormGroup(input) {
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
        resetFormGroup(input);
    }
}

function word(input) {
    if (!regex.word.test(input.value)) {
        addError(input);
    }
}

function number(input) {
    if (!regex.number.test(input.value)) {
        addError(input);
    }
}

function decimal(input) {
    if (!regex.decimal.test(input.value)) {
        addError(input);
    }
}

function date(input) {
    if (!regex.date.test(input.value.replace(/-/g, ''))) {
        addError(input);
    }
}

function hour(input) {
    if (!regex.hour.test(input.value)) {
        addError(input);
    }
}

function email(input) {
    if (!regex.email.test(input.value)) {
        addError(input);
    }
}
function userLogin() {
  console.log('llegue');
  // fetch('http://localhost:3000/users/login', {
    fetch('http://ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000/users/login', {
    method: 'POST',
    // mode: "cors",
    // credentials: 'same-origin',
    headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: 'ceoe1996@hotmail.com',
      password: '1234'
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

function dietsAdd() {
  console.log("entro");
  fetch('http://ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000/diets/', {
    method: 'POST',
      // mode: "cors",
      // credentials: 'same-origin',
    headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/json'
    },
    body: const body = {
      Name: document.getElementsById('txtName').value,
      Description: document.getElementsById('txtDescription').value,
    },
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

function appointmentAdd() {
  fetch('http://ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000/appointments/', {
    method: 'POST',
      // mode: "cors",
      // credentials: 'same-origin',
    headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/json'
    },
    body: const body = {
      Service: document.getElementsById('txtService').value,
      Date: document.getElementsById('txtDate').value,
      Hour: document.getElementsById('txtHour').value,
    }
    },
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

function appointmentEdit() {
  fetch('http://ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000/appointments/id', {
    method: 'PUT',
      // mode: "cors",
      // credentials: 'same-origin',
    headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/json'
    },
    body: const body = {
      Status: document.getElementsById('txtStatus').value,
    }
    },
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

function dietsEdit() {
  fetch('http://ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000/diets/id', {
    method: 'PUT',
      // mode: "cors",
      // credentials: 'same-origin',
    headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/json'
    },
    body: const body = {
      Name: document.getElementsById('txtName').value,
      Description: document.getElementsById('txtDescription').value,
    }
    },
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

function dietsFind() {
  fetch('http://ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000/diets/id', {
    method: 'GET',
      // mode: "cors",
      // credentials: 'same-origin',
    headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/json'
    },
    body: const body = {
      Date: document.getElementsById('txtDate').value,
      Hour: document.getElementsById('txtHour').value,
    }
    },
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

window.onload = function() {
  const functions = {
    dietsGetAll: dietsGetAll(),
  };
  const table=getElementsByTagName('table')[0];
  const method = table.getAttribute('data-method');
  functions[method];
}

window.onload = function() {
  const functions = {
    appointmentsGetAll: appointmentsGetAll(),
  };
  const table=getElementsByTagName('table')[0];
  const method = table.getAttribute('data-method');
  functions[method];
}
