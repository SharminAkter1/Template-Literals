const name = 'Sharmin';
const age = 18;
const job = 'Web Developer';
const city = 'Dhaka';
let html;

//without template strings (es5)
html = '<ul><li>Name: '+ name +'</li><li>Age: '+ age +'</li><li>Job: '+ job +'<li>City: '+ city +'</ul>';

html = '<ul>' +
       '<li>Name: '+ name +' </li>'+
       '<li>Age: '+ age +' </li>'+
       '<li>Job: '+ job +' </li>'+
       '<li>City: '+ city +' </li>'+
       '</ul>';

function hello(){
       return 'Hi';
}
//With template strings (es6)


html = `
      <ul>
      <li>Name:${name}</li>
      <li>Age: ${age}</li>
      <li>Job: ${job}</li>
      <li>City: ${city}</li>
      <li>${2+2}</li>
      <li>${2*5}</li>
      <li>${hello()}</li>
      <li>${age > 20 ? 'Over 20' : 'Under 20'}</li>
      </ul>
      `;


document.body.innerHTML = html;