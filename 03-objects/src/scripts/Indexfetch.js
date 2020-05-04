import fetchfunctions from './fetch.js';


// fetchfunctions.getAllFirstNames(data);
// console.log (fetchfunctions.getAllFirstNames(data));

idProblem.addEventListener ('click',e =>{
  console.log("before call")
  fetchfunctions.showDelayProblem();
  console.log ("after call")
});
idSolution.addEventListener ('click',e =>{
  console.log("before call")
  fetchfunctions.showDelaySolution();
  console.log ("after call")
}); 
  
  
  fetchfunctions.getUsers();
  fetchfunctions.workWithData();
  const me = {"id": 11,
    "name": "Sahar Gresham",
    "username": "Sarah",
    "email": "helloS@april.biz",
    "address": {
      "street": "Sierra Light",
      "suite": "Apt. 200",
      "city": "Calgary",
      "zipcode": "T3H-35T",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-403-587-3434",
    "website": "awesome.org",
    "company": {
      "name": "Greatness",
      "catchPhrase": "Multi-layered client-server Awesomeness",
      "bs": "harness real-time Presence"
    
  },

    }
    const sMe= JSON.stringify (me)
    console.log( sMe);
    fetchfunctions.postData('https://jsonplaceholder.typicode.com/users',me)
  .then(data => {
    console.log(data); // JSON data parsed by `response.json()` call
  });