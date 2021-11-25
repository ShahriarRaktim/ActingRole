import React, { useEffect, useState } from "react";
import Actor from "../Actor/Actor";
import Cart from "../Cart/Cart";
import "./Student.css";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch("./student.json")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);
  const addToCart = (student) => {
      let newCart = [...cart, student];
      setCart(newCart)
  };
  return (
    <div className="students pt-3">
      <div className="container">
        <div className="row gx-3 gy-3">
          {students.map((student) => (
            <Actor key={student.money} addToCart={addToCart} student={student}></Actor>
          ))}
        </div>
      </div>

      <div><Cart students={cart}></Cart></div>
    </div>
  );
};

export default Student;
