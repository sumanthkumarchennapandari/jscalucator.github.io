// Variables for global use
let display = document.querySelector("#dis_play");
//clear button function
let cls = document.querySelector("#clearscreen");
cls.addEventListener("click", () => {
    console.log("C button was clicked");
    display.innerText="0";
});
//adding text to the screen - button event listeners
document.querySelector("#dot").addEventListener("click", () => {
    console.log("dot was clicked");
    if(display.innerText.length === 1 && display.innerText === "0")
    {
        display.innerText = "0.";
    }
    else
    {
        display.innerText = display.innerText+".";
    }
});
document.querySelector("#one").addEventListener("click", () => {
    console.log("1 was clicked");
    if(display.innerText.length === 1 && display.innerText === "0")
    {
        display.innerText = "1";
    }
    else
    {
        display.innerText = display.innerText+"1";
    }
});
document.querySelector("#two").addEventListener("click", () => {
    console.log("2 was clicked");
    if(display.innerText.length === 1 && display.innerText === "0")
        {
            display.innerText = "2";
        }
        else
        {
            display.innerText = display.innerText+"2";
        }
});
document.querySelector("#three").addEventListener("click", () => {
    console.log("3 was clicked");
    if(display.innerText.length === 1 && display.innerText === "0")
        {
            display.innerText = "3";
        }
        else
        {
            display.innerText = display.innerText+"3";
        }
});
document.querySelector("#four").addEventListener("click", () => {
    console.log("4 was clicked");
    if(display.innerText.length === 1 && display.innerText === "0")
        {
            display.innerText = "4";
        }
        else
        {
            display.innerText = display.innerText+"4";
        }
});
document.querySelector("#five").addEventListener("click", () => {
    console.log("5 was clicked");
    if(display.innerText.length === 1 && display.innerText === "0")
        {
            display.innerText = "5";
        }
        else
        {
            display.innerText = display.innerText+"5";
        }
});
document.querySelector("#six").addEventListener("click", () => {
    console.log("6 was clicked");
    if(display.innerText.length === 1 && display.innerText === "0")
        {
            display.innerText = "6";
        }
        else
        {
            display.innerText = display.innerText+"6";
        }
});
document.querySelector("#seven").addEventListener("click", () => {
    console.log("7 was clicked");
    if(display.innerText.length === 1 && display.innerText === "0")
        {
            display.innerText = "7";
        }
        else
        {
            display.innerText = display.innerText+"7";
        }
});
document.querySelector("#eight").addEventListener("click", () => {
    console.log("8 was clicked");
    if(display.innerText.length === 1 && display.innerText === "0")
        {
            display.innerText = "8";
        }
        else
        {
            display.innerText = display.innerText+"8";
        }
});
document.querySelector("#nine").addEventListener("click", () => {
    console.log("9 was clicked");
    if(display.innerText.length === 1 && display.innerText === "0")
        {
            display.innerText = "9";
        }
        else
        {
            display.innerText = display.innerText+"9";
        }
});
document.querySelector("#btn0").addEventListener("click", () => {
    console.log("0 was clicked");
    if(display.innerText.length === 1 && display.innerText === "0")
        {
            display.innerText = "0";
        }
        else
        {
            display.innerText = display.innerText+"0";
        }
});
document.querySelector("#add").addEventListener("click", () => {
    console.log("+ was clicked");
    if(display.innerText.length === 1 && display.innerText === "0")
        {
            display.innerText = "0";
        }
        else
        {
            display.innerText = display.innerText+"+";
        }
});
document.querySelector("#minus").addEventListener("click", () => {
    console.log("- was clicked");
    if(display.innerText.length === 1 && display.innerText === "0")
        {
            display.innerText = "0";
        }
        else
        {
            display.innerText = display.innerText+"-";
        }
});
document.querySelector("#multiply").addEventListener("click", () => {
    console.log("* was clicked");
    if(display.innerText.length === 1 && display.innerText === "0")
        {
            display.innerText = "0";
        }
        else
        {
            display.innerText = display.innerText+"x";
        }
});
document.querySelector("#divsion").addEventListener("click", () => {
    console.log("/ was clicked");
    if(display.innerText.length === 1 && display.innerText === "0")
        {
            display.innerText = "0";
        }
        else
        {
            display.innerText = display.innerText+"÷";
        }
});
document.querySelector("#plusminus").addEventListener("click", () => {
    console.log("0 was clicked");
    if(display.innerText.length === 1 && display.innerText === "0")
        {
            display.innerText = "0";
        }
        else
        {
            if( display.innerHTML.charAt(0) == "-")
            {
                display.innerText = display.innerHTML.slice(1);
            }
            else
            {
                display.innerText = "-"+display.innerText;
            }
        }
});
//calucating the result
document.querySelector("#equals").addEventListener("click",() => {
    let expression = display.innerHTML;
    let operand1 = "";
    let operand2 = "";
    let result;
    let operator = null;
    console.log(expression);
    for(let cha in expression)
        {
            if(expression.charAt(cha) == "+" || expression.charAt(cha) == "-" || expression.charAt(cha) == "x" || expression.charAt(cha) == "÷")
            {
                operator = expression.charAt(cha);
                //console.log(`Operator = ${operator}`);
            }
            else if((expression.charAt(cha) == 1 || expression.charAt(cha) == 2 || expression.charAt(cha) == 3 || expression.charAt(cha) == 4 || expression.charAt(cha) == 5 || expression.charAt(cha) == 6 || expression.charAt(cha) == 7 || expression.charAt(cha) == 8 || expression.charAt(cha) == 9 || expression.charAt(cha) == 0) && (operator === null))
            {
                operand1 = operand1+expression.charAt(cha);
                //console.log(`Operand 1 =  ${operand1}`);
            }
            else if(expression.charAt(cha) == 1 || expression.charAt(cha) == 2 || expression.charAt(cha) == 3 || expression.charAt(cha) == 4 || expression.charAt(cha) == 5 || expression.charAt(cha) == 6 || expression.charAt(cha) == 7 || expression.charAt(cha) == 8 || expression.charAt(cha) == 9 || expression.charAt(cha) == 0)
            {
                operand2 = operand2+expression.charAt(cha);
                //console.log(`Operand 2 = ${operand2}`);
            }
            else{}
            //finding the end to print the result
            if(cha == expression.length-1)
            {
                //console.log("end found");
                if(operator === "+")
                {
                    let num1 = parseInt(operand1);
                    let num2 = parseInt(operand2);
                    result = num1 + num2;
                }
                else if(operator === "-")
                {
                    let num1 = parseInt(operand1);
                    let num2 = parseInt(operand2);
                    result = num1 - num2;
                }
                else if(operator === "x")
                {
                    let num1 = parseInt(operand1);
                    let num2 = parseInt(operand2);
                    result = num1 * num2;
                }
                else if(operator === "÷")
                {
                    let num1 = parseInt(operand1);
                    let num2 = parseInt(operand2);
                    result = num1 / num2;
                }
                display.innerHTML = result;
            }
        }
});