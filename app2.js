let rst=document.querySelector("#resetbtn");
rst.onclick=()=>{
    location.reload();
}
let boxes=document.querySelectorAll(".box");
let player_x=true;
const winning_list=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
];
let msg=document.querySelector(".msg");
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if(player_x){ 
            box.innerText="X";
            player_x=false;
        }
        else{
            box.innerText="O";
            player_x=true;
        }
        box.disabled=true;
        check_winner();
    });
});

const disablebox=()=>{
    for(let box of boxes)
        {
            box.disabled=true;
        }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulation! Winner is ${winner}`;
}
const check_winner=()=>{
    for(let pattern of winning_list){
       let val1=boxes[pattern[0]].innerText;
       let val2=boxes[pattern[1]].innerText;
       let val3=boxes[pattern[2]].innerText;
       if(val1!='-' && val2!='-'&& val3!="-")
        {
            if(val1===val2 && val2===val3)
                {
                    console.log("Winner!",val1);
                    disablebox();
                    msg.style.display="block";
                    showWinner(val1);
                }
        }
    }
    
}