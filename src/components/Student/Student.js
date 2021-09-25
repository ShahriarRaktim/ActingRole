import React, { useEffect, useState } from "react";
import Actor from "../Actor/Actor";
import "./Student.css";

const Student = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("./student.json")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);
  const addToCart = (student) => {
      console.log(student.name)
  };
  return (
    <div className="students bg-info pt-3">
      <div className="container">
        <div className="row gx-3 gy-3">
          {students.map((student) => (
            <Actor key={student.money} addToCart={addToCart} student={student}></Actor>
          ))}
        </div>
      </div>

      <div>cart</div>
    </div>
  );
};

export default Student;
