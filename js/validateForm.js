const buttonSubmit = document.querySelector('button[data-type=submit]');
const form = buttonSubmit.parentNode;
const inputs = form.getElementsByTagName('input');

buttonSubmit.onclick = function () {
  for (const input of inputs) {
    let rule = input.getAttribute('data-rule');
    console.log('rule: ', rule);
    if(rule != 'radio' && rule != 'image') {
      hasError(input);
      window[rule](input);
    }
  }
};

const regex = {
    // word: /[a-zA-ZñÑ ]{3,}/,
    word: /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/,
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
