let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = ""; //empty string for storing result

let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);   //eval is a build in function
      input.value = string;
    }
    else if(e.target.innerHTML == "AC"){
              string=""
              input.value=string;
    }
    else if(e.target.innerHTML == "DEL"){
        string=string.substring(0, string.length-1);
        input.value=string;
    }
     else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
