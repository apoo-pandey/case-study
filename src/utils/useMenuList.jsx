import { useEffect, useState } from 'react'

const useMenuList = () => {
    let [menulist, setmenulist] = useState([]);
    const getData = () => {
      fetch("./menudata.json")
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          setmenulist(data);
        })
        .catch((err) => console.log(err));
    };
  
    useEffect(() => {
      getData();
      console.log("use-effect");
    }, []);

    return menulist
}

export default useMenuList
