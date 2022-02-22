const button = document.querySelector('.add');

const ageEl = document.querySelector('#age');
const relationshipEl = document.querySelector("#rel");
const smokerEl = document.querySelector("#smoker");
const smoker = '';

if (button) {
  button.parentElement.setAttribute('data-interactive', '');
  button.removeAttribute('hidden');
  button.addEventListener('click', (e) => {
    e.preventDefault();

    // validate fields
    let isAgeValid = checkAge();
    let isRelationshipValid = checkRelationship();
    let isSmoker = checkSmoker();
    const age = isAgeValid && ageEl.value;
    const relationship = isRelationshipValid && relationshipEl.value;
    const smoker = isSmoker ? 'yes' : 'no';

    let isFormValid = isAgeValid && isRelationshipValid;
    // submit to the server if the form is valid
    if (isFormValid) {
      document.querySelector("#output").textContent = `Age: ${age}\nRelationship: ${relationship}\nSmoker? ${smoker}.`;
    }
  });

  const checkAge = () => {
    let valid = false;
    const min = 1;
    const max = 100;
    const age = ageEl.value.trim();

    if (!isRequired(age)) {
      document.querySelector("#ageErr").textContent = 'Age cannot be blank';
    } else if (!isBetween(age, min, max)) {
      document.querySelector("#ageErr").textContent = `Age must be between ${min} and ${max} years.`
    } else {
      document.querySelector("#ageErr").textContent = '';
      valid = true;
    }
    return valid;
  };

  const checkRelationship = () => {
    let valid = false;
    const relationship = relationshipEl.value;

    if (relationship == '') {
      document.querySelector("#relErr").textContent = 'Please select your relationship';
    } else {
      document.querySelector("#relErr").textContent = '';
      valid = true;
    }
    return valid;
  };

  const checkSmoker = () => {
    let smoker = false;
    const smokerChecked = smokerEl.checked;
    if (smokerChecked) { smoker = true }
    return smoker;
  }
};

const isRequired = value => value === '' ? false : true;
const isBetween = (age, min, max) => age < min || age > max ? false : true;

const formElement = document.querySelector('form#form');

 // convert the form to JSON
 const getFormJSON = (form) => {
   const data = new FormData(form);
   return Array.from(data.keys()).reduce((result, key) => {
     if (result[key]) {
       result[key] = data.getAll(key)
       return result
     }
     result[key] = data.get(key);
     return result;
   }, {});
 };

 const handler = (e) => {
   e.preventDefault();
   console.log("To start for submit")
   const valid = formElement.reportValidity();
   if (valid) {
     const result = getFormJSON(formElement);
     const isSmoker = !!(result.isSmoker && result.isSmoker === 'on')

     // use spread
     const output = {
       ...result,
       isSmoker
     }
     console.log(output)

     console.log(JSON.stringify(output, undefined, 2));

     const age = output.age;
     const rel = output.rel;
     const smoker = output.isSmoker;

    //  document.querySelector("#debug").textContent = JSON.stringify(output, undefined, 2);
   }
   document.querySelector("form").reset();
   document.querySelector("#output").innerHTML = "";
 }
  formElement.addEventListener("submit", handler);