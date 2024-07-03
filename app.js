let rst=document.querySelector("#resetbtn");
rst.onclick=()=>{
    location.reload();
}
let boxes=document.querySelectorAll(".box");
let player_x=true;
let op;
let count=0;
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
let x_user=[];
let o_user=[];
let gameover=false;
function check_winner(arr1,arr2){
            if(arr1.length!=arr2.length){
                return false;
            }
            for(let i=0;i<arr1.length;i++)
                {
                    if(arr1[i]!=arr2[i])
                        {
                            return false;
                        }
                }
                return true;
               
}
function winner(tar_ar,arof_ar){
    for(let i=0;i<arof_ar.length;i++)
        {
            if(check_winner(tar_ar,arof_ar[i])){
                return true;
            }
        }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(gameover){
            if(op=="X"){
                alert("X is winner!!");
            }
            else{
                alert("O is winner!!");
            }
            return;
        }
        console.log("box is clicked");
        if(player_x){ 
            box.innerText="X";
            let x=box.getAttribute('id');
            x_user.push(x);
            console.log(x_user);
            player_x=false;
            x_user.sort();
            console.log("X_list:",x_user);
            let res=winner(x_user,winning_list); 
            console.log(res);
            if(res){
                gameover=true;
                 op="X";
            }

        }
        else{
            box.innerText="O";
            let o=box.getAttribute('id');
            o_user.push(o);
            console.log(o_user);
            player_x=true;
            o_user.sort();
            console.log("O_list:",o_user);
           let r= winner(o_user,winning_list);
           if(r){
            gameover=true;
             op="O";
           }
        }
        // function check_winner(arr1,arr2){
        //     if(arr1.length!=arr2.length){
        //         return false;
        //     }
        //         else{
        //             for(let i;i<arr1.length;i++)
        //                 {
        //                     if(arr1[i]!=arr2[i])
        //                         {
        //                             return false;
        //                         }
        //                 }
        //         }
        //         return true;
            
        // }
        // function winner(tar_ar,arof_ar){
        //     for(let i=0;i<winning_list.length;i++)
        //         {
        //             if(check_winner(tar_ar,arof_ar[i])){
        //                 return true;
        //             }
        //         }
        // }
        box.disabled=true;
        // console.log(x_user);
        // console.log(o_user);
       

        
        
    });
});
if(gameover){
    if(op=="X"){
        alert("X is winner!!");
    }
    else{
        alert("O is winner!!");
    }
}
