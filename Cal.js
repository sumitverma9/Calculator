let input=document.getElementById("inputBox");
let btns= document.querySelectorAll("button");

let str= "";
let arr= Array.from(btns);
arr.forEach(button =>{
    button.addEventListener("click", (e) =>{
        if(e.target.innerHTML == '='){
            str = eval(str);
            input.value=str;
        }
        else if(e.target.innerHTML == "AC"){
            str = "";
            input.value = str;
        }
        else if(e.target.innerHTML =="DEL"){
            str = str.substr(0,str.length-1); 
            input.value=str;
        }

        else{
            str += e.target.innerHTML;
            input.value = str;
        }
        
    })
})
