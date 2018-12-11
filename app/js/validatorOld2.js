// const userAPI = require('api/users');

const apiUrl = 'https://pesoysalud.herokuapp.com';
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

  if (!formError) {
    // console.log(apiMethod);
    window[apiMethod](form);
  }
};

const regex = {
  word: /^[a-zA-Z\s]+$/,
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
function addUser() {
fetch('/users/', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-wwww-form-urlencoded',
    },
    body: JSON.stringify({
      Email: document.getElementById('txtEmail').value,
      Gender: 'M',
      Name: document.getElementById('txtName').value,
      Password: document.getElementById('txtPass').value,
      Phone: document.getElementById('txtPhone').value,
      UserType: 1,
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

function userLogin() {
  fetch('https://pesoysalud.herokuapp.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body,
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

function addDiet() {

  fetch('https://pesoysalud.herokuapp.com/diets/diets/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Nombre: document.getElementById('txtEmail').value,
      Descripcion: document.getElementsById('txtDescription').value,
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

function addAppointment() {
  fetch('https://pesoysalud.herokuapp.com/appointment/', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-wwww-form-urlencoded',
    },
    body: JSON.stringify({
      Service: document.getElementById('txtService').value,
      Date: document.getElementById('txtService').value,
      Hour: document.getElementById('txtHour').value,

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

function findAppointment() {
;
  fetch('https://pesoysalud.herokuapp.com/appointment/', {

    method: 'GET',
    mode: "cors",
      // credentials: 'same-origin',
    headers: {
      //'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'JSON'
    },
    body: {
      Date: document.getElementById('txtDate').value,

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
}
function promotionAdd() {
    const body = {
      dateStart: document.getElementById('txtdateStart').value,
      dateEnd:   document.getElementById('txtdateEnd').value,
      cantidad:  document.getElementById('txtcantidad').value,
    }
      fetch('http://ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000/promotions', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          },
          body:body,
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

  function promotionFind() {
    const body = {
      dateStart: document.getElementById('txtdateStart').value,
      dateEnd:   document.getElementById('txtdateEnd').value,
      cantidad:  document.getElementById('txtcantidad').value,
    }
      fetch('http://ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000/promotions', {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          },
          body:body,
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


  function promotionEdit() {
    const body = {
      dateStart: document.getElementById('txtdateStart').value,
      dateEnd:   document.getElementById('txtdateEnd').value,
      // cantidad:  document.getElementById('txtcantidad').value
    }
      fetch('http://ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000/promotions', {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          },
          body:body,
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


  function servicesAdd() {
    const body = {
      nameSer: document.getElementById('txtNameSer').value,
      price: document.getElementById('txtPrice').value,
      duration: document.getElementById('txtDuration').value,
    }
      fetch('http://ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000/promotions', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          },
          body:body,
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

  function servicesFind() {
    const body = {
      nameSer: document.getElementById('txtNameSer').value,
      price: document.getElementById('txtPrice').value,
      duration: document.getElementById('txtDuration').value,
    }
      fetch('http://ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000/promotions', {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          },
          body:body,
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

function servicesEdit() {
  const body = {
    // nameSer: document.getElementById('txtNameSer').value
    price: document.getElementById('txtPrice').value,
    duration: document.getElementById('txtDuration').value,
  }
    fetch('http://ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000/promotions', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            body:body,
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

// window.onload = function() {
//   const functions = {
//     dietsGetAll: dietsGetAll(),
//   };
//   const table=getElementsByTagName('table')[0];
//   const method = table.getAttribute('data-method');
//   functions[method];
// }
//
// window.onload = function() {
//   const functions = {
//     appointmentsGetAll: appointmentsGetAll(),
//   };
//   const table=getElementsByTagName('table')[0];
//   const method = table.getAttribute('data-method');
//   functions[method];
// }
//
// window.onload = function (){
//   const functions = {
//     promotionsGetAll: promotionsGetAll(),
//   };
//   const table =getElementsByTagName('table')[0];
//   const method = table.getAttribute('data-method');
//   functions[method];
// }
//
// window.onload = function (){
//   const functions = {
//     servicesGetAll: servicesGetAll(),
//   };
//   const table =getElementsByTagName('table')[0];
//   const method = table.getAttribute('data-method');
//   functions[method];
// }