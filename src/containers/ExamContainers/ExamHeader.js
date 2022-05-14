import React, { useState, useEffect } from "react";
import timeTable from "../../assets/images/blueProfile.webp";
import { Button } from "@material-ui/core";
import { AiOutlineEdit } from "react-icons/ai";
import { useSelector } from "react-redux";

const ExamHeader = (props) => {
  const studentInfo = ['Form 1 B', 'Total Marks: 980', 'Percentage: 98%']
  const  [jinni, setJinni] = useState("aaa")
  const fasalo = useSelector((state) => state.allFasalo.fasalo);

  const classSetter = () => {
    fasalo.map((f)=>{
      if (f._id == props.value){
        setJinni(f.name)
      }
    })   
  }

  useEffect(()=>{
    classSetter();
  }, [props.value])

  const clickHandler = () => {
    props.onEdit(props.value)
  }
  
  return (
    <div style={{ display: "flex", margin: "20px 30px", 
    alignItems: "center", justifyContent: "space-between",  }}>
      <div style={{display: "flex", gap: "15px",}}>

      <div
        style={{
          padding: "0px",
          borderRadius: "10px",
          backgroundColor: "white",
          width: "90px",
          border: "2px solid #EEEEEE",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
          overflow: 'hidden'
        }}
      >
        <img
          src={timeTable}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <div>
        <p style={{ margin: "0px", fontSize: "18px", fontWeight: "bolder" }}>
          {" "}
          Damlad Axmad Dasar
        </p>
      {studentInfo.map((i)=> (
           <p
           style={{
             margin: "0px",
             fontSize: "16px",
             fontWeight: "500",
             color: "#B9B9B9",
           }}
         >
           {i}
         </p>
      ))} 
      
      </div>
      </div>

    </div>
  );
};

export default ExamHeader;
