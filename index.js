const getValueInput = () =>{
  const inputValueAge = document.querySelector("#age").value;
  
  const selectValueRel = document.querySelector("#rel").value;
  const chkSmoker = document.querySelector("#smoker");
  let smoker = '';

  if ((inputValueAge == "")) { 
    document.querySelector("#ageErr").innerHTML = "Please enter your age";
    return false;
  } if (inputValueAge <= 0) {
    document.querySelector("#ageErr").innerHTML = "Please enter ranging from 1 to 100";
    return false;
  } 
  else {
    document.querySelector("#ageErr").innerHTML = "";
  }

  if (selectValueRel == "") {
    document.querySelector("#relErr").innerHTML = "Please select your relationship";
    return false;
  } else {
    document.querySelector("#relErr").innerHTML = "";
  }

  if (chkSmoker.checked ? smoker = "yes" : smoker = "no")

  document.querySelector("#output").innerHTML = `Age: ${inputValueAge}\nRelationship: ${selectValueRel}\nSmoker? ${smoker}.`;
};

 const formElement = document.querySelector('form#form')

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

 // handle the form event, check validity, convert form to JSON
 const handler = (event) => {
   event.preventDefault();
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

    //  document.querySelector("#debug").innerHTML = `age: ${age}\nRelationship: ${rel}\nSmoker: ${smoker}`;

     document.querySelector("#debug").innerHTML = JSON.stringify(output, undefined, 2);
   }
   document.querySelector("form").reset();
   document.querySelector("#output").innerHTML = "";
 }

 formElement.addEventListener("submit", handler)