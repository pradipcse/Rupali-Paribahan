

function clicked(bb){
    const seatCount=parseInt(document.getElementById("seatCount").innerText);
    if(seatCount < 4)
   { if(bb.book===false)
    {   bb.book=true;
        const seatLeft=document.getElementById("seatLeft");
        var seatleft=parseInt(seatLeft.innerText);
        seatleft--;
        seatLeft.innerText=seatleft;
  
        const seatCount=document.getElementById("seatCount");
        var seatcount=parseInt(seatCount.innerText);
        seatcount++;
        seatCount.innerText=seatcount;

        // Enable coupen area 
        
        if(seatcount===4)
        {
            document.getElementById("Copontxt").classList.remove("textarea-disabled");
            document.getElementById("Coponbtn").classList.remove("btn-disabled");
        }
       
        document.getElementById(bb.name).classList.add("bg-[#1DD100]","text-white");
  
        document.getElementById("seatList").innerHTML+=`<div class="flex justify-between text-[16px] text-[#03071299] font-inter font-normal my-3">
                    <p>${bb.name}</p>
                    <p>AC</p>
                    <p>500</p>
                  </div>`;

       const total=document.getElementById("total");
       var totalTaka=parseInt(total.innerText);
       totalTaka+=550;
       total.innerText=totalTaka;     
       var gtotal= parseFloat(document.getElementById("gtotal").innerText);
       gtotal+=550;
       document.getElementById("gtotal").innerText=gtotal;     
    }
    else
    {
      alert("Can't book a seat multiple time");
    }
  }
  else{
    alert("You Can't book more then 4 seats");
  }
  };
  

//   fucntion for adding event listener to seats 
function addingEvent(bname) {
        document.getElementById(bname.name).addEventListener("click", () => {
            clicked(bname);
        });
}

//  function for creating button object 

function createButton(name) {
    return {
        book: false,
        name: name
    };
  }