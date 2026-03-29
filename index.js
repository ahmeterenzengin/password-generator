const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstBox=document.getElementById("first-box")
let secondBox=document.getElementById("second-box")
let userEl=document.getElementById("user-el")
let firstPassword=""
let secondPassword=""

function getRandomElement(){
  let randomNumber=Math.floor(Math.random()*characters.length)
  return characters[randomNumber]
}

function createPassword(length){
  let password=""
  for(let i=0;i<length;i++){
    password+=getRandomElement()
  }
  return password
}
console.log(createPassword())

function create(){
  let length=Number(userEl.value)
   if (!length || length <= 0) {
    alert("Please enter a valid number")
    return
  }
  if(8<=length&&length<=12){
    firstPassword=createPassword(length)
    secondPassword=createPassword(length)
    secondBox.textContent=firstPassword
    firstBox.textContent=secondPassword
  }else{
    alert("Please enter a number beetween 8 and 12")
    return
  }

}

