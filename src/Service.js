import { useState, useEffect } from "react";
const Service = () => {
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
  return (
    <div className="main-service">
      <h3>
        ⎯⎯ <i>Our services</i> ⎯⎯
      </h3>
      <br />
      <h1 className="italic-style"> Explore Our Services</h1>
      <div className="service">
        {services.map((val, indx) => {
          return (
            <ul className="service-list">
              <strong className="service-icon">{val.icon}</strong>
              <li>
                <strong>{val.service}</strong>
              </li>
              <br />
              <li>{val.description}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
export default Service;
