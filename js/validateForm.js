const { validator } = require('./index');

const buttonSubmit = document.querySelector('button[data-type=submit]');
console.log('buttonSubmit', buttonSubmit);
const form = buttonSubmit.parentNode;
console.log('form', form);
const inputs = form.getElementsByTagName('input');
console.log('inputs', inputs);

buttonSubmit.onclick = function () {
  for (const input of inputs) {
    let rule = input.getAttribute('data-rule');
    console.log('rule: ', rule);
    if(rule != 'radio' && rule != 'image') {
      validator.rule(input);
    }
  }
};

function word(input) {
    if(this.regex.word.test(input.value)) {
      addError(input);
    }
}

function number(data) {
    return (this.regex.number.test(data));
}

function decimal(data) {
    return (this.regex.decimal.test(data));
}

function date(data) {
    return (this.regex.date.test(data));
}

function hour(data) {
    return (this.regex.hour.test(data));
}

function email(data) {
    return (this.regex.email.test(data));
}

// Shows the errors for a specific input
  // function showErrorsForInput(input, errors) {
  //   // This is the root of the input
  //   const formGroup = closestParent(input.parentNode, "form-group");
  //   // First we remove any old messages and resets the classes
  //   resetFormGroup(formGroup);
  //   // If we have errors
  //   if (errors) {
  //     // we first mark the group has having errors
  //     formGroup.classList.add("has-error");
  //     // then we append all the errors
  //     _.each(errors, function(error) {
  //       addError(messages, error);
  //     });
  //   } else {
  //     // otherwise we simply mark it as success
  //     formGroup.classList.add("has-success");
  //   }
  // }

function getError(input) {
  let inputRule = input.getAttribute('data-rule');
  return `The field should be a valid ${inputRule}`;
}

function addError(input, error) {
    const divParent = input.parentNode;
    let block = divParent.createElement('span');
    block.innerHTML = this.getError(input);
    divParent.classList.add('has-error');
}
