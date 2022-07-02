// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*   getInstruction("mashedPotatoes", 0, (step1) => {x
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error)); */



// Iteration 1 - using callbacks
/* getInstruction(
  "steak",
  0,
  (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    // ADD NEXT STEP HERE
    getInstruction(
      "steak",
      1,
      (step2) => {
        document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "steak",
          2,
          (step3) => {
            document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "steak",
              3,
              (step4) => {
                document.querySelector(
                  "#steak"
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "steak",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#steak"
                    ).innerHTML += `<li>${step5}</li>`;
                    // Bonus 1
                    document
                      .querySelector("#steakImg")
                      .removeAttribute("hidden");
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
); */
// ...

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then (step => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 1);
   })
   .then (step => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 2);
   })
   .then (step => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 3);
   })
   .then (step => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 4);
   })
   .then (step => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 5);
   })
   .then (step => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 6);
   })
   .then (step => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 7);
   })
   .then (step => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    document.querySelector('#steak').innerHTML += `<li>Steak is ready!</li>`;
    document.querySelector('#steakImg').removeAttribute("hidden");
   })
   .catch(errorNoInstruction => console.log(errorNoInstruction));
// ...

// Iteration 3 using async/await
async function makeBroccoli() {
  for (let i = 0; i < broccoli.length; i++) {
    await obtainInstruction("broccoli", i)
    .then( step => {
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    }) .catch(errorNoInstruction => console.log(errorNoInstruction));
  }
  await obtainInstruction("broccoli", 6 /* Maybe possible to use .length */)
  .then(() => {
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  })
}
makeBroccoli();

async function makeMashedPotatoes() {
  for (let i = 0; i < mashedPotatoes.length; i++) {
    await obtainInstruction("mashedPotatoes", i)
    .then( step => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
    }) .catch(errorNoInstruction => console.log(errorNoInstruction));
  }
  await obtainInstruction("mashedPotatoes", 4 /* Maybe possible to use .length */)
  .then(() => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes is ready!</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  })
}
makeMashedPotatoes();
// ...

// Bonus 2 - Promise all

Promise.all(brusselsSprouts)
  .then ( () =>{
    for (let i = 0; i < brusselsSprouts.length; i++) {
    obtainInstruction("brusselsSprouts", i)
    .then ( step => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
    }) .catch(errorNoInstruction => console.log(errorNoInstruction)); 
    }
  }     
  )  
/*   .then(() => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch(errorNoInstruction => console.log(errorNoInstruction));     */


// ...