// console.log("Hello World");
// setTimeout(() =>{
//     alert("Hey Ram");
// }, 2000);
//  for ( let i = 0; i < 100; i++) {
//     console.log(i);

//  }
//  console.log("I love javascript");


// callback

//  function sum(a,b,cb){
//     let ans = a+b;
//     cb(ans);
//  }

//   function DisplaySum(result){
//     const h1 = document.createElement("h1");
//     h1.innerHTML = `The sum of number is:${result}`;
//     document.body.append(h1);
//   }
//   sum(8, 9, DisplaySum);


// promise

//  const res = new Promise((resolve,rejected)=>{
//   resolve("Promise Fulfilled");
//   rejected("server error");

// });
// res.then((data ) => console.log(data)).catch((error) => console.log((error)));


// const res = new Promise((resolve,rejected)=>{
//  let success = true; 
//  if (success) {
//   resolve("Data Fetched");
//  } else {
//   rejected("server Error");
//  }

// });
// res.then((data ) => console.log(data))
// .catch((error) => console.log((error)));


// catFact

// const fetchedData = ()=>{
//   fetch(`https://catfact.ninja/fact`)
//   .then((res) => res.json())
//   .then((data) => {
//     const h1 = document.createElement("h1");
//     h1.innerHTML = data.fact;
//     document.body.append(h1);
//   })
//   .catch((error) => console.log(error));
// };

// fetchedData();


// Asynchronous and Await


const fetchedData = async()=>{
try {
 
    const res = await fetch(`https://catfact.ninja/fact`);
     const data = await res.json();
     const h1 = document.createElement("h1")
     h1.innerHTML = data.fact;
     document.body.append(h1);
}catch(error) {
  console.log(error);
} 
};
fetchedData();

