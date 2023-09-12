import { TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { add, del, reset, show, increase, decrease } from "./ActionsCart";

const ReduxCart = () => {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    console.log(state);
    return state.cart;
  });

  useEffect(() => {
    evalTotal();
    dispatch(show());
  }, []);
  const addc = (val) => {
    let newItem = {
      dish: val.dish,
      description: val.description,
      price: val.price,
      quantity: val.quantity,
    };
    console.log(newItem);
    dispatch(add(newItem));
    dispatch(show());
  };

  const deleteItem = (indx) => {
    dispatch(del(indx));
  };

  const clearall = () => {
    dispatch(reset());
  };
  const decreaseItem = (indx) => {
    dispatch(decrease(indx));
  };
  const increaseItem = (indx) => {
    dispatch(increase(indx));
  };
  const evalTotal = () => {
    let t = 0;
    for (let i = 0; i < cart.length; i++) {
      t += cart[i].price;
    }
    setTotal(t);
  };

  return (
    <div className="cart-page">
      <button
        className="empty-btn"
        type="submit"
        onClick={() => {
          setTotal(0);
          clearall();
        }}
      >
        Empty cart
      </button>
      <div className="total">
        <h2>Total : {total}</h2>
      </div>

      {cart.map((val, indx) => {
        return (
          <div>
            <ul className="cart-list">
              <li>{val.dish}</li>
              <li>₹{val.price}</li>
              <br />
              {/*<li>{val.quantity}</li>*/}
              <div className="cart-btns">
                <button
                  className="dec-btn"
                  onClick={() => {
                    setTotal(total - val.price);
                    decreaseItem(indx);
                  }}
                  type="submit"
                >
                  -
                </button>
                <div>{val.quantity}</div>
                <button
                  className="inc-btn"
                  onClick={() => {
                    setTotal(total + val.price);
                    increaseItem(indx);
                  }}
                  type="submit"
                >
                  +
                </button>
              </div>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ReduxCart;
