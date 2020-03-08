
let PIZZA = document.querySelector(".pizza");
let SAUCE = document.querySelector(".sauce");
let CHEESE = document.querySelector(".cheese");
let cau = document.querySelector("#cau");
let who = document.querySelector("#who");
let tra = document.querySelector("#tra");
let cur = document.querySelector("#cur");
let cre = document.querySelector("#cre");
let mar = document.querySelector("#mar");
let che = document.querySelector("#che");
let noche = document.querySelector("#noche");
let xtrche = document.querySelector("#xtrche");


let menuForm = document.querySelector("#form1");
menuForm.addEventListener("change", (e)=> {
  e.preventDefault();
  if(cau.checked == true) {
    console.log("cauliflower");
    PIZZA.style.backgroundColor = "cornsilk";
  } else if (who.checked == true) {
    console.log("whole wheat");
    PIZZA.style.backgroundColor = "darkgoldenrod";
  } else if (tra.checked == true) {
    console.log("traditional");
    PIZZA.style.backgroundColor = "wheat";
  }
});

// I'll try click as test, then change as final
// can I nest if statements?
let menuForm2 = document.querySelector("#form2");
menuForm2.addEventListener("change", (e)=> {
  e.preventDefault();
if(cau.checked == false && who.checked == false && tra.checked == false) {
    alert("must start with dough");
    // reset to unchecked radio

  } else if (cau.checked == true || who.checked == true || tra.checked == true) {
    if(cur.checked == true) {
      console.log("curry");
      SAUCE.style.visibility = "visible";
      SAUCE.style.backgroundColor = "orange";
    } if (cre.checked == true) {
      console.log("cream");
      SAUCE.style.visibility = "visible";
      SAUCE.style.backgroundColor = "oldlace";
    } if (mar.checked == true) {
      console.log("marinara");
      SAUCE.style.visibility = "visible";
      SAUCE.style.backgroundColor = "tomato";
    }
  }
});


let menuForm3 = document.querySelector("#form3");
menuForm3.addEventListener("change", (e)=> {
  e.preventDefault();
  if(cau.checked == false && who.checked == false && tra.checked == false
  && cur.checked == false && cre.checked == false && mar.checked == false){
   alert("you must check dough and sauce first");
  // reset to unchecked radio
  } else if (cur.checked == true || cre.checked == true || mar.checked == true) {
     if(che.checked == true) {
       console.log("cheesy");
       CHEESE.style.visibility = "visible";
       CHEESE.style.backgroundColor = "lightyellow";
     } else if (noche.checked == true) {
       console.log("not cheesy");
       CHEESE.style.visibility = "hidden";
     } else if (xtrche.checked == true) {
       console.log("extra cheesy")
      CHEESE.style.visibility = "visible";
      CHEESE.style.backgroundColor = "gold";
     }
  }
});




// REQUIRE DOUGH FIRST? THEN SAUCE, THEN TOPPINGS?

// how do I use radios above?

// let menuForm2 = document.querySelector("form2");
// menuForm.addEventListener("change", (e)=> {
//   e.preventDefault();
//   // if cur.checked
//   // if cre.checked
//   // if mar.checked

// });


// let menuForm3 = document.querySelector("form3");
// menuForm.addEventListener("change", (e)=> {
//   e.preventDefault();
//  // combine all toppings, like photo one earlier
// });







// below: four values for toppings:

// <img id="ing1" src="https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583622483/spinach.png" alt="topping">
//           <img id="ing2" src="https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583622483/tomatoes.png" alt="topping">
//           <img id="ing3" src="https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583622483/bacon.png" alt="topping">
//           <img id="ing4" src="https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583622483/mushroom.png" alt="topping">
