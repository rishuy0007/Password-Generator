
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "!@#$%^&*()_+/";


const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")


const getrandomPassword = (dataset)=>{
    const random = dataset[Math.floor(Math.random()*dataset.length)];
    
    return random;
}

const getPassword = (password = "")=>{

    if(upperInput.checked)
    {
       password += getrandomPassword(upperSet);
    }
    if(lowerInput.checked)
    {
       password += getrandomPassword(lowerSet);
    }
    if(numberInput.checked)
    {
       password += getrandomPassword(numberSet);
    }
    if(symbolInput.checked)
    {
       password += getrandomPassword(symbolSet);
    }

    if(password.length < totalChar.value)
    {
        return getPassword(password);
    }

    
    passBox.innerText = truncateString(password , totalChar.value);
}


getPassword();

document.getElementById("btn").addEventListener("click" , ()=>{
    getPassword();
})

function truncateString(str , num){
    if(str.length >num)
    {
        let subStr = str.substring(0 , num);
        return subStr;
    }
    else{
        return str;
    }
}