// Redux

// Redux Actions

const ACTION = "ACTION";

const clickAction = (payload) => {
  return {
    type: ACTION,
    payload
  };
};

// Redux Reducers

const clickActionReducer = (state = 0, action) => {
  if (action.type === ACTION) {
    state++;
  }
  return state;
};

const rootReducer = {
  clickActions: clickActionReducer
};

// Redux Store

const store = Redux.createStore(Redux.combineReducers(rootReducer));

// Redux Selectors

store.subscribe(() => {
  console.log(store.getState().clickActions);
});

// Web Components

class Paragraph extends HTMLElement {
  constructor() {
    super();

    let text = this.getAttribute("data-text");

    if (text) {
      const p = document.createElement("p");
      p.innerText = text;

      const actionText = () => {
        p.innerText = text + " - " + store.getState().clickActions;
      };
      store.subscribe(actionText);

      this.appendChild(p);
    }
  }
}
customElements.define("custom-paragraph", Paragraph);

class Button extends HTMLElement {
  constructor() {
    super();
    const text = this.getAttribute("data-text");
    if (text) {
      this.innerText = text;
      this.addEventListener("click", () => {
        store.dispatch(clickAction("Payload"));
      });
    }
  }
}
customElements.define("custom-button", Button);