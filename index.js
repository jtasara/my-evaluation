const button = document.querySelector('.add');

const ageEl = document.querySelector('#age');
const relationshipEl = document.querySelector("#rel");
const smokerEl = document.querySelector("#smoker");
const smoker = '';
let listT = document.querySelector('#people');

let list = [];

if (button) {
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

    // To submit to the server if the form is valid
    if (isFormValid) {
      // document.querySelector("#output").textContent = `Age: ${age}\nRelationship: ${relationship}\nSmoker? ${smoker}.`;
      let entry = document.createElement('li');
      entry.appendChild(document.createTextNode(`Age: ${age}; Relationship: ${relationship}; Smoker? ${smoker}.`));
      listT.appendChild(entry);

      let addAge = age;
      let addRelationship = relationship;
      let addSmoker = smoker;

      const person = {
        id: Math.random().toString(),
        age: addAge,
        relationship: addRelationship,
        smoker: addSmoker
      };

      list.push(person);
      console.log(list);
      localStorage.setItem('list', JSON.stringify(list));
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

const handler = (e) => {
  e.preventDefault();

  const server = localStorage.list;
  console.log('JSON Serialization: ', server);

  document.querySelector("form").reset();
  document.querySelector("#people").innerHTML = "";
}
formElement.addEventListener("submit", handler);
