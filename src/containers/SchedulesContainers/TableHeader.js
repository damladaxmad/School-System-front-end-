import React, { useState, useEffect } from "react";
import timeTable from "../../assets/images/timeTable.png";
import { Button } from "@material-ui/core";
import { AiOutlineEdit } from "react-icons/ai";
import { useSelector } from "react-redux";

const TableHeader = (props) => {
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
    console.log("editing")
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
          width: "80px",
          border: "2px solid #EEEEEE",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90px",
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
          Class Routine
        </p>
        <p
          style={{
            margin: "0px",
            fontSize: "16px",
            fontWeight: "500",
            color: "#B9B9B9",
          }}
        >
          {" "}
          {jinni}
        </p>
        <p
          style={{
            margin: "0px",
            fontSize: "16px",
            fontWeight: "500",
            color: "#B9B9B9",
          }}
        >
          {" "}
          10 Courses
        </p>
      </div>
      </div>
      <Button
          variant="contained"
          style={{
            backgroundColor: "#2F49D1",
            color: "white",
            float: "right",
          }}
          startIcon={
            <AiOutlineEdit
              style={{
                color: "white",
              }}
            />
          }
          onClick = {clickHandler}
        >
         Edit Schedule
        </Button>
    </div>
  );
};

export default TableHeader;
