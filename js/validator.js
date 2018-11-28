/**
  * [Validator-
  *The class validates and specifies the syntax rules of the data]
*/
class Validator {
    /**
    * [word Regular expression for the words introduced for the user ]
    * @type {[varchar]}
    * [email Regular expression for add email in data]
    * @type {[varchar]}
    */
    static get regex() {
        return {
            word: /[a-zA-ZñÑ ]{3,}/,
            email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            number: /^\d+$/,
            decimal: /^(\d+\.?\d{0,4}|\.\d{1,4})$/,
            date: /^[1-2][0-9]{3}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-2])$/,
            hour: /^([01][0-9]|2[0-3]:[0-5][0-9])$/,
        };
    }

    /**
     * ["word" Fuction for validated word in data ]
     * @param  {[Object]} data [Any word inside API to add or updated regiters]
     * @return {[Fuction]}      [Fuction to test regular expression inside the words ]
    */
    // static word(data) {
    //     return (Validator.regex.word.test(data));
    // }

    static word(input) {
        if(this.regex.word.test(input.value)) {
            this.addError(input);
        }
    }

    static number(data) {
        return (Validator.regex.number.test(data));
    }

    static decimal(data) {
        return (Validator.regex.decimal.test(data));
    }

    static date(data) {
        return (Validator.regex.date.test(data));
    }

    static hour(data) {
        return (Validator.regex.hour.test(data));
    }

    static image(data) {
        return data === 'image/jpeg';
    }

    /**
     * ["required" fuction for validated when data introduced its empty or incorrect]
     * @param  {[Object]} data [Data introduced by user ]
     * @return {[Fuction]}      [Fuction for compare data with other cases]
    */
    static required(data) {
        return data !== undefined && data !== null && data.length;
    }

    /**
     * ["email" Fuction to Valited regular expression to entry data to e-mail ]
     * @param  {[Object]} data [Data introduced by user, to validate]
     * @return {[Fuction]}      [Fuction to validate the rules with regular expression]
    */
    static email(data) {
        return (Validator.regex.email.test(data));
    }

    /**
     * [validate Fuction general to validate with diferent rules and details]
     * @param  {[Object]}   rules [validate with especific rule in especial case of data]
     * @return {[message]}         [Details to validate the mistake ]
    */
    // static validate(rules) {
    //     const errors = [];
    //
    //     for (let part in rules) {
    //         for (let field in rules[part]) {
    //             let validators = rules[part][field].split(',');
    //                 validators.forEach((f) => {
    //                 if (!Validator[f](req[part][field] || '')) {
    //                     // if (Array.isArray(error.details[field])) {
    //                     //   error.details[field].push(`The field ${field} should be a valid ${f}`);
    //                     // } else {
    //                     //   error.details[field] = [`The field ${field} should be a valid ${f}`];
    //                     // }
    //                     errors.push({ error: `The field ${field} should be a valid ${f}` });
    //                 }
    //             });
    //         }
    //     }
    //     return errors.length ? errors : 0;
    // }

    static getError(input) {
        const inputRule = input.getAttribute('data-rule');
        return `The field should be a valid ${inputRule}`;
    }

    static addError(input) {
        const divParent = input.parentNode;
        const block = divParent.createElement('span');
        block.innerHTML = this.getError(input);
        divParent.classList.add('has-error');
    }
}

module.exports = Validator;
