import React from "react";
import "./Actor.css";

const Actor = (props) => {
  const { img, name, age, gender, money, year } = props.student;
  return (
    <div className="col-4">
          <div className="card h-100">
            <img src={img} className="card-img-top w-200px" alt="" />
            <div className="card-body">
              <h5 className="card-title">Name:{name}</h5>
              <h5>Gender:{gender}</h5>
              <h5>Class:{year}</h5>
              <h5>Age:{age}</h5>
              <h5>Demand:{money} TK</h5>
              <button onClick={()=>props.addToCart(props.student)} type="button" className="btn"><i className="fas fa-plus-square"></i> Select</button>
            </div>
          </div>
    </div>
  );
};

export default Actor;
