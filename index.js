const button = document.querySelector('.add');

let control = document.querySelector('.control');
console.log(control.parentNode);
console.log(control.childNodes);
console.log('See above');

const ageEl = document.querySelector('#age');
const relationshipEl = document.querySelector("#rel");
const smokerEl = document.querySelector("#smoker");
//   let smoker = '';

//   if (chkSmoker.checked ? smoker = "yes" : smoker = "no")

//   document.querySelector("#output").innerHTML = `Age: ${inputValueAge}\nRelationship: ${selectValueRel}\nSmoker? ${smoker}.`;


  if (button) {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      // validate fields
      let isAgeValid = checkAge();
      let isRelationshipValid = checkRelationship();
      let isSmokerValid = checkSmoker();
      console.log(isSmokerValid);

      let isFormValid = isAgeValid && isRelationshipValid;

      // document.querySelector("#output").textContent = `Age: ${isAgeValid}\n`; //Relationship: ${relationship}\nSmoker? ${smokerChecked}.`;
      // submit to the server if the form is valid
      if (isFormValid) {

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
      let valid = false;
      let smoker = '';
      const smokerChecked = smokerEl.checked;

      if (smokerChecked ? smoker = "yes" : smoker = "no")
      valid = true;
    }
  };


  const isRequired = value => value === '' ? false : true;
  const isBetween = (age, min, max) => age < min || age > max ? false : true;


// const getValueInput = () => {
//   const inputValueAge = document.querySelector("#age").value;
  
//   const selectValueRel = document.querySelector("#rel").value;
//   const chkSmoker = document.querySelector("#smoker");
//   let smoker = '';

//   // Validate data entry (age is required and > 0, relationship is required)
//   if ((inputValueAge == "")) { 
//     document.querySelector("#ageErr").innerHTML = "Please enter your age";
//     return false;
//   } if (inputValueAge <= 0) {
//     document.querySelector("#ageErr").innerHTML = "Please enter ranging from 1 to 100";
//     return false;
//   } 
//   else {
//     document.querySelector("#ageErr").innerHTML = "";
//   }

//   if (selectValueRel == "") {
//     document.querySelector("#relErr").innerHTML = "Please select your relationship";
//     return false;
//   } else {
//     document.querySelector("#relErr").innerHTML = "";
//   }

//   if (chkSmoker.checked ? smoker = "yes" : smoker = "no")

//   document.querySelector("#output").innerHTML = `Age: ${inputValueAge}\nRelationship: ${selectValueRel}\nSmoker? ${smoker}.`;
// };

//  const formElement = document.querySelector('form#form')

//  // convert the form to JSON
//  const getFormJSON = (form) => {
//    const data = new FormData(form);
//    return Array.from(data.keys()).reduce((result, key) => {
//      if (result[key]) {
//        result[key] = data.getAll(key)
//        return result
//      }
//      result[key] = data.get(key);
//      return result;
//    }, {});
//  };

//  // handle the form event and convert form to JSON
//  const handler = (event) => {
//    event.preventDefault();
//    const valid = formElement.reportValidity();
//    if (valid) {
//      const result = getFormJSON(formElement);
//      const isSmoker = !!(result.isSmoker && result.isSmoker === 'on')

//      // use spread
//      const output = {
//        ...result,
//        isSmoker
//      }
//      console.log(output)

//      console.log(JSON.stringify(output, undefined, 2));

//      const age = output.age;
//      const rel = output.rel;
//      const smoker = output.isSmoker;

//     //  document.querySelector("#debug").innerHTML = `age: ${age}\nRelationship: ${rel}\nSmoker: ${smoker}`;

//      document.querySelector("#debug").innerHTML = JSON.stringify(output, undefined, 2);
//    }
//    document.querySelector("form").reset();
//    document.querySelector("#output").innerHTML = "";
//  }

//  formElement.addEventListener("submit", handler)