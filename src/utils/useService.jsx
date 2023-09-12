import { useEffect, useState } from "react";

export const useService = () => {
    const [services, setServices] = useState([]);
    const getData = () => {
      fetch("./service.json")
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          setServices(data);
        })
        .catch((err) => console.log("err", err));
    };
    useEffect(() => {
      console.log("service-use-effect got fired");
      getData();
    }, []);

    return services;
}