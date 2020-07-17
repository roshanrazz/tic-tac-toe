
console.log("js runng")

var list=[one,two,three,four,five,six,seven,eight,nine];
var game=true;
var win,lose;
var name=prompt("Your Name Please :\) :")
if (name==="null"){
    name="User"
}
foot.textContent=name+ " vs Roshan"
function win_checkX(){
    if (one.textContent==="X" && two.textContent==="X" && three.textContent==="X" || four.textContent==="X" && five.textContent==="X" && six.textContent==="X" || seven.textContent==="X" && eight.textContent==="X" && nine.textContent==="X" || one.textContent==="X" && four.textContent==="X" && seven.textContent==="X" || two.textContent==="X" && five.textContent==="X" && eight.textContent==="X" || three.textContent==="X" && six.textContent==="X" && nine.textContent==="X" || one.textContent==="X" && five.textContent==="X" && nine.textContent==="X" || three.textContent==="X" && five.textContent==="X" && seven.textContent==="X"){
        xscr.textContent=Number(xscr.textContent)+1;
        game=false;
        win=true;
    
    }
}
function win_checkO(){
    if (one.textContent==="O" && two.textContent==="O" && three.textContent==="O" || four.textContent==="O" && five.textContent==="O" && six.textContent==="O" || seven.textContent==="O" && eight.textContent==="O" && nine.textContent==="O" || one.textContent==="O" && four.textContent==="O" && seven.textContent==="O" || two.textContent==="O" && five.textContent==="O" && eight.textContent==="O" || three.textContent==="O" && six.textContent==="O" && nine.textContent==="O" || one.textContent==="O" && five.textContent==="O" && nine.textContent==="O" || three.textContent==="O" && five.textContent==="O" && seven.textContent==="O"){
        oscr.textContent=Number(oscr.textContent)+1;
        game=false;
        lose=true;
        
    }
}

var count=0;
function draw_check(){
    for (drw of list){
        if (drw.textContent==="O" || drw.textContent==="X"){
            count=count+1;
        }
        if (count>7){
            alert("draw")
            drawscr.textContent="draw";
        }
        else{
            count=0
        }
    }
}

// Board Reset

function reset(){
    for (var rst of list){
        rst.textContent=""
        game=true
        win=false
        lose=false
    }
}
    
    
board_reset.addEventListener("click",function(){
    for (var rst of list){
        rst.textContent=""
        game=true
        win=false
        lose=false
    }
})

function CompChoice(){
   
    var rd=Math.round(Math.random()*8);
    var x=list[rd];
    if (x.textContent!=="O" && x.textContent!=="X"){
        x.style.color="green";
        x.textContent="O";
        myaudio.play()
        win_checkO();
    }
    else{
        CompChoice()
    }
}
function UserChoice(id){
    id.addEventListener("click", function (){
        if (id.textContent!=="O" && id.textContent!=="X"){
            if (game){
               
   
                id.style.color="red"
                id.textContent="X"
                myaudio.play()
                win_checkX()
                draw_check()
            }
            if (game){
                CompChoice()
            }
            else{
                id.readOnly=true
            }
            if (win){
                setTimeout(function(){ alert("\tCongrats You Win\n\"Reset Board\" to Play"); }, 200);
                
            }
            if (lose){
                setTimeout(function(){ alert("\tSorry You Lose\n\"Reset Board\" to Play"); }, 200);
                
            }
          
        }
    })
}

for (var i of list){

    UserChoice(i)
 
}
