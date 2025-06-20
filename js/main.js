/// an event listner Callback

const NameInput = document.getElementById("name-input");

// Access->update ,Access->add events,

// Callback setInterval
// console.log(NameInput);
// click
// ;

// input<>
NameInput.addEventListener("input", nameInputHasChanged);

function nameInputHasChanged() {
  //   console.log(NameInput);
  let nameValue = document.getElementById("name-input").value;
  let pSubmit = document.querySelector("#submit-button");
  if (nameValue.length >= 4) {
    // when the value name >4

    pSubmit.innerHTML = `<button>Submit</button>`;
    return;
  }
  pSubmit.innerHTML = ``;
}
