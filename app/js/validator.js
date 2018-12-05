class Validator {
  static validate(form) {
    let formError = false;
    const inputs = form.getElementsByTagName('input');
    for (const input of inputs) {
      let rule = input.getAttribute('data-rule');
      if (rule != 'radio' && rule != 'image' && rule != 'password') {
        hasError(input);
        let error = window[rule](input);
        formError = (formError !=  true) ?  error : formError;
      }
    }

    if (!formError) {
      return false;
    }
    return true;
  }

  static regex() {
    return {
      word: /^[a-zA-Z\s]+$/,
      email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      number: /^\d+$/,
      decimal: /^(\d+\.?\d{0,4}|\.\d{1,4})$/,
      date: /^[1-2][0-9]{3}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-2])$/,
      hour: /^([01][0-9]|2[0-3]:[0-5][0-9])$/,
    };
  }

  static getError(input) {
    const inputRule = input.getAttribute('data-rule');
    return `The field should be a valid ${inputRule}`;
  }

  static clearError(input) {
    // Remove the success and error classes
    input.parentNode.classList.remove('has-error');
    // and remove span error
    input.parentNode.removeChild(input.parentNode.querySelector('span.has-error'));
  }

  static addError(input) {
    const divParent = input.parentNode;
    const newSpan = document.createElement('span');
    newSpan.appendChild(document.createTextNode(getError(input)));
    newSpan.classList.add('has-error');
    divParent.appendChild(newSpan);
    divParent.classList.add('has-error');
  }

  static hasError(input) {
    const divParent = input.parentNode;
    if (divParent.querySelector('span.has-error')) {
      this.clearError(input);
    }
  }

  static word(input) {
    if (!this.regex.word.test(input.value)) {
      this.addError(input);
      return true;
    }
    return false;
  }

  static number(input) {
    if (!this.regex.number.test(input.value)) {
      this.addError(input);
      return true;
    }
    return false;
  }

  static decimal(input) {
    if (!this.regex.decimal.test(input.value)) {
      this.addError(input);
      return true;
    }
    return false;
  }

  static date(input) {
    if (!this.regex.date.test(input.value.replace(/-/g, ''))) {
      this.addError(input);
      return true;
    }
    return false;
  }

  static hour(input) {
    if (!this.regex.hour.test(input.value)) {
      this.addError(input);
      return true;
    }
    return false;
  }

  static email(input) {
    if (!this.regex.email.test(input.value)) {
      this.addError(input);
      return true;
    }
    return false;
  }
}

export default Validator;
