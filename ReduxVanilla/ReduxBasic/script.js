import * as Redux from "https://unpkg.com/redux@latest/dist/redux.browser.mjs";

function counter(state = {
  counter: 0,
  clicks: 0
}, action) {
  if (typeof state === "undefined") {
    return 0;
  }

  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1, clicks: state.clicks + 1
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1, clicks: state.clicks + 1
      };
    default:
      return state;
  }
}

var store = Redux.createStore(counter);
var valueEl = document.getElementById("value");
var clicksEl = document.getElementById("clicks");

function render() {
  const val = store.getState().counter;
  valueEl.innerHTML = val.toString();
  clicksEl.innerHTML = store.getState().clicks.toString();
  const btnOddInc = document.getElementById("increment-if-odd");
  if (val % 2 === 0) btnOddInc.setAttribute("disabled", "disabled");
  else btnOddInc.removeAttribute("disabled");
}

render();
store.subscribe(render);

document.getElementById("increment").addEventListener("click", function() {
  store.dispatch({
    type: "INCREMENT"
  });
});

document.getElementById("decrement").addEventListener("click", function() {
  store.dispatch({
    type: "DECREMENT"
  });
});

document
  .getElementById("increment-if-odd")
  .addEventListener("click", function() {
    if (store.getState().value % 2 !== 0) {
      store.dispatch({
        type: "INCREMENT"
      });
    }
  });

document
  .getElementById("increment-async")
  .addEventListener("click", function() {
    setTimeout(function() {
      store.dispatch({
        type: "INCREMENT"
      });
    }, 1000);
  });
