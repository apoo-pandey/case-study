const add = (newItem) => ({ type: "add", payload: newItem });

const del = (indx) => ({ type: "delete", payload: indx });

const reset = () => ({ type: "reset" });

const show = () => ({ type: "show" });

const increase = (indx) => ({ type: "increase", payload: indx });

const decrease = (indx) => ({ type: "decrease", payload: indx });

const evaluate = (indx) => ({ type: "evaluate", payload: indx });

export { add, del, reset, show, increase, decrease, evaluate };
