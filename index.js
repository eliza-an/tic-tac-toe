let values= document.getElementsByClassName("grid-item")
console.log(values)



function changeText(index){
if(values[index].innerHTML===""){
 values[index].innerHTML="X"

} else if(values[index].innerHTML==="X"){
 return
}else 
return
}

function createO() {
    let emptyItems=[]
    for (let i = 0; i < values.length; i++) {
        if (values[i].innerHTML === "") {
        emptyItems.push(i);
        }
    }
    if (emptyItems.length > 0) {
        randomIndex=emptyItems[Math.floor(Math.random()*emptyItems.length)]
        values[randomIndex].innerHTML="O";

    }
}