// your code goes here ...
const tasks = [{
  age: 12,
  relationship: 'child',
  smoker: false
},{
  age: 65,
  relationship: 'grandparent',
  smoker: false
}];

console.log('Server running!');

const getValueInput = () =>{
  // const inputValue1 = document.querySelector("#domTextElement1").value;
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

  console.log(chkSmoker.checked);
  if (chkSmoker.checked ? smoker = "yes" : smoker = "no")

  document.querySelector("#output").innerHTML = `Age: ${inputValueAge}; Relationship: ${selectValueRel}; smoker? ${smoker}.`;
};

// const getValueInput = () =>{
//   let inputValue1 = document.querySelector(".add").value;
//   console.log(inputValue1)
//   // let inputValue2 = document.querySelector("#domTextElement2").value; 
//   // document.querySelector("#valueInput").innerHTML = `First input value: ${inputValue1} Second Input Value: ${inputValue2}`;
//   // document.querySelector("#log").innerHTML = `First input value: ${inputValue1}`
// };

// function logSubmit() {
//   console.log(log)
//   // age.textContent = `Age: ${e}`
//   log.textContent = `Add people ${log}`;
//   // e.preventDefault();
// }

// const form = document.querySelector('form');
// const log = document.querySelector('#log');

// const age = document.querySelector('#age').addEventListener('change', function(e) {
//   console.log(e.target.value);
//   form.addEventListener('submit', logSubmit(e.target.value));
// });
// form.addEventListener('submit', logSubmit(age));

// function GetSelectedValue(){
//   var e = document.getElementById("country");
//   var result = e.options[e.selectedIndex].value;
  
//   document.getElementById("result").innerHTML = result;
// }

// function GetSelectedText(){
//   var e = document.getElementById("country");
//   var result = e.options[e.selectedIndex].text;
  
//   document.getElementById("result").innerHTML = result;
// }