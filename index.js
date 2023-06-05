let values= document.getElementsByClassName("grid-item")
console.log(values)
let item0=document.getElementById("item0")
let item1=document.getElementById("item1")
let item2=document.getElementById("item2")
let item3=document.getElementById("item3")
let item4=document.getElementById("item4")
let item5=document.getElementById("item5")
let item6=document.getElementById("item6")
let item7=document.getElementById("item7")
let item8=document.getElementById("item8")


function play(index){
    function changeText(index){
        if(values[index].innerHTML===""){
            values[index].innerHTML="X"
            values[index].onclick = null;
      
         }
    }


    function createO() {
        let emptyItems=[]
        for (let i = 0; i < values.length; i++) {
            if (values[i].innerHTML === "") {
            emptyItems.push(i);
            }   
        }

        if (emptyItems.length > 0) {
            setTimeout(() => {
                randomIndex=emptyItems[Math.floor(Math.random()*emptyItems.length)]
                values[randomIndex].innerHTML="O";
                values[randomIndex].onclick = null;
                if ((item0.innerHTML==="O" && item1.innerHTML==="O" && item2.innerHTML==="O") || (item3.innerHTML==="O" && item4.innerHTML==="O" && item5.innerHTML==="O") || (item6.innerHTML==="O" && item7.innerHTML==="O" && item8.innerHTML==="O") || (item0.innerHTML==="O" && item3.innerHTML==="O" && item6.innerHTML==="O") || (item1.innerHTML==="O" && item4.innerHTML==="O" && item7.innerHTML==="O") || (item2.innerHTML==="O" && item5.innerHTML==="O" && item8.innerHTML==="O") || (item0.innerHTML==="O" && item4.innerHTML==="O" && item8.innerHTML==="O") || (item2.innerHTML==="O" && item4.innerHTML==="O" && item6.innerHTML==="O") ){
                    setTimeout(()=>{ alert("You Lose!") ;
                        if(confirm("Would you like to play again?")){
                            window.location.reload(true)
                        }
                    },500)
                 }      
                
            }, 1000)


            }
        }

    changeText(index)
    createO()

        if ((item0.innerHTML==="X" && item1.innerHTML==="X" && item2.innerHTML==="X") || (item3.innerHTML==="X" && item4.innerHTML==="X" && item5.innerHTML==="X") || (item6.innerHTML==="X" && item7.innerHTML==="X" && item8.innerHTML==="X") || (item0.innerHTML==="X" && item3.innerHTML==="X" && item6.innerHTML==="X") || (item1.innerHTML==="X" && item4.innerHTML==="X" && item7.innerHTML==="X") || (item2.innerHTML==="X" && item5.innerHTML==="X" && item8.innerHTML==="X") || (item0.innerHTML==="X" && item4.innerHTML==="X" && item8.innerHTML==="X") || (item2.innerHTML==="X" && item4.innerHTML==="X" && item6.innerHTML==="X") ){
            setTimeout(()=>{ alert("You Win!") ;
                if(confirm("Would you like to play again?")){
                    window.location.reload(true)
                }
             },500) 
      
         

        }else if (document.querySelectorAll(".grid-item:not(:empty)").length === 9) {
            alert("You Draw!");
                        setTimeout(()=>{ alert("You Win!") ;
                if(confirm("Would you like to play again?")){
                    window.location.reload(true)
                }
             },500)
        }
}