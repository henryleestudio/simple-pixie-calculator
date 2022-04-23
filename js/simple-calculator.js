
// I need a function to collect input from user 

// i need a function to read what button was choosen by the user

// I need to calculate it and return the value

// I need to use that value to .innerText it into the answer span


// i need a function to read what button was choosen by the user
document.querySelector("#addButton").addEventListener('click', addSelect)
document.querySelector("#subButton").addEventListener('click', subSelect)
document.querySelector("#multButton").addEventListener('click', multSelect)
document.querySelector("#divButton").addEventListener('click', divSelect)


function addSelect(){
  // I need a function to collect input from user 
  let input1 = document.querySelector('#userInput1').value
  let input2 = document.querySelector('#userInput2').value

  // need to calculate it
  let total = Number(input1) + Number(input2)

  // return the value
  document.getElementById("answer").textContent = total
} 


function subSelect(){
  let input1 = document.querySelector('#userInput1').value
  let input2 = document.querySelector('#userInput2').value

  let total = Number(input1) - Number(input2)

  document.querySelector('#answer').textContent = total
}

function multSelect(){
  let input1 = document.getElementById('userInput1').value
  let input2 = document.querySelector('#userInput2').value

  let total = Number(input1) * Number(input2)
  
  document.getElementById('answer').innerText = total
}

function divSelect(){
  let input1 = document.getElementById('userInput1').value
  let input2 = document.getElementById('userInput2').value
  
  total = Number(input1) / Number(input2) 

  document.getElementById('answer').innerText = total
}
