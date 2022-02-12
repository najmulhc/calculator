
let equation = "";
let keys =  document.getElementsByClassName("key");
for(let key of keys){
    key.addEventListener("click", function(){
      let keypressed = key.innerText;
      console.log(keypressed);
      if(keypressed == "="){
        equation = resultUpdate(equation);

        equationUpdate(equation);
      }
      else if(keypressed == ""){
          equation = equation.slice(0,-1);
          equationUpdate(equation);
      }
      else if(keypressed == "C"){
        document.getElementById("display").innerText = "";
        equation = "";
        equationUpdate(equation);
      }
      else{
          equation += keypressed;
          equationUpdate(equation);
      }
    });
}
function equationUpdate(e){
    document.getElementById("equationDisplay").innerText = e; 
}
function resultUpdate(e){
    let result  = eval(e);
    document.getElementById("display").innerText = result;
    return result;
}
