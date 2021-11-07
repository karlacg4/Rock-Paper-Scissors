
 let cont=0;

//rules popop
function openRules(){
    let pop=document.getElementById("rules");
    pop.hidden=false;
}

function closeRules(){
    let pop=document.getElementById("rules");
    pop.hidden=true;
}

//choice
function game(id){
    //variables
    let miau;
 

    //show options
    let opt=document.getElementById("options");
    opt.style.visibility="hidden";
    
    let tr=document.getElementById("choice");
    tr.style.visibility="visible";
    if (id==="paper"){
        let pap=document.getElementById("paperChoice");
        pap.hidden=false;
    }else if (id==="scissors"){
        let scis=document.getElementById("scissorsChoice");
        scis.hidden=false
    }else if (id==="rock"){
        let roc=document.getElementById("rockChoice");
        roc.hidden=false
    }

    let top=document.getElementById("rules");
    top.style.marginTop="-30%";

    //randomizer
    let computer = Math.floor(Math.random() * 3) + 1;
    console.log(computer);
    if (computer ===1) {
      computer = "rock";
    } else if (computer ===2) {
      computer = "paper";
    } else {
      computer = "scissors";
    }

    //winner
    if (id===computer){//tie
        if(computer==="paper"){
            let pap=document.getElementById("paperComp");
            pap.hidden=false;

        }else if(computer==="scissors"){
            let scis=document.getElementById("scissorsComp");
            scis.hidden=false;
        }else if(computer==="rock"){
            let rock=document.getElementById("rockComp");
            rock.hidden=false;
        }

        console.log("Tie");
        miau="tied";

    }else if(id==="paper" && computer==="scissors" ){
        let show=document.getElementById("scissorsComp");
        show.hidden=false;
        console.log("computer wins");
        miau="cWin";

    }else if(id==="paper" && computer==="rock" ){
        let show=document.getElementById("rockComp");
        show.hidden=false;
        console.log("user wins");
        miau="uWin";
    }else if(id==="scissors" && computer==="paper" ){
        let show=document.getElementById("paperComp");
        show.hidden=false;
        console.log("user wins");
        miau="uWin";
    }else if(id==="scissors" && computer==="rock" ){
        let show=document.getElementById("rockComp");
        show.hidden=false;
        console.log("computer wins");
        miau="cWin";
    }else if(id==="rock" && computer==="scissors" ){
        let show=document.getElementById("scissorsComp");
        show.hidden=false;
        console.log("user wins");
        miau="uWin";
    }else if(id==="rock" && computer==="paper" ){
        let show=document.getElementById("paperComp");
        show.hidden=false;
        console.log("computer wins");
        miau="cWin";
    }
    let empt=document.getElementById("empty");
    empt.hidden=true;

    if(miau==="cWin"){
        let txt = document.getElementById("wtext").innerHTML = "YOU LOSE!";
        cont--;
        console.log(cont);

    }else if(miau==="tied"){
        let txt = document.getElementById("wtext").innerHTML = "TIE!";
        console.log(cont);

    }else if(miau==="uWin"){
        let txt = document.getElementById("wtext").innerHTML = "YOU WIN!";
        cont++;
        console.log(cont);
    }
    
    

    setTimeout(winningT, 1000)
    
    
    
}

function winningT(){
    let w=document.getElementById("winner");
    w.style.visibility="visible";

    let cirpL=document.getElementById("paperChoice");
    cirpL.style.marginLeft="10px";

    let cirsL=document.getElementById("scissorsChoice");
    cirsL.style.marginLeft="10px";

    let cirrL=document.getElementById("rockChoice");
    cirrL.style.marginLeft="10px";

    let cirpR=document.getElementById("paperComp");
    cirpR.style.marginRight="10px";

    let cirsR=document.getElementById("scissorsComp");
    cirsR.style.marginRight="10px";

    let cirrR=document.getElementById("rockComp");
    cirrR.style.marginRight="10px";

    let txL=document.getElementById("yp");
    
    txL.style.paddingLeft="120px"
    txL.style.textAlign="left"

    let txR=document.getElementById("hp");
    
    txR.style.paddingRight="80px"
    txR.style.textAlign="right"

    let score=document.getElementById("points").innerHTML=cont;
}

function pAgain(){
    //hide nshow
    let wtable=document.getElementById("choice");
    wtable.style.visibility="hidden";

    let wtext=document.getElementById("winner");
    wtext.style.visibility="hidden";

    let triangle=document.getElementById("options");
    triangle.style.visibility="visible";

    //Reset stuff
    let pap=document.getElementById("paperChoice");
    pap.hidden=true;

    let scis=document.getElementById("scissorsChoice");
    scis.hidden=true;

    let roc=document.getElementById("rockChoice");
    roc.hidden=true;

    let papC=document.getElementById("paperComp");
    papC.hidden=true;

    let scisC=document.getElementById("scissorsComp");
    scisC.hidden=true;

    let rocC=document.getElementById("rockComp");
    rocC.hidden=true;




    let x = window.matchMedia("(max-width: 376px)")
    if (x.matches) {
      } else {
        let cirpL=document.getElementById("paperChoice");
        cirpL.style.margin="auto";
    
        let cirsL=document.getElementById("scissorsChoice");
        cirsL.style.margin="auto";
    
        let cirrL=document.getElementById("rockChoice");
        cirrL.style.margin="auto";
    
        let cirpR=document.getElementById("paperComp");
        cirpR.style.margin="auto";
    
        let cirsR=document.getElementById("scissorsComp");
        cirsR.style.margin="auto";
    
        let cirrR=document.getElementById("rockComp");
        cirrR.style.margin="auto";
    
        let txL=document.getElementById("yp");
        txL.style.paddingLeft="210px"
        txL.style.textAlign="left"
    
        let txR=document.getElementById("hp");
        txR.style.paddingRight="180px"
        txR.style.textAlign="right"
    
        let top=document.getElementById("rules");
        top.style.marginTop="-100px";
      }
   
}

