// 3 step method
// Target
// Add event Listener
// Add effect

// const box = document.getElementById("box-one")
// // events are something the user can do
// box.addEventListener("click", () => {
//   console.log('Fire!');
//   // effect CRUD the html or CSS
//   // ADd some html
//   // <p> </p>
//   const newPTag = document.createElement("p")
//   // "Something inside of the p tag"
//   const node = document.createTextNode("Something inside of the p tag")
//   // <p> Something inside of the p tag </p>
//   newPTag.appendChild(node)
//   box.appendChild(newPTag)
// })

$(document).ready(() => {
  // Write all of your jquery Code inside here!
  $("#box-one").on("click", () => {
    $("#box-one").append("<p>Something inside of the p tag</p>")
  })

  $('.box-two').on("click", () => {
    $('.box-three, .box-one, .box-four').addClass("green")
  })

  $('.box-three').on("click", () => {
    $('.box-three, .box-one, .box-four').removeClass("green")
    
  })  

  $('.add-form-input').on('blur', () => {
    console.log('fire');
  })

  $('.add-form').on("submit", (event) => {
    event.preventDefault();
    // post request
    // get request 
    const userInput = $('.add-form-input').val()
    $('.box-one').css("background", userInput)
    $('#results').before(`
      <div class="box">
        <h1>box </h1>
      </div>
    `)
  })

  $('.box-four').on("click", () => {
    $('.box-one').slideUp(1000)
  })

  $('.box-three').on("click", () =>{ 
    $('.box-one').slideDown(1000)
  })

})