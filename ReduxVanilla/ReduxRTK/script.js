// Redux

// Redux Reducers

const clickActionsSlice = RTK.createSlice({
  name: "action",
  initialState: 0,
  reducers: {
    clickAction: (state) => {
      return state + 1;
    }
  }
});

const { clickAction } = clickActionsSlice.actions;

// Redux Store

const rootReducer = {
  clickActions: clickActionsSlice.reducer
};

const store = RTK.configureStore({
  reducer: rootReducer
});

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

class Element extends HTMLElement {
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
customElements.define("custom-element", Element);

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
