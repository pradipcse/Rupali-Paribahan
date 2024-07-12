const A1=createButton("A1");
const A2=createButton("A2");
const A3=createButton("A3");
const A4=createButton("A4");

addingEvent(A1);
addingEvent(A2);
addingEvent(A3);
addingEvent(A4);

const B1=createButton("B1");
const B2=createButton("B2");
const B3=createButton("B3");
const B4=createButton("B4");

addingEvent(B1);
addingEvent(B2);
addingEvent(B3);
addingEvent(B4);


const C1=createButton("C1");
const C2=createButton("C2");
const C3=createButton("C3");
const C4=createButton("C4");

addingEvent(C1);
addingEvent(C2);
addingEvent(C3);
addingEvent(C4);

const D1=createButton("D1");
const D2=createButton("D2");
const D3=createButton("D3");
const D4=createButton("D4");

addingEvent(D1);
addingEvent(D2);
addingEvent(D3);
addingEvent(D4);

const E1=createButton("E1");
const E2=createButton("E2");
const E3=createButton("E3");
const E4=createButton("E4");

addingEvent(E1);
addingEvent(E2);
addingEvent(E3);
addingEvent(E4);

const F1=createButton("F1");
const F2=createButton("F2");
const F3=createButton("F3");
const F4=createButton("F4");

addingEvent(F1);
addingEvent(F2);
addingEvent(F3);
addingEvent(F4);

const G1=createButton("G1");
const G2=createButton("G2");
const G3=createButton("G3");
const G4=createButton("G4");

addingEvent(G1);
addingEvent(G2);
addingEvent(G3);
addingEvent(G4);

const H1=createButton("H1");
const H2=createButton("H2");
const H3=createButton("H3");
const H4=createButton("H4");

addingEvent(H1);
addingEvent(H2);
addingEvent(H3);
addingEvent(H4);

const I1=createButton("I1");
const I2=createButton("I2");
const I3=createButton("I3");
const I4=createButton("I4");

addingEvent(I1);
addingEvent(I2);
addingEvent(I3);
addingEvent(I4);

const J1=createButton("J1");
const J2=createButton("J2");
const J3=createButton("J3");
const J4=createButton("J4");

addingEvent(J1);
addingEvent(J2);
addingEvent(J3);
addingEvent(J4);


document.getElementById("Coponbtn").addEventListener("click", function() {
  var totaltaka = document.getElementById("total").innerText;
  totaltaka = parseInt(totaltaka);
  const ss = document.getElementById("Copontxt").value;  // Use value instead of innerText
  var gtotal = parseFloat(document.getElementById("gtotal").innerText);  // Correct the typo here

  if (ss === "New 15") {
      gtotal = gtotal - ((15 / 100) * gtotal);
      document.getElementById("Copontxt").classList.add("hidden");
      document.getElementById("Coponbtn").classList.add("hidden");
      document.getElementById("gtotal").innerText = gtotal.toFixed(2);  // Correct the typo here and format to 2 decimal places
  } else if (ss === "Couple 20") {
      gtotal = gtotal - ((20 / 100) * gtotal);
      document.getElementById("Copontxt").classList.add("hidden");
      document.getElementById("Coponbtn").classList.add("hidden");
      document.getElementById("gtotal").innerText = gtotal.toFixed(2);  // Correct the typo here and format to 2 decimal places
  } else {
      alert("Invalid Coupon");
  }
});

document.getElementById("phone").addEventListener("keyup", function(event) {
    const key = event.key;
    if (isNaN(key)) {
        event.preventDefault();
    }
    else
    {
        var seat=parseInt(document.getElementById("seatCount").innerText);
        if(seat>0)
        {
            document.getElementById("nextbtn").classList.remove("btn-disabled");
        }
    }
});

document.getElementById("nextbtn").addEventListener("click",function() {
    window.location.href = './sucess.html';
})