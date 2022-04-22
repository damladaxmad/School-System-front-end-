import React from "react";
import timeTable from "../../assets/images/timeTable.png";

const TableHeader = (props) => {
  return (
    <div style={{ display: "flex", margin: "20px 30px", gap: "15px" }}>
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
          {props.value}
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
  );
};

export default TableHeader;
