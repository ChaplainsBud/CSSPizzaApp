
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
let top1 = document.querySelector("#ing1");
let top2 = document.querySelector("#ing2");
let top3 = document.querySelector("#ing3");
let top4 = document.querySelector("#ing4");

// put this in a form? can I use the same form for two functions?
let pd = document.querySelector("#price-display");
// pd.innerHTML = "price" ... according to array of checkboxes?
// if nodelist == 2, 5; 3, 5.50; 4, 6.

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
    cur.checked = false;
    cre.checked = false;
    mar.checked = false;
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
    che.checked = false;
    noche.checked = false;
    xtrche.checked = false;
  } else if (cur.checked == true || cre.checked == true || mar.checked == true) {
     if(che.checked == true) {
       console.log("cheesy");
       CHEESE.style.visibility = "visible";
       CHEESE.style.backgroundColor = "lightyellow";
     } else if (noche.checked == true) {
       console.log("not cheesy");
       CHEESE.style.visibility = "hidden";
     } else if (xtrche.checked == true) {
       console.log("extra cheesy");
      CHEESE.style.visibility = "visible";
      CHEESE.style.backgroundColor = "gold";
     }
  }
});

function priceChanger() {
  let counter = document.querySelectorAll('input[type="checkbox"]:checked').length;
  if(counter == 2) {
    pd.innerHTML = "Price: $5.00";
  } else if (counter == 3){
    pd.innerHTML = "Price: $5.50";
  } else if (counter == 4){
    pd.innerHTML = "Price: $6.00";
  } else {
    console.log("testing priceChanger");
  }
}

// Sunday Afternoon Below:
// First Bug: only "tomatoes show works" / Second Bug: Footer blocks Bacon
let menuForm4 = document.querySelector("#form4");
menuForm4.addEventListener("change", (e)=> {
  e.preventDefault();
  if(cau.checked == false && who.checked == false && tra.checked == false
  && cur.checked == false && cre.checked == false && mar.checked == false
  && che.checked == false && noche.checked == false &&  xtrche.checked == false){
    console.log("test");
    alert("Dough, sauce, cheese, and then toppings.");
    spi.checked = false;
    top1.style.visibility = "hidden";
    tom.checked = false;
    top2.style.visibility = "hidden";
    bac.checked = false;
    top3.style.visibility = "hidden";
    mus.checked = false;
    top4.style.visibility = "hidden";
  }
});



spi.addEventListener("change", (e) => {
  if (spi.checked == true) {
    console.log("tomatoes");
    top1.style.visibility = "visible";
    top1.src = "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583622483/spinach.png";
    priceChanger();
  } else {
    console.log("no spinach");
    top1.style.visibility = "hidden";
  }
});

tom.addEventListener("change", (e) => {
  if (tom.checked == true) {
    console.log("mushrooms");
    top2.style.visibility = "visible";
    top2.src = "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583622483/tomatoes.png";
     priceChanger();
  } else {
    console.log("no tomatoes");
    top2.style.visibility = "hidden";
  }
});

bac.addEventListener("change", (e) => {
  if (bac.checked == true) {
    console.log("spinach");
    top3.style.visibility = "visible";
    top3.src = "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583622483/bacon.png";
    priceChanger();
  } else {
    console.log("no bacon");
    top3.style.visibility = "hidden";
  }
});

mus.addEventListener("change", (e) => {
  if (mus.checked == true) {
    console.log("bacon");
    top4.style.visibility = "visible";
    top4.src = "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583622483/mushroom.png";
     priceChanger();
  } else {
    console.log("no mushrooms");
    top4.style.visibility = "hidden";
  }
});





  // local var experiment below;
    // let listLength = input[type="check"]:checked.length;
    // let newPrice = listLength *.50 + 4.00
    // pd.innerHTML = `${newPrice}`;
    // local var experiement above;
//   if (input[type="checkbox"]:checked.length == 2) {
//   pd.innerHTML = "$5.00";
// } else if (input[type="checkbox"]:checked.length == 3) {
//   pd.innerHTML = "$5.50";
// } else if (input[type="checkbox"]:checked.length == 4) {
//   pd.innerHTML = "$6.00";
// }


// console.log(document.querySelectorAll('input[type="checkbox"]:checked').length
