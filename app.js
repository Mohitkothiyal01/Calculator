window.onload = () =>{
const buttons = document.querySelectorAll(".numbers");   // querySelector is used to fetch elements from dom.
const screen = document.querySelector('.prompt');   // fetching input text area by its id, named prompt in html file.
const Equals = document.querySelector('#btn-equal');  // fetching (=) button to add eventListener.
const clear = document.querySelector('#btn-clear');   //Fetching clear button.
const del = document.querySelector("#delete");    // fetching delete button.

buttons.forEach(button => {
    button.addEventListener('click', (e) =>{    // adding click event on buttons.
screen.value += (e.target.innerHTML);    // displaying (adding) value in screen on click event on any button.       
    })
});

 Equals.addEventListener('click', (e) =>{    //Adding event when equal button clicked.   
    if(!screen.value){
        screen.value = "Enter value"
    } else {
        screen.value = eval(screen.value);    // Eval is used to evaluate given values.
    }
}) 

clear.addEventListener('click',(e) => {    //Adding click event when Clear btn clicked.
    screen.value = "";

})


del.addEventListener('click',(e) =>{         // Adding click event when del button clicked.
    screen.value = screen.value.slice(0,-1)
   })


    }
    