import { Typography, Divider, Button } from "@material-ui/core";
import { MdAdd } from "react-icons/md";
import ClassContainer from "../containers/ClassContainers/ClassContainer";

import React, { useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFasalo } from "../redux/actions/fasalActions";

function Classes() {
  const classes = ["Form1", "Form2", "Form3", "Form4", "Form5","Form1", "Form", "Form3"]
  
  const fasalo = useSelector((state) => state.allFasalo.fasalo);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("/api/v1/classes")
      .catch((err) => {
        console.log("Err: ", err);
      });
      console.log(response)
    dispatch(setFasalo(response.data.data.classes));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Fasalo :", fasalo);
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
        >
          Add New Class
        </Button>
      </div>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {fasalo.map((product) => (
          <ClassContainer value = {product}/>
        ))}
      </div>
    </div>
  );
}

export default Classes;
