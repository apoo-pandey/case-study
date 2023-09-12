import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./Cart/ActionsCart";
const Menu = () => {
  const dispatch = useDispatch();
  let [menulist, setmenulist] = useState([]);
  //let [cartlist, setcartlist] = useState([]);
  let [category, setCategory] = useState(0);
  let showMenu = [];
  const getData = () => {
    fetch("./menudata.json")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        console.log("dnvdfuvhf", category);
        setmenulist(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
    console.log("use-effect");
  }, []);

  const veglist = () => {
    console.log("inside changggeeee");
    setCategory(1);
  };

  const nonveglist = () => {
    setCategory(2);
  };

  const all = () => {
    setCategory(0);
  };

  const lowToHigh = () => {
    setCategory(3);
  };

  const highToLow = () => {
    setCategory(4);
  };
  let [temp, setTemp] = useState("");

  const handleChange = (event) => {
    let input = event.target.value;
    setTemp(input);
    console.log(input);
    //console.log(temp);

    console.log(showMenu);
  };

  if (category == 1) {
    for (let i = 0; i < menulist.length; i++) {
      if (menulist[i].veg == "true") {
        showMenu.push(menulist[i]);
      }
    }
  } else if (category == 2) {
    for (let i = 0; i < menulist.length; i++) {
      if (menulist[i].veg == "false") {
        showMenu.push(menulist[i]);
      }
    }
  } else if (category == 3) {
    showMenu = menulist;
    showMenu.sort((a, b) =>
      a.price > b.price ? 1 : a.price < b.price ? -1 : 0
    );
  } else if (category == 4) {
    showMenu = menulist;
    showMenu.sort((a, b) =>
      a.price < b.price ? 1 : a.price > b.price ? -1 : 0
    );
  } else {
    showMenu = menulist;
  }

  return (
    <div>
      <div>
        <div className="low-high-btns">
          <button onClick={lowToHigh} type="submit">
            Low-to-High
          </button>
          <button onClick={highToLow} type="submit">
            High-to-Low
          </button>
        </div>
        <div className="menu-filter-btns">
          <input
            size="50"
            type="text"
            placeholder="Search  🔎"
            onChange={handleChange}
          ></input>
          <button type="submit" onClick={all}>
            All
          </button>

          <button type="submit" onClick={veglist}>
            Veg
          </button>

          <button onClick={nonveglist} type="submit">
            Non-Veg
          </button>
        </div>
      </div>
      <div className="menu">
        {showMenu.map((val, indx) => {
          if (val.dish.toLowerCase().includes(temp.toLowerCase()))
            return (
              <ul className="menu-list">
                <li>
                  <u>
                    <strong>{val.dish}</strong>
                  </u>
                </li>
                <li>{val.description}</li>
                <li>₹{val.price}</li>
                <div className="veg">
                  {val.veg == "true" ? (
                    <img
                      height="23"
                      width="23"
                      src="https://openclipart.org/image/800px/304248"
                    />
                  ) : (
                    <img
                      height="23"
                      width="23"
                      src="https://openclipart.org/image/800px/304247"
                    />
                  )}
                </div>
                <button
                  className="cart-btn"
                  onClick={() => dispatch(add(val))}
                  type="submit"
                >
                  Add to Cart
                </button>
              </ul>
            );
        })}
      </div>
    </div>
  );
};

export default Menu;

/*{
  menulist.map((val, indx) => {
    return (
      <ul className="menu-list">
        <li>
          <u>
            <strong>{val.dish}</strong>
          </u>
        </li>
        <li>{val.description}</li>
        <li>₹{val.price}</li>
        <div className="veg">{val.veg == "true" ? "🟢" : "🔴"}</div>
        <button
          className="cart-btn"
          onClick={() => dispatch(add(val))}
          type="submit"
        >
          Add to Cart
        </button>
      </ul>
    );
  });
}*/

{
  /*async function getData() {
  const res = await fetch("/menudata.json");
  const data = await res.json();
  setmenulist(data);
}

*/
}
