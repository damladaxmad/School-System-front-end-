import React, { useState } from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import { Button } from "@material-ui/core";
import { MdAdd } from "react-icons/md";
import { FormControl, Select, MenuItem } from "@mui/material";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Students = () => {
  const [tableData, setTableData] = useState([
    {
      name: "Raj",
      email: "Raj@gmail.com",
      phone: 7894561230,
      age: null,
      gender: "M",
      city: "Chennai",
      fee: 78456,
    },
    {
      name: "Mohan",
      email: "mohan@gmail.com",
      phone: 7845621590,
      age: 35,
      gender: "M",
      city: "Delhi",
      fee: 456125,
    },
    {
      name: "Sweety",
      email: "sweety@gmail.com",
      phone: 741852912,
      age: 17,
      gender: "F",
      city: "Noida",
      fee: 458796,
    },
    {
      name: "Vikas",
      email: "vikas@gmail.com",
      phone: 9876543210,
      age: 20,
      gender: "M",
      city: "Mumbai",
      fee: 874569,
    },
    {
      name: "Neha",
      email: "neha@gmail.com",
      phone: 7845621301,
      age: 25,
      gender: "F",
      city: "Patna",
      fee: 748521,
    },
    {
      name: "Mohan",
      email: "mohan@gmail.com",
      phone: 7845621590,
      age: 35,
      gender: "M",
      city: "Delhi",
      fee: 456125,
    },
    {
      name: "Sweety",
      email: "sweety@gmail.com",
      phone: 741852912,
      age: 17,
      gender: "F",
      city: "Noida",
      fee: 458796,
    },
    {
      name: "Vikas",
      email: "vikas@gmail.com",
      phone: 9876543210,
      age: 20,
      gender: "M",
      city: "Mumbai",
      fee: 874569,
    },
    {
      name: "Raj",
      email: "Raj@gmail.com",
      phone: 7894561230,
      age: null,
      gender: "M",
      city: "Chennai",
      fee: 78456,
    },
    {
      name: "Mohan",
      email: "mohan@gmail.com",
      phone: 7845621590,
      age: 35,
      gender: "M",
      city: "Delhi",
      fee: 456125,
    },
    {
      name: "Sweety",
      email: "sweety@gmail.com",
      phone: 741852912,
      age: 17,
      gender: "F",
      city: "Noida",
      fee: 458796,
    },
    {
      name: "Vikas",
      email: "vikas@gmail.com",
      phone: 9876543210,
      age: 20,
      gender: "M",
      city: "Mumbai",
      fee: 874569,
    },
  ]);
  const [value, setValue] = useState("ji");
  const [query, setQuery] = useState("");

  const handler = (data) => {
    return data.filter(
      (asd) =>
        asd.name.toLowerCase().includes(query) ||
        asd.city.toLowerCase().includes(query)
    );
  };

  const columns = [
    { title: "Name", field: "name",  cellStyle: {
      textAlign: "left"
  } },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
    { title: "Age", field: "age", emptyValue: ()=> <em>null</em> },
    { title: "City", field: "city" },
    { title: "Fee", field: "fee" },
  ];

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        margin: "0px auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#EFF0F6",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "95%",
          margin: "auto",
        }}
      >
        <h2> Students</h2>
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
          Add New Student
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          padding: "20px",
          background: "white",
          width: "95.3%",
          margin: "auto",
          marginTop: "20px",
          borderRadius: "8px 8px 0px 0px",
        }}
      >
        <input
          type="text"
          placeholder="Search"
          style={{
            width: "400px",
            height: "40px",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "8px",
            background: "#EFF0F6",
            border: "none",
          }}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div style={{ display: "flex", gap: "20px" }}>
          <FormControl style={{ padding: "0px", margin: "0px" }}>
            <Select
              style={{
                margin: "0px",
                height: "40px",
                width: "150px",
                color: "black",
                backgroundColor: "white",
              }}
              value={value}
              // onChange={maadoHandler}
            >
              <MenuItem value={value}> All Class</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ padding: "0px", margin: "0px" }}>
            <Select
              style={{
                margin: "0px",
                height: "40px",
                width: "150px",
                color: "black",
                backgroundColor: "white",
              }}
              value={value}
              // onChange={maadoHandler}
            >
              <MenuItem value={value}> Status</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div style={{ width: "95%", margin: "auto" }}>
        <MaterialTable
          columns={columns}
          data={handler(tableData)}
          options={{
            rowStyle: {
              
            },
            showTitle: false,
            selection: true,
            sorting: false,
            showTextRowsSelected: false,
            toolbar: false,
            pageSizeOptions: [2, 5, 8, 10, 20, 25, 50, 100],
            pageSize: 8,
            actionsColumnIndex: -1,
            headerStyle: { background: "#EFF0F6",  },
          }}
          // onSelectionChange={(rows) => alert('You selected ' + rows + ' rows')}
          actions={[
            {
              icon: () => <BiDotsHorizontalRounded />,
              tooltip: "Save User",
              onClick: (event, rowData) => alert("You saved " + rowData.name),
              position: "row",
            },
            
          ]}
          style={{ borderRadius: "10px", boxShadow: "none" }}
        />
      </div>
    </div>
  );
};

export default Students;
