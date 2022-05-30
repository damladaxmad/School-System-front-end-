import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { TextField, Button } from "@mui/material";
import axios from "axios";

const CreateExam = (props) => {
    const [again, setAgain] = useState("")
    if (props.updateExam) {
        
        console.log(props.updatedExamCharge.name)
    }
    const examChargesArr = [
        { label: "Enter Name", type: "text", name: "name" },
        { label: "Enter Description", type: "text", name: "description" },
        { label: "Enter Price", type: "number", name: "price" },
      ];

    const validate = (values) => {
        const errors = {};
    
        if (!values.name) {
          errors.name = "Field is Required";
        }
    
        if (!values.description) {
          errors.description = "Field is Required";
        }
    
        
        if (!values.price) {
          errors.price = "Field is Required";
        }
        return errors;
      };
    
      const formik = useFormik({
        initialValues: {
          name: props.updateExam ? props.updatedExamCharge?.name : "",
          description: props.updateExam ? props.updatedExamCharge?.description : "",
          price: props.updateExam ? props.updatedExamCharge?.price : "",
        },
        enableReinitialize: true,
        validate,
        onSubmit: async (values, { resetForm }) =>  {
            if (!props.updateExam) {
                axios.post(`/api/v1/examCharges`, values).then((res) => {
                  alert("Successfully Created")
                  props.refreshOnCreate(values.name)
                });
                resetForm();
            } else if (props.updateExam) {
                axios.patch(`/api/v1/examCharges/${props.updatedExamCharge._id}`,
                 values).then((res) => {
                    alert("Successfully Updated")
                    // props.refreshOnCreate()
                  });
                  props.updateRefresh()
                  resetForm();
            }
        },
      }); 

      useEffect(()=> {
      }, [props])

    return (
        <div style={{display: "flex", flexDirection: "column",
        gap: "20px"}}>
              <p
            style={{
              margin: "0px",
              fontSize: "22px",
              color: "#171717",
              fontWeight: "700",
              marginBottom: "7px",
            }}
          >
            Create Exam Charge
          </p>
          <form
      onSubmit={formik.handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "16px" }}
    >
      {examChargesArr.map((a, index) => (
        <div>
           <TextField
              label= {a.name}
              placeholder={a.label}
              id={a.name}
              name={a.name}
              type={a.type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[a.name]}
              style={{ width: "290px", color: "black" }}
              // key={index}
            />
          {formik.touched[a.name] && formik.errors[a.name] ? (
            <div style={{ color: "red" }}>{formik.errors[a.name]}</div>
          ) : null}
        </div>
      ))}

      <Button type="submit"
      style = {{backgroundColor: "#2F49D1",
            fontSize: "18px", fontWeight: "550"}}
            variant='contained'>
              {props.updateExam ? "Update" : "Save"}
            </Button>
    </form>
         
            
          </div>
    )
}

export default CreateExam