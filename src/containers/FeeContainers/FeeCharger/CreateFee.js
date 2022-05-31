import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { TextField, Button, MenuItem, FormControl } from "@mui/material";
import axios from "axios";
import { useSelector } from 'react-redux';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CreateFee = (props) => {
    
  const [feeChargesArr, setFeeChargesArr] = useState([
    { label: "Enter Name", type: "text", name: "name" },
    { label: "Enter Description", type: "text", name: "description" },
  ])

  const examCharges = useSelector(state => state.exams.examCharges)
  const monthsList =  ["January","February","March","April","May","June","July",
  "August","September","October","November","December"];
  const [selectedMonths, setSelectedMonths] = useState([])

  const [month, setMonth] = useState()
  const [exam, setExam] = useState()

  const selectMonthHandler = (e) => {
    setMonth(e.target.value)
    setSelectedMonths([...selectedMonths, e.target.value])
  }

  console.log(selectedMonths)

  const selectExamHandler = (e) => {
    setExam(e.target.value)
  }

  const [monthlyChecked, setMontlyChecked] = useState(false)
  const [examChecked, setExamChecked] = useState(false)


  const handleMonthlyCheckBox = () => {
    setMontlyChecked((state)=> state ? false : true)
  }

  const handleExamCheckBox = () => {
    setExamChecked((state)=> state ? false : true)   
  }

  const selectedMonthHandler = (e) => {
    console.log(e.target.value)
    setSelectedMonths(selectedMonths =>
      selectedMonths.filter(month => month != e.target.value))
  }

    const validate = (values) => {
        const errors = {};
    
        if (!values.name) {
          errors.name = "Field is Required";
        }
    
        if (!values.description) {
          errors.description = "Field is Required";
        }
    
        
        return errors;
      };
    
      const formik = useFormik({
        initialValues: {
          name: props.updateFee ? props.updatedFeeCharge?.name : "",
          description: props.updateFee ? props.updatedFeeCharge?.description : "",
          months: props.updateFee ? props.updatedFeeCharge?.months : "",
        },
        enableReinitialize: true,
        validate,
        onSubmit: async (values, { resetForm }) =>  {
          if (exam) values.exam = exam
          if (selectedMonths) values.months = selectedMonths
            if (!props.updateFee) {
                axios.post(`/api/v1/feeCharges`, values).then((res) => {
                  alert("Successfully Created")
                  props.refreshOnCreate(values.name)
                });
                resetForm();
            } else if (props.updateFee) {
                axios.patch(`/api/v1/feeCharges/${props.updatedFeeCharge._id}`,
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
            Create Fee Charge
          </p>
          <FormGroup style = {{display: "flex", flexDirection: "row"}}>
          <FormControlLabel control={
          <Checkbox 
          checked = {monthlyChecked}
          onChange = {handleMonthlyCheckBox}/>
        } 
          label="Montly" />
      <FormControlLabel  control={
      <Checkbox 
      checked = {examChecked}
      onChange = {handleExamCheckBox}/>
      } label="With Exam" />
    </FormGroup>
          <form
      onSubmit={formik.handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "16px" }}
    >
      {feeChargesArr.map((a, index) => (
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
      {monthlyChecked && <FormControl >
          <TextField
          select
            style={{width: "290px", color: "black" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={month}
            label = "Enter Month"
            onChange={selectMonthHandler}
          >
            {monthsList.map((month, index) => (
              <MenuItem value={month} key={index}>
                {month}
              </MenuItem>
            ))}
          </TextField>
          <div style={{display: "flex"}}>
          {selectedMonths?.map(month => (
            <FormGroup >
          <FormControlLabel control={
          <Checkbox 
          checked = {true}
          value = {month}
          onChange = {selectedMonthHandler}/>
        } 
          label= {month} />
          </FormGroup>
          ))}
          </div>
        </FormControl>}

        {examChecked && <FormControl >
          <TextField
          select
            style={{width: "290px", color: "black" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={exam}
            label = "Enter Exam"
            onChange={selectExamHandler}
          >
            {examCharges.map((exam, index) => (
              <MenuItem value={exam._id} key={index}>
                {exam.name}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>}

      <Button type="submit"
      style = {{backgroundColor: "#2F49D1",
            fontSize: "18px", fontWeight: "550"}}
            variant='contained'>
              {props.updateFee ? "Update" : "Save"}
            </Button>
    </form>
         
            
          </div>
    )
}

export default CreateFee