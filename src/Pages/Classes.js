import { Button } from "@material-ui/core";
import { MdAdd } from "react-icons/md";
import ClassContainer from "../containers/ClassContainers/ClassContainer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {useSelector, useDispatch } from "react-redux";
import AddClass from "../containers/ClassContainers/AddClass";
import { setFasalo } from "../redux/actions/fasalActions";

function Classes() {
  const dispatch = useDispatch()
  const fasalo = useSelector((state) => state.allFasalo.fasalo);
  const [show, setShow] = useState(false)
  const [change, setChange] = useState(1)

  const addClassHandler = () => {
    setShow(true)
  }

  const hideModal = () => {
    setShow(false)
  }

  const fetchFasalo = async () => {
    const response = await axios
      .get("/api/v1/classes")
      .catch((err) => {
        console.log("Err: ", err);
      });
      console.log(response)
    dispatch(setFasalo(response.data.data.classes));
  };

  useEffect(()=> {
    fetchFasalo()
  }, [show, change])

  return (
    <div
      style={{
        height: "100%",
        width: "95%",
        margin: "0px auto",
        display: "flex",
        gap: "14px",
        flexDirection: "column",
      }}
    >
      {show && <AddClass hideModal = {hideModal}/>}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2> Classes</h2>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#2F49D1",
            color: "white",
          }}
          startIcon={
            <MdAdd
              style={{
                color: "white",
              }}
            />
          }
          onClick = {addClassHandler}
        >
          Add New Class
        </Button>
      </div>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {fasalo.map((fasal, index) => (
          <ClassContainer value = {fasal} key = {index}
          change = {()=> setChange(state => state + 1)}/>
        ))}
      </div>
    </div>
  );
}

export default Classes;
