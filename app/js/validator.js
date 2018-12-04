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
  console.log('llegue');
  fetch('http://localhost:3000/users/login', {
    // fetch('http://ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000/users/login', {
    method: 'POST',
    mode: "cors",
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


// fetch('https://easy-motion.herokuapp.com/users/1',{
// method: 'GET',
// headers: {
//   'Content-Type': 'application/json',
//   'Authorization': 'Bearer $2b$10$KYmh6UKvuItTI.N867sUkOhgITgrS9SJZRlb2.ZOvrOK0kYpWVlV6'
// },
// })
// .then(response => response)
// .then(data => {
// //console.log(data.data)
// let jamon = data.data;
// console.log(jamon);
// })

    //     fetch('https://easy-motion.herokuapp.com/auth/register', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       email: 'christopher_x10x@hotmail.com',
    //       name: 'chris',
    //       password: '1234567',
    //       height: '100',
    //       weight: '100'
    //     })
    // })
    // .then(function(response) {
    //     console.log('response =', response);
    //     return response.json();
    // })
    // .then(function(data) {
    //     console.log('data = ', data);
    // })
    // .catch(function(err) {
    //     console.error(err);
    // });

    // fetch('http://ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000/services/', {
    //   method: 'GET',
    //   headers: {
    //     // 'Access-Control-Allow-Origin': '*',
    //     'Authorization': 'Bearer $2b$04$oI4gKa14FMPA3i8sjYlHZONFzHBQ1kfzbLDYhd2KYD3rM9WNe8Bg.',
    //     "Content-Type": "application/json"
    //   }
    // })
    // .then(function(response) {
    //     console.log('response =', response);
    //     return response.json();
    // })
    // .then(function(data) {
    //     console.log('data = ', data);
    // })
    // .catch(function(err) {
    //     console.log('err', err);
    // });


}
